---
title: 【GatsbyJS】ブログにソーシャルシェアボタンを追加した
date: "2020-05-11"
description: 今回はGatsbyJSブログの記事ページにSNS等のシェアボタンを追加します。さまざまな人に見てもらいたいです！
slug: 2020-05-11/gatsby-social-share
tags: [GatsbyJS, gatsby-starter-blog]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

今回は GatsbyJS ブログの記事ページに SNS 等のシェアボタンを追加します。<br>
さまざまな人に見てもらいたいです！

[GitHub の ReadMe](https://github.com/nygardk/react-share)をみれば簡単に実装できます。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/nygardk/react-share" data-iframely-url="//cdn.iframe.ly/SZZOMUN"></a></div></div>

## 前提

このブログは GatsbyJS の[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)のテンプレートから作成しています。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" data-iframely-url="//cdn.iframe.ly/qjUJkBu?iframe=card-small"></a></div></div>

<br/>

ソースコードはこちら（参考になったという方は ⭐️ をポチッと押していただけると嬉しいです〜 🙇‍♂️）

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/N-Iwata/noblog" data-iframely-url="//cdn.iframe.ly/Q4tAo8y?card=small"></a></div></div>

## パッケージのインストール

以下コマンドで[react-share]をインストールします。<br>

```
npm install --save react-share
```

## シェアボタンのコンポーネントを作る

[src/components/share/index.jsx]を新規作成し、コンポーネントを作成していきます。<br>
今回は以下 4 つのシェアボタンを作ります。

- Facebook
- Twitter
- Line
- Linkedin

ボタンに渡す props は実装したいシェアボタンの種類によっていろいろ違うので、[GitHub の ReadMe](https://github.com/nygardk/react-share)を見てください。

```js:title=src/components/share/index.jsx
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
  LinkedinIcon,
} from "react-share";

const Share = props => {
  const articleTitle = props.title;
  const articleUrl = props.url;
  const articleDescription = props.description;
  const iconSize = 32;

  return (
    <React.Fragment>
      <h3>SHARE!!</h3>
      <div className="social-links">
        <div className="social-links__icon">
          <TwitterShareButton url={articleUrl} title={articleTitle}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
        </div>
        <div className="social-links__icon">
          <FacebookShareButton url={articleUrl} quote={articleDescription}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
        </div>
        <div className="social-links__icon">
          <LineShareButton url={articleUrl} quote={articleDescription}>
            <LineIcon round size={iconSize} />
          </LineShareButton>
        </div>
        <div className="social-links__icon">
          <LinkedinShareButton url={articleUrl} quote={articleDescription}>
            <LinkedinIcon round size={iconSize} />
          </LinkedinShareButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Share;
```

## シェアボタンのコンポーネントを記事に挿入

[src/templates/blogpost/index.jsx]を以下のように修正します。<br>

まずコンポーネントをインポート

```js:title=src/templates/blogpost/index.jsx
import Share from "../components/share";
```

サイトの URL[siteUrl]と記事の URL の後ろ[slug]を取得

```js:title=src/templates/blog-post.js
const siteUrl = data.site.siteMetadata.siteUrl;
const { slug, previous, next } = pageContext;
```

シェアボタンのコンポーネントをフッターの手前に挿入<br>
以下 props でコンポーネントに渡す

- 記事タイトル
- 記事 URL
- 記事概要

```js:title=src/templates/blog-post.js
<Share
  title={post.frontmatter.title}
  url={`${siteUrl}${slug}`}
  description={post.excerpt}
/>
<footer>
  <Bio />
</footer>
```

## スタイル調整

あとは好みのスタイルに調整します。

ついでにナビゲーションバーのスタイルも調整しました。

```scss
.social-links {
  margin-bottom: 40px;

  &__icon {
    display: inline;
    margin-right: 10px;
  }
}
```

これでシェアボタンが実装できました！！

## まとめ

今回は GatsbyJS ブログの記事ページに SNS 等のシェアボタンを追加しました。<br>
自分もこのブログだけではなく、いろいろな SNS を用いて情報を発信していきたいと思います！

他にも GatsbyJS のブログカスタマイズをいろいろやっているので、以下もあわせてご覧いただければと思います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/tags/gatsby-js/" data-iframely-url="//cdn.iframe.ly/5j7eIPT"></a></div></div>

<br>
<br>

最後まで見ていただきありがとうございます！！
