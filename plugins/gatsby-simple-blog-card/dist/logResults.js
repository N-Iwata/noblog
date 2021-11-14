"use strict";
var logResults = function (results, node, reporter) {
    var successfulEmbedsCount = 0;
    var failedEmbedsCount = 0;
    var unconformingEmbedsCount = 0;
    var message = "";
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var result = results_1[_i];
        if (result instanceof Error) {
            failedEmbedsCount++;
            reporter.error("gatsby-remark-link-unfurl: Error embedding " + result.url, result);
        }
        else if (result) {
            successfulEmbedsCount++;
        }
        else {
            unconformingEmbedsCount++;
        }
    }
    message += "gatsby-remark-link-unfurl:";
    message += " Successful embeds: " + successfulEmbedsCount;
    if (failedEmbedsCount > 0) {
        message += " | Failed embeds: " + failedEmbedsCount;
    }
    if (unconformingEmbedsCount > 0) {
        message += " | Links with no matching provider: " + unconformingEmbedsCount;
    }
    message += " | Node: " + node.id;
    reporter.info(message);
};
module.exports = logResults;
//# sourceMappingURL=logResults.js.map