const { DateTime } = require("luxon");
const eleventyPluginSharpImages = require("@codestitchofficial/eleventy-plugin-sharp-images");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const client = require("./src/_data/client.js");

module.exports = async function(eleventyConfig) {
	// Configure Eleventy
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/js/");
    eleventyConfig.addPassthroughCopy("./src/admin/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/fonts/");
    eleventyConfig.addPassthroughCopy("./src/styles.css");
    eleventyConfig.addPassthroughCopy("./src/*/styles.css");
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    }) 
    eleventyConfig.addPlugin(eleventyPluginSharpImages, {
        urlPath: "/images",
        outputDir: "public/images",
    });
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: client.domain,  // Replace with your actual site URL
        },
    });

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};