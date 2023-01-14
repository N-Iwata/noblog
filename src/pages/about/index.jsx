import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import * as styles from "../../templates/blogpost/blog.module.css";

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  const image = data.file.childImageSharp.gatsbyImageData;

  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <Seo title="About" />
        <div className={styles.blog__section}>
          <h1>About</h1>

          <p>おはようございます！こんにちは！こんばんは！</p>
          <p>
            <b>のふのふ</b>と申します！！
          </p>
          <h2>簡易プロフィール</h2>
          <ul>
            <li>名前 : のふのふ</li>
            <li>誕生日 : 1983年3月23日</li>
            <li>出身 : 愛知県名古屋市</li>
            <li>居住地 : 埼玉県三郷市</li>
            <li>血液型 : AB型</li>
            <li>家族 : 妻と娘の3人家族</li>
            <li>職業 : フロントエンドエンジニア</li>
            <li>会社 : 都内のスタートアップ企業</li>
            <li>趣味① : 麻雀（やるのも見るのも好き）</li>
            <li>趣味② : 芝生管理（自宅の庭の芝生管理）</li>
          </ul>
          <p>受託会社のパチスロ開発のエンジニアとしてキャリアをスタート。</p>
          <p>
            そこから大手のぱちんこパチスロメーカーを経て、現在は都内のロボティクス領域のスタートアップでクラウドシステム（主にフロントエンド）の開発をしています。
          </p>
          <p>
            エンジニアとしてはそれなりに長いキャリアがありますが、web開発に関しては日々勉強中の身であります。
          </p>
          <p>
            普段はReact(Next.js),TypeScriptでフロントエンド中心に書いていて、Golangでバックエンドも少しだけ書いています。
          </p>

          <h2>このブログで発信すること</h2>
          <p>
            このブログは個人の振り返りとかweb開発（特にフロントエンド）に関することをメインに書きますが、趣味や時事ネタなども雑記的に書いていきます。
          </p>
          <p>今後ともどうぞよろしくお願いします！！</p>
          <span>[自宅の芝生(2019年8月撮影)]</span>

          <GatsbyImage image={image} alt="自宅の芝生(2019年8月撮影)" />

          <br />
        </div>
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
        gatsbyImageData(width: 1200, layout: CONSTRAINED)
      }
    }
  }
`;
