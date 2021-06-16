---
title: 【GatsbyJS】ブログの記事にiframelyで良い感じに外部リンクを埋め込んだ
date: "2020-07-08"
description: 今回はGatsbyJSブログの記事にiframeryで良い感じに外部リンクを埋め込めるようにしたので解説します。外部リンクが良い感じになるだけで良い感じのブログになりますね！！
slug: 2020-07-08/gatsby-iframely
tags: [GatsbyJS,gatsby-starter-blog,iframely]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きおじさんこと**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))です！！

今回はGatsbyJSブログの記事に**iframery**で良い感じに外部リンクを埋め込めるようにしたので解説します。

外部リンクが良い感じになるだけで良い感じのブログになりますね！！

* 前提
* iframelyとは
* iframelyのサイトから埋め込みコードを取得する
* iframelyコンポーネントを作成する
* iframelyコンポーネントをblog-post.jsに設置する
* 記事に埋め込みコードを貼り付ける
* 確認
* まとめ

## 前提

このブログはGatsbyJSの[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)のテンプレートから作成しています。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" data-iframely-url="//cdn.iframe.ly/qjUJkBu?iframe=card-small"></a></div></div>


## iframelyとは

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://iframely.com/" data-iframely-url="//cdn.iframe.ly/KGpjY3"></a></div></div>

埋め込みコードをまとめて生成してくれるサービスです。


前回までの記事でYouTubeやTwitterは独自の埋め込みコードがあるのでそちらの利用方法を解説しましたが、その他の多くのサイトでは埋め込み用のコードが用意されていないので、独自で設定する必要があります。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-07/gatsby-twitter/" data-iframely-url="//cdn.iframe.ly/WoteZmC?iframe=card-small"></a></div></div>


そこでIframelyを使うことで、外部リンクの埋め込みができるようになります。

## iframelyのサイトから埋め込みコードを取得する

[iframely](https://iframely.com/embed)のサイトにアクセスして、埋め込みたいサイトのURLを入力して**CHECK IT**ボタンを押してください。

![画像](img1.png)

すると埋め込み用のコードが表示されるので**COPY CODE**ボタンでコピーしてください。<br>
大きいサイズと小さいサイズを選べる場合があるので、チェックボックスで選択してください。

## iframelyコンポーネントを作成する

iframelyコンポーネントを作成します。

```js:title=src/components/iframely.js
import React, { useEffect } from "react";
import Helmet from "react-helmet";

function Iframely() {
  useEffect(() => {
    if (window.iframely) {
      window.iframely.load();
    }
  }, []);
  return (
    <Helmet>
      <script async src="https://cdn.iframe.ly/embed.js" />
    </Helmet>
  );
}
export default Iframely;

```

## iframelyコンポーネントをblog-post.jsに設置する

iframelyコンポーネントをblog-post.jsに設置します。

```js:title=src/templates/blog-post.js
const BlogPostTemplate = ({ data, pageContext, location }) => {
  ・・・・
  return (
    <div>
      <Iframely />
      ・・・・
    </div>
```

## 記事に埋め込みコードを貼り付ける

記事のマークダウンファイルの好きな位置に取得したコードを貼り付けます。

↓のように**script**タグが最後についている場合は、削除してください。

```html
<script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>
```

## 確認

取得したコードを貼り付けると、以下のように表示されれば完成です！！

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-11/24hour-split-life-start/" data-iframely-url="//cdn.iframe.ly/EjpcRto?iframe=card-small"></a></div></div>


## まとめ

今回はGatsbyJSブログの記事に**iframery**で良い感じに外部リンクを埋め込めるようにしたので解説しました。

外部リンクが良い感じになるだけで良い感じのブログになりますね！！

小さいサイズにする場合に、画像が中央によってしまうので、ヘッダーの画像とかも修正したほうが良さそうですね・・・

そのうちやろう！！


他にもGatsbyJSのブログカスタマイズをいろいろやっているので、以下もあわせてご覧いただければと思います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/tags/gatsby-js/" data-iframely-url="//cdn.iframe.ly/5j7eIPT"></a></div></div>


<br>
<br>

最後まで見ていただきありがとうございます！！  
この記事が良かったと思ったらSHAREしていただけると泣いて喜びます🤣