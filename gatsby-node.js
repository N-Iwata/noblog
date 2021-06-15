const path = require(`path`);
const { kebabCase } = require("lodash/string");
const { paginate } = require("gatsby-awesome-pagination");
// const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const tagTemplate = path.resolve(`./src/templates/tags.js`);
  const template = path.resolve(`src/templates/index.js`);

  const result = await graphql(
    `
      {
        posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                slug
                date(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
        tags: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `
  );
  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.posts.edges;
  const tags = result.data.tags.group;

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 7,
    component: template,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
  });

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: `/${post.node.frontmatter.slug}/`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  tags.forEach(tag => {
    createPage({
      path: `/tags/${kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    });
  });
};
/*
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
*/
