import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Bio from "../components/bio";
import { rhythm } from "../utils/typography";
import image from "../images/about.png";

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="About" />
        <h1>About</h1>
        <p>おはようございます！こんにちは！こんばんは！</p>
        <p>
          東京上野で働く名古屋生まれの麻雀と芝生と娘（妻も）を愛するアラフォーエンジニアの
          <br />
          <b>麻雀と芝生大好きwebエンジニアおじさん</b>(@rpf_nob)と申します！！
        </p>
        <p>
          以前は遊技機（パチスロ）開発のエンジニアとして仕事をしていましたが、最近は社内ジョブチェンジによりweb開発（主にフロントエンド）の仕事をメインにしています。
          また、機械学習とかデータ分析などにも興味があるので勉強しています。
        </p>
        <p>
          このブログは<b>web開発で学んだことに関する技術やネタ</b>
          をメインに発信し、趣味の麻雀と芝生管理の話や、機械学習やデータ分析など、
          また買ったもののレビューや時事ネタなどいろいろなものサブ的に発信していけたらと思います。
        </p>
        <p>今後ともどうぞよろしくお願いします！！</p>
        <span>[自宅の芝生(2019年8月撮影)]</span>
        <img src={image} alt="自宅の芝生(2019年8月撮影)" />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
          <Bio />
        </footer>
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
  }
`;
