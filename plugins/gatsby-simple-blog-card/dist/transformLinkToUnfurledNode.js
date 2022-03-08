"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tranformsLinkNodeToUnfurledNode = void 0;
var mustache = __importStar(require("mustache"));
var tranformsLinkNodeToUnfurledNode = function (node, card) {
    node.type = "html";
    var template = "\n  <div>\n    <a\n      class=\"gatsby-remark-link-unfurl\"\n      href=\"{{card.url}}\"\n      target=\"_blank\"\n      title=\"{{card.title}}\"\n    >\n      <div class=\"gatsby-remark-link-unfurl__container\">\n        <div class=\"gatsby-remark-link-unfurl__media\">\n          <img\n            src=\"{{card.image}}\"\n          />\n        </div>\n        <div class=\"gatsby-remark-link-unfurl__content\">\n          <header class=\"gatsby-remark-link-unfurl__title\">\n            <p title='{{card.title}}'>{{card.title}}</p>\n          </header>\n          <div class=\"gatsby-remark-link-unfurl__description\">\n            <p title='{{card.description}}'>{{card.description}}</p>\n          </div>\n          <footer>\n            <p title=\"{{card.site}}\">{{card.site}}</p>\n            <img\n              src=\"{{card.logo}}\"\n            />\n          </footer>\n        </div>\n      </div>\n    </a>\n  </div>\n  ";
    node.value = mustache.render(template, { card: card });
    delete node.children;
    return node;
};
exports.tranformsLinkNodeToUnfurledNode = tranformsLinkNodeToUnfurledNode;
//# sourceMappingURL=transformLinkToUnfurledNode.js.map