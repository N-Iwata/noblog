---
title: 【GatsbyJS】ブログにAboutページとナビゲーションバーを作る
date: "2020-04-29"
description: 今回は About ページとそこに遷移するためのナビゲーションバーを作成したので、実装した部分を書いていきたいと思います。
slug: 2020-04-29/gatsby-about-navbar
tags: [GatsbyJS, gatsby-starter-blog]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きおじさんこと**のふのふ**(@rpf_nob)です！！

今回は About ページとそこに遷移するためのナビゲーションバーを作成したので、実装した部分を書いていきたいと思います。

## 前提

このブログは GatsbyJS の[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)のテンプレートから作成しています。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" data-iframely-url="//cdn.iframe.ly/qjUJkBu?iframe=card-small"></a></div></div>

<br/>

ソースコードはこちら（参考になったという方は ⭐️ をポチッと押していただけると嬉しいです〜 🙇‍♂️）

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/N-Iwata/noblog" data-iframely-url="//cdn.iframe.ly/Q4tAo8y?card=small"></a></div></div>

## 新しいページを作る方法

すげー簡単です。[src/pages]ディレクトリに追加したいページのコンポーネントを作成したファイルを追加するだけです。
これは GatsbyJS のもともとの機能なのですが、About ページとか Contact ページとかの固定ページはこちらの方法でページ作成するといいと思います。

他にもプログラムでページを作成することもできるので、こちらはタグページの追加時にまた書いていければと思います。

## src/pages/about/index.jsx を作成する

```javascript:title=src/pages/about/index.jsx
import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import image from "../images/about.png";

const Aboutpage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="About" />
        <h1>About</h1>
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
```

これだけで About ページが作成できましたので、[localhost:8000/about]に移動して確認すると問題なくできていますね！！
あとは、内容を書いていけばページは完成です。

![](img2.png)

## ナビゲーションバーを作成する

About ページができたので、こちらにジャンプできるようにリンクが必要なので、ナビゲーションバーを上部に作って、そこからジャンプできるようにしたいと思います。

### ナビゲーションバーコンポーネントを作成する

まずナビゲーションバーのコンポーネントを作成します。

今回は[Home]と[About]の二つの遷移だけ作りました。（今後コンタクトページとかタグページなどのリンクを増やしていく予定です。）

[src/components/navbar/index.jsx]を新規作成していきます。

```javascript:title=src/components/navbar.js
import React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to="/">HOME</Link>
        </li>
        <li className="navbar__li">
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
```

### 作ったナビゲーションバーコンポーネントをレイアウトコンポーネントに追加する

ナビゲーションバーはすべてのページに設置したいので、[src/components/layout/index.jsx]の[Layout]コンポーネントに ↑ で作った[NavBar]コンポーネントを設置します。

```javascript{18}:title=src/components/layout/index.jsx
import NavBar from "../components/navbar";

const Layout = ({ location, title, author, children }) => {
  // 省略
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.contents}>{children}</main>
      </div>
      <Footer author={author} />
    </div>
  );
};
```

これで全てのページで以下のようにナビゲーションバーが表示できたはずです。

![](img3.png)

## まとめ

今回は About ページとそこに遷移するためのナビゲーションバーを作成しました。<br>
このあたりはそれほど難しくなく簡単にできますね。
