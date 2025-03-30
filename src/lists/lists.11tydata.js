export default function () {
	return {
    layout: 'is/list',
    permalink: function(data) {
      return `/${data.page.fileSlug}/index.html`;
    },
  };
}
