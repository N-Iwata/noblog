"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var unfurl_js_1 = require("unfurl.js");
var fs = require("fs");
var path = require("path");
var selectPossibleLinkNodes_1 = require("./selectPossibleLinkNodes");
var logResults_js_1 = __importDefault(require("./logResults.js"));
var transformLinkToUnfurledNode_1 = require("./transformLinkToUnfurledNode");
exports.default = (function (_a, rawOptions) {
    var markdownAST = _a.markdownAST, markdownNode = _a.markdownNode, cache = _a.cache, reporter = _a.reporter;
    return __awaiter(void 0, void 0, void 0, function () {
        var options_1, processedUrlsJSON_1, processedUrlsFile, nodes, results, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    options_1 = rawOptions;
                    processedUrlsJSON_1 = {};
                    if (fs.existsSync(options_1.processedUrlsFile)) {
                        processedUrlsFile = fs.readFileSync(options_1.processedUrlsFile);
                        processedUrlsJSON_1 = JSON.parse(processedUrlsFile);
                    }
                    else {
                        fs.mkdirSync(path.dirname(options_1.processedUrlsFile), { recursive: true });
                        fs.writeFileSync(options_1.processedUrlsFile, "{}");
                    }
                    nodes = (0, selectPossibleLinkNodes_1.selectPossibleLinkNodes)(markdownAST);
                    if (!(nodes.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Promise.all(nodes.map(function (node) { return processNode(node, options_1, processedUrlsJSON_1); }))];
                case 1:
                    results = _b.sent();
                    fs.writeFileSync(options_1.processedUrlsFile, JSON.stringify(processedUrlsJSON_1, null, 2));
                    (0, logResults_js_1.default)(results, markdownNode, reporter);
                    _b.label = 2;
                case 2: return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    reporter.error("gatsby-remark-link-unfurl: Error processing links", error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
// For each node this is the process
var processNode = function (node, options, processedUrl) { return __awaiter(void 0, void 0, void 0, function () {
    var metaData, error_2;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    return __generator(this, function (_q) {
        switch (_q.label) {
            case 0:
                _q.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, unfurl_js_1.unfurl)(node.url)];
            case 1:
                metaData = _q.sent();
                if (!processedUrl[node.url]) {
                    processedUrl[node.url] = {
                        title: (_d = (_b = (_a = metaData.twitter_card) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : (_c = metaData.open_graph) === null || _c === void 0 ? void 0 : _c.title) !== null && _d !== void 0 ? _d : metaData.title,
                        description: (_h = (_f = (_e = metaData.twitter_card) === null || _e === void 0 ? void 0 : _e.description) !== null && _f !== void 0 ? _f : (_g = metaData.open_graph) === null || _g === void 0 ? void 0 : _g.description) !== null && _h !== void 0 ? _h : metaData.description,
                        url: node.url,
                        image: ((_k = (_j = metaData.twitter_card) === null || _j === void 0 ? void 0 : _j.images) === null || _k === void 0 ? void 0 : _k[0].url) ||
                            ((_m = (_l = metaData.open_graph) === null || _l === void 0 ? void 0 : _l.images) === null || _m === void 0 ? void 0 : _m[0].url) ||
                            undefined,
                        logo: metaData.favicon,
                        site: ((_o = metaData.oEmbed) === null || _o === void 0 ? void 0 : _o.provider_name) || ((_p = metaData.twitter_card) === null || _p === void 0 ? void 0 : _p.site) || undefined,
                    };
                }
                return [2 /*return*/, (0, transformLinkToUnfurledNode_1.tranformsLinkNodeToUnfurledNode)(node, processedUrl[node.url])];
            case 2:
                error_2 = _q.sent();
                return [2 /*return*/, node];
            case 3: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=index.js.map