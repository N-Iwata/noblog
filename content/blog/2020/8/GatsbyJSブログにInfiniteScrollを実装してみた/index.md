---
title: 【GatsbyJS】ブログにInfiniteScrollを実装してみた
date: "2020-08-06"
description: 今回はGatsbyJSブログにInfiniteScrollを実装してみたので解説します！！
slug: 2020-08-06/gatsby-infinite-scroll
tags: [GatsbyJS, gatsby-starter-blog]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

今回は GatsbyJS ブログに**InfiniteScroll**を実装してみたので解説します！！

※こちらの記事の内容は現在ブログには反映されておりません。
現在はページネーションで実装しています。

- 前提
- InfiniteScroll とは
- パッケージのインストール
- トップページに実装
- タグページに実装
- まとめ

## 前提

このブログは GatsbyJS の gatsby-starter-blog のテンプレートから作成しています。

https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog

<br/>

ソースコードはこちら（参考になったという方は ⭐️ をポチッと押していただけると嬉しいです〜 🙇‍♂️）

https://github.com/N-Iwata/noblog

## InfiniteScroll とは

画面をスクロールしてページの一番下まで移動すると、自動的にさらにデータを読み込んでページを表示する仕組みのことです。

同じような機能としては**pagenation**という選択肢もあったのですが、メリット・デメリットを考えて InfiniteScroll を採用しました。

とりあえず読者様にクリックさせたくないのと、スマホでさくさく見てもらいという理由が大きなところです。

個人的に InfiniteScroll という言葉の響きが好きなのもあります。

<br>

このあたりのメリット・デメリットについては以下の記事を参考にしました。

https://uxmilk.jp/50150

## パッケージのインストール

今回は**react-infinite-scroller**を使って実装します。

```
$npm install --save react-infinite-scroller
```

<br>
こちらのパッケージで簡単にInfiniteScrollを実装できます。

https://github.com/danbovey/react-infinite-scroller

## トップページに実装

トップページに実装するので、**src/pages/index.js**を修正します。

### パッケージのインポート

```js:title=src/pages/index.js
import InfiniteScroll from "react-infinite-scroller";
```

### 変数・ステートを宣言

まず変数・ステートを宣言します。

- itemsPerPage→1 回で読み込みたい記事数
- hasMoreItems→ ロードする記事がまだあるかどうか
- records→ 現在読み込んでいる記事数

```js:title=src/pages/index.js
const itemsPerPage = 6;
const [hasMoreItems, sethasMoreItems] = useState(true);
const [records, setrecords] = useState(itemsPerPage);
```

### コンポーネントの設置

設置したい箇所に InfiniteScroll コンポーネントを実装します。

渡すパラメーターは以下の通りです。

- loadMore→ ユーザーがさらにアイテムを要求したときのコールバック
- hasMore→ ロードするアイテムがまだあるかどうか
- loader→ アイテムがロードされている間にレンダリングするコンポーネント
- useWindow→window にスクロールを追加するかどうか

```js:title=src/pages/index.js
<InfiniteScroll
  loadMore={loadMore}
  hasMore={hasMoreItems}
  loader={
    <div className="loader" key={0}>
      Loading ...
    </div>
  }
  useWindow={true}
>
  {showItems(posts)}
</InfiniteScroll>
```

### loadMore

**loadMore**はユーザーがページの一番下に到達したときに実行される関数です。

この関数でスクロールを終了又は追加の処理をおこなっています。

**posts.length**が記事数なので、それ以上になったらスクロール終了、それ以下なら 1 回分の記事数を加算する処理を行います。

setTimeout を使用してちょっとだけローディング時間を設けています。

```js:title=src/pages/index.js
const loadMore = () => {
  if (records >= posts.length) {
    sethasMoreItems(false);
  } else {
    setTimeout(() => {
      setrecords(records + itemsPerPage);
    }, 1000);
  }
};
```

### hasMore

**hasMore**には**hasMoreItems**をそのまま渡せば OK です。

これでロードするアイテムがあればさらに読み込みが行われます。

### loader

**loader**は**Loading...**を表示するようにしています。

**key={0}**は親コンポーネントに一意のキー情報を渡す必要があるので、記載しています。

```js:title=src/pages/index.js
  loader={
    <div className="loader" key={0}>
      Loading ...
    </div>
  }
```

### useWindow

今回**useWindow**は画面全体に InfiniteScroll を実装したいので、**true**にしています。

### showItems

最後に InfiniteScroll で表示したコンテンツの中身を実装します。

**posts**に記事の中身が配列で入っているので、それを表示したい記事分だけ**items**に格納して表示しているというイメージです。

```js:title=src/pages/index.js
const showItems = posts => {
  let items = [];
  for (let i = 0; i < records; i++) {
    if (posts[i] !== undefined) {
      let node = posts[i].node;
      const title = node.frontmatter.title || node.fields.slug;
      items
        .push
        // ・・・省略・・・
        ();
    }
  }

  return items;
};
```

## タグページに実装

タグページにも基本的にトップページと同じ実装をします。

## まとめ

今回は GatsbyJS ブログに**InfiniteScroll**を実装してみたので解説しました！！

InfiniteScroll があるだけで結構良い感じになるので是非参考にしていただければと思います！！

pagenation よりおしゃれな感じがするのでいいですよね！

他にも GatsbyJS のブログカスタマイズをいろいろやっているので、以下もあわせてご覧いただければと思います。

https://rpf-noblog.com/tags/gatsby-js/

<br>
<br>

最後まで見ていただきありがとうございます！！
この記事が良かったと思ったら SHARE していただけると泣いて喜びます 🤣
