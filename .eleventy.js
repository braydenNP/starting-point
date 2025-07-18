const { DateTime } = require("luxon");
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
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};