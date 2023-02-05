module.exports = function(eleventyConfig) {
  // When `permalink` is false, the file is not written to disk
  eleventyConfig.addGlobalData("eleventyComputed.permalink", function() {
    return (data) => {
      // Always skip during non-watch/serve builds
      if(data.draft && !process.env.BUILD_DRAFTS) {
        return false;
      }

      return data.permalink;
    }
  });

  // When `eleventyExcludeFromCollections` is true, the file is not included in any collections
  eleventyConfig.addGlobalData("eleventyComputed.eleventyExcludeFromCollections", function() {
    return (data) => {
      // Always exclude from non-watch/serve builds
      if(data.draft && !process.env.BUILD_DRAFTS) {
        return true;
      }

			if (data.page.outputFileExtension === 'css') {
				return true;
			}

      return data.eleventyExcludeFromCollections;
    }
  });

  eleventyConfig.on("eleventy.before", ({runMode}) => {
    // Set the environment variable
    if(runMode === "serve" || runMode === "watch") {
      process.env.BUILD_DRAFTS = true;
    }
  });
}
