---
title: 【GatsbyJS】ブログにYouTubeを埋め込んでみた
date: "2020-05-07"
description: 今回はGatsbyJSブログの記事内にYouTubeを埋め込めるようにします。GatsbyJSの公式ページの内容通りやれば簡単にできます。
slug: 2020-05-07/gatsby-youtube
tags: [GatsbyJS, gatsby-starter-blog]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

今回は GatsbyJS ブログの記事内に YouTube を埋め込めるようにします。<br>

基本的には GatsbyJS の公式ページの内容通りやれば簡単にできます。<br>
自分の YouTube チャンネル（ないけど・・・そのうちポチりたい）の動画をブログに埋め込んだり、好きな動画やブログの参考にした動画などを埋め込んだりできるのでおススメです！

https://www.gatsbyjs.com/plugins/gatsby-remark-embed-youtube/

## 前提

このブログは GatsbyJS の gatsby-starter-blog のテンプレートから作成しています。

https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog

<br/>

ソースコードはこちら（参考になったという方は ⭐️ をポチッと押していただけると嬉しいです〜 🙇‍♂️）

https://github.com/N-Iwata/noblog

## プラグインのインストール

以下コマンドで[gatsby-remark-embed-youtube]をインストールします。<br>

```
npm install --save gatsby-remark-embed-youtube
```

## プラグインの適用

インストールしたら[gatsby-config.js]にプラグインを追加します。

```javascript{7-13,15}:title=gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
        ],
      },
    },
  ],
};
```

注意点として、[gatsby-remark-responsive-iframe]を使っている場合はその前に必ず定義する必要があります。

## 記事に埋め込む

以下のようにマークダウンファイルに記載します。<br>
[QNw6Q0VTkEQ]の部分は動画の URL の　https://www.youtube.com/watch?v=QNw6Q0VTkEQ　の一番後ろの部分の文字列の部分です。

```markdown:title=Markdown
`youtube:https://www.youtube.com/embed/QNw6Q0VTkEQ`
```

`youtube:https://www.youtube.com/embed/QNw6Q0VTkEQ`

このブログを始めるきっかけとなった**マコなり社長の動画**です。<br>
10 年前にこの動画に出会いたかった・・・

人生を変えるアクションプラン＝**「ポチる」**こと

<u>思い切って何かに挑戦して、必死に努力してやり遂げて、また何かにポチってやり遂げる、この繰り返しだけが人生を変えていく。</u>

この言葉が保守的なアラフォー子持ちサラリーマンの心にグサッと刺さりました。

なのでこのブログを必死にやり続けて、いろいろなものに挑戦して行きたいです！！

## まとめ

今回は GatsbyJS ブログの記事内に YouTube を埋め込めるようにしました。<br>
結構簡単に埋め込めるので今後多用するかもしれません。

また、YouTube チャンネルとかも挑戦して（ポチって）、人生を変えていくループを作っていきたいです。<br>
あと、マコなり社長のかなりの信者なので、おススメとかまとめとかしたいですね！！

他にも GatsbyJS のブログカスタマイズをいろいろやっているので、以下もあわせてご覧いただければと思います。

https://rpf-noblog.com/tags/gatsby-js/

<br>
<br>

最後まで見ていただきありがとうございます！！
