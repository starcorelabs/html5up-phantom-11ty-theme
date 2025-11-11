module.exports = function(eleventyConfig) {
        eleventyConfig.setServerOptions({
        showAllHosts: true,
    });

    eleventyConfig.addPassthroughCopy('./src/assets');
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };

}