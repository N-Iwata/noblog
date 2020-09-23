import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const PrivacyPolicy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="About" />
        <h1>Privacy Policy</h1>
        <h2>広告の配信について</h2>
        <p>
          当サイトは第三者配信の広告サービス「Google Adsenseグーグルアドセンス」を利用しています。
          広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookie（クッキー）を使用することがあります。
          Cookie（クッキー）を無効にする設定およびGoogleアドセンスに関する詳細は
          <a href="https://policies.google.com/technologies/ads?hl=ja">
            「広告 – ポリシーと規約 – Google」
          </a>
          をご覧ください。
        </p>
        <h2>アクセス解析ツールについて</h2>
        <p>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
        </p>
        <p>
          このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関して、詳しくはここをクリックしてください。
        </p>
        <h2>免責事項</h2>
        <p>
          当サイトで掲載している画像の著作権・肖像権等は各権利所有者に帰属致します。権利を侵害する目的ではございません。記事の内容や掲載画像等に問題がございましたら、各権利所有者様本人が直接メールでご連絡下さい。確認後、対応させて頂きます。
        </p>
        <p>
          当サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任を負いません。
        </p>
        <p>
          当サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めておりますが、誤情報が入り込んだり、情報が古くなっていることもございます。
        </p>
        <p>
          当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>
      </Layout>
    </div>
  );
};

export default PrivacyPolicy;

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
