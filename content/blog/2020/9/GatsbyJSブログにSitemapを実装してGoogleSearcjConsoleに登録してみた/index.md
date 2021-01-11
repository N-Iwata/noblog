---
title: GatsbyJSブログにSitemapを実装してGoogle Search Consoleに登録してみた
date: "2020-09-22"
description: 今回はGatsbyJSブログにSitemapを実装してGoogle Search Consoleに登録してみたので解説します！！
slug: 2020-09-22/gatsby-sitemap-seach-console
tags: [GatsbyJS,gatsby-starter-blog,gatsby-plugin-sitemap,GoogleSearchConsole]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きおじさんこと**のふのふ**(@rpf_nob)です！！

せっかく独自ドメインを使用してブログをやっているからにはGoogle様に自身のサイトを認知してもらいたいですよね！！ 

ということで今回はGatsbyJSブログにSitemapを実装してGoogle Search Consoleに登録してみたので解説します！！

* 前提
* Google Search Consoleとは？
* Google Analyticsとの違いは？
* パッケージのインストール
* gatsby-config.jsの設定
* ビルド
* Google Search Consoleに登録
* まとめ

## 前提

このブログはGatsbyJSの[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)のテンプレートから作成しています。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" data-iframely-url="//cdn.iframe.ly/qjUJkBu?iframe=card-small"></a></div></div>


## Google Search Consoleとは？

[公式ページ](https://support.google.com/webmasters/answer/9128668?hl=ja)には以下のように記載されています。

>Google Search Console は、Google 検索結果でのサイトの掲載順位を監視、管理、改善するのに役立つ Google の無料サービスです。Search Console に登録しなくても Google 検索結果にサイトが表示されるようにすることはできますが、Search Console に登録することで、Google のサイトに対する認識を理解し、改善できるようになります。

## Google Analyticsとの違いは？

自身のサイトを分析して改善するためのツールということは同じですが、違いがあります。

簡単に違いを説明するとGoogle Analyticsは自身のサイトにユーザーが入った後の分析に、Google Search Consoleは自身のサイトにユーザーが入る前の分析のために使うツールです。

Google Analyticsは、どのページを閲覧してどの経路でお問合せなどのゴールまでに辿りついたのかや、どのページがよく閲覧されていてどのページでユーザーが離脱しているのかなどを分析・検証できます。

Google Search Consoleは、検索結果から自分のサイトがどれくらい来ているか、検索結果ごとにどのくらいの順位なのか。自身のサイトが検索エンジンにどう見えているか、検索順位を下げる可能性がある問題が発生していないかなど分析・検証できます。

## パッケージのインストール

今回は**gatsby-plugin-sitemap**を使って実装します。
基本的には[公式ページ](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/)の内容通りやれば簡単にできます。

```
$npm install --save gatsby-plugin-sitemap
```

<br>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.com/" data-iframely-url="//cdn.iframe.ly/qokMCuD?iframe=card-small"></a></div></div>


## gatsby-config.jsの設定

**gatsby-config.js**にインストールしたプラグインを設定します。

siteUrlは元々あったのでそのままですが、プラグインは適当な場所に追加します。

```js:title=gatsby-config.js
module.exports = {
  siteMetadata: {
    url,
    siteUrl: `https://rpf-noblog.com/`,
  },
  plugins:[
      `gatsby-plugin-sitemap`
  ],
},
```

## ビルド

このプラグインは、**productionモード**で実行したときにのみ出力を生成するので、サイトマップを確認したい場合は次のコマンドを実行します。

```
$gatsby build && gatsby serve
```

するとproductionモードで起動するので、**localhost:8000/sitemap.xml**にアクセスして以下のように表示されればOKです。

![img](img01.png)

確認できたところで、自分の場合はGitHubにpushすれば自動でNetlifyにデプロイされるので、pushして完了です。


## Google Search Consoleに登録

次のGoogle Search Consoleに登録します。
[公式ページ](https://search.google.com/search-console/)にアクセスすると次のような画面になります。

![img](img02.png)

ドメインの方の入力欄に**rpf-noblog.com**を入力（自分のサイトのURLのドメイン部分）して続行します。

続いてドメインの所有権の確認があるのですが、自分の場合は何もしなくてもすぐに確認されました。Googleドメインを使っているからかはわかりませんが、確認されない場合は手順に沿って確認してください。

これでGoogle Search Consoleの登録は完了です。

最後にサイトマップを送信します。

以下のように新しいサイトマップの追加から自身のサイトのサイトマップのURLを入力して送信ボタンを押せば完了です。
自分の場合は**https://rpf-noblog.com/sitemap.xml**で送信しました。

![img](img03.png)

次のように表示されていれば正常に処理されたということで設定は完了です。

![img](img04.png)

## まとめ

今回はGatsbyJSブログにSitemapを実装してGoogle Search Consoleに登録してみたので解説しました！！

せっかく独自ドメインを使用してブログをやっているからにはGoogle様に自身のサイトを認知してもらいたいですよね！！
これでこのブログに来てくれる人が増えてくれればいいのですが・・・。

他にもGatsbyJSのブログカスタマイズをいろいろやっているので、以下もあわせてご覧いただければと思います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/tags/gatsby-js/" data-iframely-url="//cdn.iframe.ly/5j7eIPT"></a></div></div>


<br>
<br>

最後まで見ていただきありがとうございます！！


