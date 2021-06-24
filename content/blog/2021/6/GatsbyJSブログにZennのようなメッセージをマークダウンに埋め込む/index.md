---
title: 【GatsbyJS】ブログにZennのようなメッセージを記事に埋め込む
date: "2021-06-23"
description: 今回はGatsbyJSブログに[gatsby-remark-custom-blocks]というパッケージを利用してZennのようなメッセージを記事に埋め込めるようにしたので実装方法を解説します！！
slug: 2021-06-23/gatsby-remark-custom-blocks
tags: [GatsbyJS,gatsby-starter-blog]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きおじさんこと**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))です！！

今回はGatsbyJSブログに[gatsby-remark-custom-blocks]というパッケージを利用してZennのようなメッセージを記事に埋め込めるようにしたので実装方法を解説します！！

* 前提
* パッケージのインストール
* gatsby-config.jsの編集
* 記事を作成するマークダウンファイルに埋め込む
* スタイリング
* まとめ

## 前提

このブログはGatsbyJSの[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)のテンプレートから作成しています。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" data-iframely-url="//cdn.iframe.ly/qjUJkBu?iframe=card-small"></a></div></div>


## パッケージのインストール

今回は**gatsby-remark-custom-blocks**を使って実装します。  
基本的には公式ページのままやれば簡単にできます。

```
$npm install --save gatsby-remark-custom-blocks
```

<br>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.com/plugins/gatsby-remark-custom-blocks/" data-iframely-url="//cdn.iframe.ly/CEXLHRq?iframe=card-small"></a></div></div>

## gatsby-config.jsの編集

インストールした**gatsby-remark-custom-blocks**をpluginsのgatsby-transformer-remarkのoptionsのpluginsに設定していきます。

今回は**infoとwarnとquestion**というブロックを作りました。classesと別にtitleというオプションもありますが、今回はタイトルはつけないのでclassesだけにしています。

```js:title=gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: "gatsby-remark-custom-blocks",
          options: {
            blocks: {
              info: {
                classes: "info",
              },
              warn: {
                classes: "warn",
              },
              question: {
                classes: "question",
              },
            },
          },
        },
      ]
    }
  }
]
```

## 記事を作成するマークダウンファイルに埋め込む

埋め込み方は以下のとおりです。マークダウンファイルに以下のように記載します。

``` 
[[info]]
| ここに情報文を書く

[[warn]]
| ここに警告文を書く

[[question]]
| ここに質問文を書く
```

すると次のようなHTMLが記事内に埋め込まれます。

```html
<div class="custom-block info">
  <div class="custom-block-body">
    <p>ここに情報文を書く</p>
  </div>
</div>

<div class="custom-block warn">
  <div class="custom-block-body">
    <p>ここに警告文を書く</p>
  </div>
</div>

<div class="custom-block question">
  <div class="custom-block-body">
    <p>ここに質問文を書く</p>
  </div>
</div>
```

ちなみにtitleオプションを設定して、以下のようにタイトルを書いてあげれば次のようなHTMLにもなります。

```
[[info] タイトル]
| ここに情報文を書く
```

```HTML
<div class="custom-block info">
  <div class="custom-block-heading">タイトル</div>
  <div class="custom-block-body">
    <p>ここに情報文を書く</p>
  </div>
</div>
```

## スタイリング

あとはスタイリングをするだけなのでCSSを書いていきます。  

```css
.info {
  border-radius: 5px;
  margin: 0 1rem;
  margin-bottom: 2rem;
}
.info > .custom-block-body {
  position: relative;
  margin: 1.5rem 0;
  padding: 5px 15px 5px 40px;
  border-radius: 6px;
  background: #fff6e4;
  color: #222;
  font-size: 0.875em;
  line-height: 1.6;
}
.info > .custom-block-body::before {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  content: "!";
  display: block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 13px;
  text-align: center;
  color: #fff;
  background: #ffb84c;
  font-weight: 700;
  border-radius: 50%;
}
```

warnとquestionは色とマークの変更だけなので割愛します。

結果以下のようにZennのメッセージのようなブロックが作成できました。

[[info]]
| ここに情報文を書く

[[warn]]
| ここに警告文を書く

[[question]]
| ここに質問文を書く


## まとめ

今回はGatsbyJSブログに[gatsby-remark-custom-blocks]というパッケージを利用してZennのようなメッセージを記事に埋め込めるようにしたので実装方法を解説しました！！

ブログによくある吹き出しみたいなブロックもこれで作成できると思うので、追加したい方は実装してみてください。

他にもGatsbyJSのブログカスタマイズをいろいろやっているので、以下もあわせてご覧いただければと思います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/tags/gatsby-js/" data-iframely-url="//cdn.iframe.ly/5j7eIPT"></a></div></div>


<br>
<br>

最後まで見ていただきありがとうございます！！  
この記事が良かったと思ったらSHAREしていただけると泣いて喜びます🤣

