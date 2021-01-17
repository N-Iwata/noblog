const path = require(`path`);
const _ = require("lodash");
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
        tags: allMarkdownRemark(limit: 1000) {
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

  // Create blog posts pages.
  const posts = result.data.posts.edges;

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 5,
    component: template,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
  });

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;
    const new1 = posts[0].node;
    const new2 = posts[1].node;
    const new3 = posts[2].node;
    const new4 = posts[3].node;
    const new5 = posts[4].node;

    createPage({
      path: `/${post.node.frontmatter.slug}/`,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
        new1,
        new2,
        new3,
        new4,
        new5,
      },
    });
  });

  const tags = result.data.tags.group;

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
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
