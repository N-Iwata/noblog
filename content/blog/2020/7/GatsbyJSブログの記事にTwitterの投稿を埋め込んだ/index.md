---
title: 【GatsbyJS】ブログの記事にTwitterの投稿を埋め込んだ
date: "2020-07-07"
description: 今回はGatsbyJSブログの記事にTwitterの投稿を埋め込めるようにしたので解説します。Twitterでつぶやいたことをそのままブログの記事にしたり、他の人がつぶやいたことを参考にしたりすることもあると思うので便利ですよね！！
slug: 2020-07-07/gatsby-twitter
tags: [GatsbyJS, gatsby-starter-blog]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

今回は GatsbyJS ブログの記事に Twitter の投稿を埋め込めるようにしたので解説します。

Twitter でつぶやいたことをそのままブログの記事にしたり、他の人がつぶやいたことを参考にしたりすることもあると思うので便利ですよね！！

基本的には公式ページの内容通りやればできます。

https://www.gatsbyjs.com/plugins/gatsby-plugin-twitter/

<br>

- 前提
- プラグインのインストルール
- プラグインの設定
- 確認
- まとめ

## 前提

このブログは GatsbyJS の gatsby-starter-blog のテンプレートから作成しています。

https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog

<br/>

ソースコードはこちら（参考になったという方は ⭐️ をポチッと押していただけると嬉しいです〜 🙇‍♂️）

https://github.com/N-Iwata/noblog

## プラグインのインストール

以下コマンドで**gatsby-plugin-twitter**をインストールします。

```
$npm install --save gatsby-plugin-twitter
```

## プラグインの設定

**gatsby-config.js**の plugins にインストールした**gatsby-plugin-twitter**を追記します。

```js:title=gatsby-config.js
{
  plugins: [
    ・・・
    `gatsby-plugin-twitter`
    ・・・
  ]
}
```

## Twitter から埋め込み用のソースを取得

Twitter で表示するツイートを見つけ、右上隅にある**キャレット（v）**をクリックします。

![画像](img1.png)

そしてツイートを埋め込むを選択します。

![画像](img2.png)

すると、以下サイトに遷移するので、**Copy Code**を押して、ソースをコピーします。

![画像](img3.png)

## マークダウンに埋め込み用のソースを貼り付ける

記事のマークダウンファイルの好きな位置に先ほどコピーしたソースを貼り付けます。

注意点としては埋め込みコードをコピーするときは、blockquote セクションのみを貼り付け、**script セクションは削除してください。**

```html
<blockquote class="twitter-tweet">
  <p lang="ja" dir="ltr">
    24時間分割意識生活を開始した話をブログに上げましたので、よかったら見てください🙏<br /><br />
    YouTubeの動画を見るだけでもおススメです😀<br /><br />
    【決意表明】24時間分割意識生活を開始した<br />
    <a href="https://t.co/76MI5olUFa">https://t.co/76MI5olUFa</a>
  </p>
  &mdash; 麻雀と芝生大好きおじさん (@rpf_nob)
  <a href="https://twitter.com/rpf_nob/status/1270856164289343488?ref_src=twsrc%5Etfw"
    >June 10, 2020</a
  >
</blockquote>
```

```html
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
```

## 確認

こんな感じで表示されれば成功です！！

簡単ですね！！

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">24時間分割意識生活を開始した話をブログに上げましたので、よかったら見てください🙏<br><br>YouTubeの動画を見るだけでもおススメです😀<br><br>【決意表明】24時間分割意識生活を開始した<br> <a href="https://t.co/76MI5olUFa">https://t.co/76MI5olUFa</a></p>&mdash; 麻雀と芝生大好きおじさん (@rpf_nob) <a href="https://twitter.com/rpf_nob/status/1270856164289343488?ref_src=twsrc%5Etfw">June 10, 2020</a></blockquote>

## まとめ

今回は GatsbyJS ブログの記事に Twitter の投稿を埋め込めるようしました！！

Twitter でつぶやいたことをそのままブログの記事にしたり、他の人がつぶやいたことを参考にしたりすることもあると思うので便利ですよね！！

他にも GatsbyJS のブログカスタマイズをいろいろやっているので、以下もあわせてご覧いただければと思います。

https://rpf-noblog.com/tags/gatsby-js/

<br>
<br>

最後まで見ていただきありがとうございます！！
この記事が良かったと思ったら SHARE していただけると泣いて喜びます 🤣
