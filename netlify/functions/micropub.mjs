import slugify from "@sindresorhus/slugify";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.GITHUB_MICROPUB });

const gh = {
  owner: process.env.GITHUB_USERNAME,
  repo: process.env.GITHUB_REPO,
  branch: process.env.GITHUB_BRANCH || 'main',
  committer: {
    name: process.env.GITHUB_NAME,
    email: process.env.GITHUB_EMAIL,
  },
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
};

const currentDate = new Date();
const dateToSlug = (date) => {
  const time = date.toLocaleString("sv-SE", {
    timeZone: process.env.TIME_ZONE || "America/Denver",
    hour12: false,
  });
  return slugify(time);
};

const mdTemplate = (data) => {
  const postMeta = Object.keys(data)
    .filter((item) => item !== 'content' && data[item])
    .map((item) => `${item}: ${data[item]}`)
    .join('\n');

  return Buffer.from(`---
${postMeta}
---
${decodeURIComponent(data.content) || ''}
`).toString("base64");
};

const validToken = async (token) => {
  try {
    const { body } = await fetch(tokenEndpoint, {
      headers: {
        'accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      responseType: 'json'
    })
    return body
  } catch (err) {
    console.error(err)
  }
}

export default async (request, context) => {
  // reject GET requests
  if (request.httpMethod !== 'POST') {
    return new Response(
      "Bad Request: We don't have anything to say about that",
      { status: 400 }
    );
  }

  // Authenticate
  const auth = request.headers.get("authorization");
  if (!auth) {
    return new Response({
      body: "Unauthorized: You'll need an auth token for that",
    }, { status: 401 });
  }

  if (auth != `Bearer ${process.env.MICROPUB}`) {
    return new Response({
      body: "Forbidden: You'll need a better auth token for that",
    }, { status: 403 });
  }

  // Handle the request
  try {
    const params = new URL(request.url).searchParams;

    if (!params.get('content') || params.get('h') !== 'entry') {
      return new Response(
        "Bad Request: We only handle h-entries with content",
        { status: 400 }
      );
    }

    const slug = dateToSlug(currentDate);
    const permalink = `/micro/${slug}/index.html`;
    const data = {
      date: currentDate.toISOString(),
      permalink,
    };
    params.forEach((value, key) => data[key] = value);

    gh.path = `src/micro/${slug.split('-').at(0)}/${slug}.md`;
    gh.message = `Micro post: ${slug}`;
    gh.content = mdTemplate(data);

    // Create a new file on GitHub with the octokit library
    await octokit.request(
      `PUT /repos/${gh.owner}/${gh.repo}/contents/${gh.path}`, gh
    );

    return new Response(
      JSON.stringify(gh),
      {
        status: 201,
        headers: { Location: `${process.env.URL}${permalink}` },
      }
    );
  } catch (error) {
    // Log any errors, so we can debug later.
    console.log({ error })

    return new Response(
      JSON.stringify(error),
      { status: 400 }
    );
  }
}
