module.exports = function(config) {
  config.set({
    frameworks: ["jasmine"],
    files: ["./spec/*.specc.js"],
    browsers: ["Chrome"],
    reporters: ["kjhtml"],
    logLevel: config.LOG_DEBUG,
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    }
  });
};
