import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NavBar from "../components/navbar";
import image from "../images/about.png";

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <NavBar />
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="About" />
        <h1>About</h1>
        <p>
          こんにちは！東京上野で働く名古屋生まれの麻雀と芝生管理が大好きな職業不詳アラフォーエンジニアの
          <b>@rpf-nob</b>と申します！！
        </p>
        <p>
          最近はweb開発系の仕事をメインにしていますが、以前は遊技機（パチスロ）の開発をしていました。
          また、現在は個人開発も隙間時間におこなっていたり、機械学習とかデータ分析などにも興味があるので勉強しています。
        </p>
        <p>
          このブログは主に趣味の麻雀と芝生管理の話と、個人開発している際の気づきや手順、機械学習やデータ分析などを勉強している際に学んだことなどをメインに書いていきますが、
          買ったもののレビューや時事ネタなどいろいろなものを発信していけたらと思います。
        </p>
        <p>今後ともどうぞよろしくお願いします！！</p>
        <span>[自宅の芝生(2019年8月撮影)]</span>
        <img src={image} alt="自宅の芝生(2019年8月撮影)" />
        <Link to="/">← Home</Link>
      </Layout>
    </div>
  );
};

export default Aboutpage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            slug
          }
        }
      }
    }
  }
`;
