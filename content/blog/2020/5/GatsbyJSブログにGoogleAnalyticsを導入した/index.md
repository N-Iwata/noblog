---
title: 【GatsbyJS】ブログにGoogleAnalyticsを導入した
date: "2020-05-05"
description: 今回はGatsbyJSブログにGoogleAnalyticsを導入して、訪問者数などの情報を取得してみたいと思います。せっかくブログやるなら訪問者数とか意識していきたいですよね。
slug: 2020-05-05/gatsby-google-analytics
tags: [GatsbyJS, gatsby-starter-blog]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

今回は GatsbyJS ブログに GoogleAnalytics を導入して、訪問者数などの情報を取得してみたいと思います。<br>
せっかくブログやるなら訪問者数とか意識していきたいですよね。

基本的には公式ページの内容通りやればできます。

https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-analytics/

## 前提

このブログは GatsbyJS の gatsby-starter-blog のテンプレートから作成しています。

https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog

<br/>

ソースコードはこちら（参考になったという方は ⭐️ をポチッと押していただけると嬉しいです〜 🙇‍♂️）

https://github.com/N-Iwata/noblog

## GoogleAnalytics のセットアップ

### GoogleAnalytics のサイトへアクセス

[GooglaAnalytics のサイト](https://analytics.google.com/)へアクセスすると以下のような画面になるので、[無料で設定]ボタンをクリックします。

![img1.png](img1.png)

### GoogleAnalytics のアカウント作成

Google アカウントにログインしている状態で、サイトにアクセスすると以下 5 ステップで設定していきます。

- アカウントの設定
- 測定の対象を指定する
- プロパティの設定
- 利用規約の同意
- GoogleAnalytics の情報をメールに配信するかの設定

#### アカウントの設定

以下のような画面になるので、GoogleAnalytics のアカウント名を設定します。<br>
一般的には、アカウント名は会社名をつけることが多いらしいけど、今回は個人ブログなので、ブログで使っている名前で設定しました。

![img2.png](img2.png)

#### 測定の対象を指定する

次に測定の対象を指定します。<br>
今回はブログなのでウェブを選択しました。

![img3.png](img3.png)

#### プロパティの設定

次にプロパティの設定をします。<br>
ウェブサイト名・URL・種類・タイムゾーンを設定していきます。

![img4.png](img4.png)

#### 利用規約の同意

日本の利用規約に変更して、チェックして同意します。

![img5.png](img5.png)

#### GoogleAnalytics の情報をメールに配信するかの設定

GoogleAnalytics の情報をメールに配信するかの設定ができます。<br>
こちらは後からも変更できるので、一旦全てチェックしました。

![img6.png](img6.png)

## Gatsby の設定

次にページビューを GoogleAnalytics アカウントに送信するように Gatsby 側の設定をしていきます。

### プラグインのインストール

プラグインをインストールします。<br>
[gatsby-plugin-google-analytics]が必要なのですが、自分はもともとインストールされていたのでインストール不要でした。

```
npm install --save gatsby-plugin-google-analytics
```

### プラグインの適用

インストールしたら、[gatsby-config.js]にプラグインを追加します。<br>
こちらももともとほぼ記載されていたので、トラッキング ID を変更するだけでした。

```js:title=gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-XXXXXXXXX-X",
      },
    },
  ],
};
```

### GoogleAnalytics を確認する

これで適用できているはずなので、確認してみましょう。<br>
まだ、始めたばかりなのでアクティブユーザーが 0 人・・・頑張ります！！

## まとめ

今回は GoogleAnalytics を導入しました。<br>
今後訪問者が増えていくように、いろいろ試行錯誤したいと思います！！

他にも GatsbyJS のブログカスタマイズをいろいろやっているので、以下もあわせてご覧いただければと思います。

https://rpf-noblog.com/tags/gatsby-js/

<br>
<br>

最後まで見ていただきありがとうございます！！
