---
title: GatsbyJSブログのコードブロックにタイトルと指定行のハイライトを追加した
date: "2020-05-02"
description: 今回はQiitaのように、コードブロックにタイトルを付けられるようにして、さらに指定した行をハイライトできるようにします。
slug: 2020-05-02/gatsby-code-title-highlight
tags: [GatsbyJS]
---

## はじめに 

今回はQiitaのように、コードブロックにタイトルを付けられるようにして、さらに指定した行をハイライトきるようにします。タイトル付与や指定行のハイライトができると、今後書きやすくなりそうです。

## 前提

このブログはGatsbyJSの[gatsby-starter-blog](https://gatsby-starter-blog-demo.netlify.app/)のテンプレートから作成しています。

## コードブロックにタイトルを付けられるようにする

### プラグインのインストール

今回は[gatsby-remark-prismjs-title]を使用しました。

[gatsby-remark-code-titles]と迷いましたが、行番号を追加で表示したい時に使えないらしいのでこちらは使用しないことにしました。

```
npm install --save gatsby-remark-prismjs-title
```

### プラグインの適用

インストールしたら[gatsby-config.js]にプラグインを追加します。

```javascript:title=gatsby-config.js
module.exports = {
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      `gatsby-remark-prismjs-title`,
      `gatsby-remark-prismjs`,
    ],
  },
}
```
### スタイル調整

以下のような形でブロックが作られるので、[.gatsby-code-title]に対してスタイルを適用していきます。
```html
<div class="gatsby-code-title">
  <span>src/styles/style.scss</span>
</div>
```

```scss:title=src/styles/style.scss
.gatsby-code-title {
  background: #555;
  color: #fff;
  margin: 20px 0px -24px;
  padding: 8px 12px 20px;
  font-size: 0.8em;
  line-height: 1;
  display: table;
}
```

### コードブロックを修正

言語の後ろに[:title=タイトル名]を付けるだけで完了です。

以下のようにすれば、↓のように表示できます。
```markdown:title=Markdown
```javascript:title=src/index.js
const a = 0;
console.log(a);
```　
```

```javascript:title=src/index.js
const a = 0;
console.log(a);
```
こんな感じにタイトルが付けることができました！

## コードブロックの指定行をハイライトできるようにする

### プラグインのインストール

[gatsby-remark-prismjs]をがなければインストールします。

自分は一番初めにシンタックスハイライトだけ追加したくて、こちらをインストールしていたので、インストール不要でした。

```
npm install --save gatsby-remark-prismjs
```

### プラグインの適用

インストールしたら、[gatsby-config.js]にプラグインを追加します。
自分はインストール不要だったので、何もしていません。

```javascript:title=gatsby-config.js
module.exports = {
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      `gatsby-remark-prismjs-title`,
      `gatsby-remark-prismjs`,
    ],
  },
}
```

### スタイル調整

以下のような形でブロックが作られるので、[.gatsby-highlight-code-line]に対してスタイルを適用していきます。
```html
<span class="gatsby-highlight-code-line">
  <span class="token selector">.gatsby-highlight-code-line </span>
  <span class="token punctuation">{</span>
</span>
```
```scss:title=src/styles/style.scss
.gatsby-highlight-code-line {
  background-color: #444444;
  display: block;
  margin-right: -1em;
  margin-left: -16px;
  padding-right: 1em;
  padding-left: 10px;
  border-left: 6px solid rgb(8, 216, 243);
}
```

### コードブロックを修正

言語の後ろに[:title=タイトル名]を付けるだけで完了です。

以下のようにすれば、↓のように表示できます。
```markdown:title=Markdown
```javascript{1}:title=src/index.js
const a = 0;
const b = 0;
const c = 0;
console.log(a);
console.log(b);
console.log(c);
```　
```

```javascript{1}:title=src/index.js
const a = 0;
const b = 0;
const c = 0;
console.log(a);
console.log(b);
console.log(c);
```

複数行指定したい場合は以下のように[-]や[,]でつなげて記載します。

```markdown:title=Markdown
```javascript{1-3,6}:title=src/index.js
const a = 0;
const b = 0;
const c = 0;
console.log(a);
console.log(b);
console.log(c);
```　
```

```javascript{1-3,6}:title=src/index.js
const a = 0;
const b = 0;
const c = 0;
console.log(a);
console.log(b);
console.log(c);
```

## まとめ

今回はコードブロックに関して修正しました。

タイトルと指定行のハイライトがあると説明したい時に便利になりますよね。
