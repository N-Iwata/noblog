import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Bio from "../components/bio";
// import image from "../images/about.png";

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  const image = data.file.childImageSharp.fluid;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="About" />
        <h1>About</h1>
        <p>おはようございます！こんにちは！こんばんは！</p>
        <p>
          東京で働く名古屋生まれの麻雀と芝生と娘と妻を愛するアラフォーエンジニアの
          <br />
          麻雀と芝生大好きwebエンジニアおじさんこと<b>のふのふ</b>(@rpf_nob)と申します！！
        </p>
        <p>
          もともとは遊技機（パチスロ）開発のエンジニアとして仕事をしていましたが、2019年に新規事業創出を目的にweb開発やデータサイエンス（機械学習）方面に社内ジョブチェンジしました。
        </p>
        <p>
          エンジニアとしてはそれなりに長いキャリアがありますが、web開発やデータサイエンスに関してはほぼ初学者であるため、日々勉強中の身であります。
        </p>
        <p>
          このブログは<b>web開発やデータサイエンス関連で学んだことに関する技術やネタ</b>
          をメインに発信し、趣味の麻雀と芝生管理の話や買ったもののレビューや時事ネタなどいろいろなものサブ的に発信していけたらと思います。
        </p>
        <p>今後ともどうぞよろしくお願いします！！</p>
        <span>[自宅の芝生(2019年8月撮影)]</span>
        <Img fluid={image} alt="自宅の芝生(2019年8月撮影)" />
        <br />
        <footer>
          <Bio />
        </footer>
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
    file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
