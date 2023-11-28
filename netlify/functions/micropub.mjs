const qs = require('querystring');

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({
  auth: process.env.GH_MICROPUB,
})

export default async (event, context) => {

  // GET request
  if (event.httpMethod === 'GET') {
    return Response.json({});
  }

  const auth = event.headers.get("authorization");

  // Verify the token
  if (
    !auth || auth != `Bearer ${process.env.MICROPUB}`
  ) {
    return Response.json({}, { status: 401 });
  }

  const text = await event.text();
  const data = qs.parse(text);
  const date = new Date()

  data.date = date.toISOString();

  const postMeta = Object.keys(data)
    .filter((item) => item !== 'content' && data[item])
    .map((item) => `${item}: ${data[item]}`)
    .join('\n');

  const filePath = data.date.replaceAll('-', '/').replace('T', '/T');
  const fileContent = `---
${postMeta}
---
${data.content || ''}
`;

  // Create a new file on GitHub with the octokit library
  // owner/repo and message/path are hardcoded here,
  // you might want to change those to your own likings.
  return octokit.repos.createOrUpdateFileContents({
    owner: "mirisuzanne",
    repo: "mia.wtf",
    message: (`Adding micro entry: ${data.title || data.date}`),
    path: `src/micro/${filePath}.md`,
    content: Buffer.from(fileContent).toString("base64")
  }).then((response) => {
    return Response.json({
      post_url: `${process.env.URL}`,
    });
  }).catch((error) => {
    // Log any errors, so we can debug later.
    console.log({ error })

    return Response.json({
      body: JSON.stringify(error),
    }, { status: 400 });

  });
}
