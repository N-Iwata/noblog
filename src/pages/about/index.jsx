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
            麻雀と芝生大好きおじさんこと<b>のふのふ</b>と申します！！
          </p>
          <h2>簡易プロフィール</h2>
          <ul>
            <li>名前：のふのふ</li>
            <li>誕生日：1983年3月23日</li>
            <li>出身：愛知県名古屋市</li>
            <li>居住地：埼玉県三郷市</li>
            <li>血液型：AB型</li>
            <li>家族：妻と娘の3人家族</li>
            <li>職業：フロントエンドエンジニア</li>
            <li>会社：都内のスタートアップ企業</li>
            <li>趣味①：麻雀（やるのも見るのも好き）</li>
            <li>趣味②：芝生管理（自宅の庭の芝生管理）</li>
          </ul>
          <p>
            もともとはパチスロ開発のエンジニアとして仕事をしていましたが、2019年に新規事業創出を目的にweb開発やデータサイエンス（機械学習）方面に社内ジョブチェンジしました。
          </p>
          <p>
            エンジニアとしてはそれなりに長いキャリアがありますが、web開発やデータサイエンスに関してはほぼ初学者であるため、日々勉強中の身であります。
          </p>
          <p>最近は個人開発でwebアプリをリリースするのを目標にしています。</p>
          <h2>利用技術まとめ</h2>
          <p>
            仕事や個人開発で使ったものや勉強中のものを羅列します。2019年以前はほぼパチスロ開発で使うC系の技術のみなので、大多数がこの1~2年で学んだ技術ですね・・・。
          </p>
          <h3>Language/Platform</h3>
          <ul>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
            <li>VC++(MFC)</li>
            <li>C#（触っただけ）</li>
            <li>VB,VBA</li>
          </ul>
          <h3>JavaScript Framework</h3>
          <ul>
            <li>React.js</li>
            <li>Gatsby.js（このブログ）</li>
            <li>Next.js</li>
          </ul>
          <h3>Python Library</h3>
          <ul>
            <li>NumPy</li>
            <li>Pandas</li>
            <li>MatplotLib</li>
            <li>Scikit-learn</li>
            <li>TensorFrow（触っただけ）</li>
            <li>Beautiful Soup</li>
            <li>Selenium</li>
            <li>OpenCV</li>
          </ul>
          <h3>UI Library</h3>
          <ul>
            <li>Material-UI</li>
            <li>Chakra UI</li>
          </ul>
          <h3>Styling</h3>
          <ul>
            <li>Sass</li>
            <li>styled-components</li>
          </ul>
          <h3>API Layer</h3>
          <ul>
            <li>axios</li>
            <li>ApolloClient</li>
            <li>Firebase</li>
          </ul>
          <h3>Build Environment</h3>
          <ul>
            <li>Webpack</li>
          </ul>
          <h3>Developer Experience</h3>
          <ul>
            <li>ESLint</li>
            <li>Prettier</li>
          </ul>
          <h3>Testing</h3>
          <ul>
            <li>Jest</li>
            <li>React Testing Library</li>
            <li>Cypress</li>
          </ul>
          <h3>Static Site Hosting</h3>
          <ul>
            <li>Firebase Hosting</li>
            <li>Netlify</li>
            <li>Vercel</li>
          </ul>
          <h3>UI Design</h3>
          <ul>
            <li>XD</li>
            <li>Figma</li>
          </ul>
          <h3>Firebase</h3>
          <ul>
            <li>Firestore</li>
            <li>Authentication</li>
            <li>Storage</li>
            <li>Hosting</li>
            <li>Functions</li>
          </ul>
          <h3>Backend</h3>
          <ul>
            <li>Node.js（express）</li>
          </ul>
          <h3>Database</h3>
          <ul>
            <li>MySQL</li>
            <li>Cloud Firestrore</li>
            <li>MongoDB</li>
          </ul>
          <h3>AWS（ほぼ初学者）</h3>
          <ul>
            <li>VPC</li>
            <li>EC2</li>
            <li>RDS</li>
            <li>S3</li>
            <li>CodeCommit</li>
          </ul>
          <h3>Web Server</h3>
          <ul>
            <li>Apache</li>
          </ul>
          <h3>Version Control system</h3>
          <ul>
            <li>Git/GitHub</li>
            <li>Subversion</li>
          </ul>
          <h2>このブログで発信すること</h2>
          <p>
            このブログはweb開発（特にフロントエンド）に関することをメインに書きますが、趣味や時事ネタなども雑記的に書いていきます。
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
        gatsbyImageData(width: 1000, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`;
