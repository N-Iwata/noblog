import { unfurl } from "unfurl.js";
const fs = require("fs");
const path = require("path");
import { selectPossibleLinkNodes } from "./selectPossibleLinkNodes";
import logResults from "./logResults.js";
import { tranformsLinkNodeToUnfurledNode } from "./transformLinkToUnfurledNode";
import { MetadataInterface } from "./interfaces";
import { Node } from "unist";

export default async (
  {
    markdownAST,
    markdownNode,
    cache,
    reporter,
  }: { markdownAST: any; markdownNode: any; cache: any; reporter: any },
  rawOptions: any
) => {
  try {
    const options = rawOptions;

    let processedUrlsJSON = {};

    if (fs.existsSync(options.processedUrlsFile)) {
      const processedUrlsFile = fs.readFileSync(options.processedUrlsFile);
      processedUrlsJSON = JSON.parse(processedUrlsFile);
    } else {
      fs.mkdirSync(path.dirname(options.processedUrlsFile), { recursive: true });
      fs.writeFileSync(options.processedUrlsFile, "{}");
    }

    const nodes = selectPossibleLinkNodes(markdownAST);

    if (nodes.length > 0) {
      const results = await Promise.all(
        nodes.map((node: any) => processNode(node, options, processedUrlsJSON))
      );
      fs.writeFileSync(options.processedUrlsFile, JSON.stringify(processedUrlsJSON, null, 2));
      logResults(results, markdownNode, reporter);
    }
  } catch (error) {
    reporter.error(`gatsby-remark-link-unfurl: Error processing links`, error);
  }
};

// For each node this is the process
const processNode = async (
  node: any,
  options: any,
  processedUrl: { [key: string]: MetadataInterface }
): Promise<Node> => {
  try {
    const metaData = await unfurl(node.url);

    if (!processedUrl[node.url]) {
      processedUrl[node.url] = {
        title: metaData.twitter_card?.title ?? metaData.open_graph?.title ?? metaData.title,
        description:
          metaData.twitter_card?.description ??
          metaData.open_graph?.description ??
          metaData.description,
        url: node.url,
        image:
          metaData.twitter_card?.images?.[0].url ||
          metaData.open_graph?.images?.[0].url ||
          undefined,
        logo: metaData.favicon,
        site: metaData.oEmbed?.provider_name || metaData.twitter_card?.site || undefined,
      };
    }

    return tranformsLinkNodeToUnfurledNode(node, processedUrl[node.url]);
  } catch (error) {
    return node;
  }
};
