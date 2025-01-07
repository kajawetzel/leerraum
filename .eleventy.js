module.exports = function (eleventyConfig) {
  
  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./posts/*.md");
  });

  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("admin");

eleventyConfig.addFilter("addTargetBlank", function(content) {
    const { JSDOM } = require("jsdom");
    const dom = new JSDOM(content);
    const links = dom.window.document.querySelectorAll("a");

    links.forEach(link => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });

    return dom.serialize();
  });
};




