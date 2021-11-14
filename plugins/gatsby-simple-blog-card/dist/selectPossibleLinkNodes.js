"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPossibleLinkNodes = void 0;
var unist_util_select_1 = require("unist-util-select");
var selectPossibleLinkNodes = function (markdownAST) {
    return (0, unist_util_select_1.selectAll)('paragraph link:only-child', markdownAST);
};
exports.selectPossibleLinkNodes = selectPossibleLinkNodes;
//# sourceMappingURL=selectPossibleLinkNodes.js.map