import { MetadataInterface } from "./interfaces";
import { Node } from "unist";
import * as mustache from "mustache";
export const tranformsLinkNodeToUnfurledNode = (node: Node, card: MetadataInterface) => {
  node.type = "html";
  const template = `
  <div>
    <a
      class="gatsby-remark-link-unfurl"
      href="{{card.url}}"
      target="_blank"
      title="{{card.title}}"
    >
      <div class="gatsby-remark-link-unfurl__container">
        <div class="gatsby-remark-link-unfurl__media">
          <img
            src="{{card.image}}"
          />
        </div>
        <div class="gatsby-remark-link-unfurl__content">
          <header class="gatsby-remark-link-unfurl__title">
            <p title='{{card.title}}'>{{card.title}}</p>
          </header>
          <div class="gatsby-remark-link-unfurl__description">
            <p title='{{card.description}}'>{{card.description}}</p>
          </div>
          <footer>
            <p title="{{card.site}}">{{card.site}}</p>
            <img
              src="{{card.logo}}"
            />
          </footer>
        </div>
      </div>
    </a>
  </div>
  `;

  node.value = mustache.render(template, { card: card });

  delete node.children;

  return node;
};
