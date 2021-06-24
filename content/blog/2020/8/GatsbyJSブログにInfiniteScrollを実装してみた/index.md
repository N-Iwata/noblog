---
title: 【GatsbyJS】ブログにInfiniteScrollを実装してみた
date: "2020-08-06"
description: 今回はGatsbyJSブログにInfiniteScrollを実装してみたので解説します！！
slug: 2020-08-06/gatsby-infinite-scroll
tags: [GatsbyJS,gatsby-starter-blog]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きおじさんこと**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))です！！

今回はGatsbyJSブログに**InfiniteScroll**を実装してみたので解説します！！

※こちらの記事の内容は現在ブログには反映されておりません。  
現在はページネーションで実装しています。


* 前提
* InfiniteScrollとは
* パッケージのインストール
* トップページに実装
* タグページに実装
* まとめ

## 前提

このブログはGatsbyJSの[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)のテンプレートから作成しています。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" data-iframely-url="//cdn.iframe.ly/qjUJkBu?iframe=card-small"></a></div></div>


## InfiniteScrollとは

画面をスクロールしてページの一番下まで移動すると、自動的にさらにデータを読み込んでページを表示する仕組みのことです。

同じような機能としては**pagenation**という選択肢もあったのですが、メリット・デメリットを考えてInfiniteScrollを採用しました。

とりあえず読者様にクリックさせたくないのと、スマホでさくさく見てもらいという理由が大きなところです。

個人的にInfiniteScrollという言葉の響きが好きなのもあります。

<br>

このあたりのメリット・デメリットについては以下の記事を参考にしました。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://uxmilk.jp/50150" data-iframely-url="//cdn.iframe.ly/jtpf2xi?iframe=card-small"></a></div></div>

## パッケージのインストール

今回は**react-infinite-scroller**を使って実装します。

```
$npm install --save react-infinite-scroller
```

<br>
こちらのパッケージで簡単にInfiniteScrollを実装できます。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/danbovey/react-infinite-scroller" data-iframely-url="//cdn.iframe.ly/BRF49Ld"></a></div></div>


## トップページに実装

トップページに実装するので、**src/pages/index.js**を修正します。

### パッケージのインポート

```js:title=src/pages/index.js
import InfiniteScroll from "react-infinite-scroller";
```

### 変数・ステートを宣言

まず変数・ステートを宣言します。

* itemsPerPage→1回で読み込みたい記事数
* hasMoreItems→ロードする記事がまだあるかどうか
* records→現在読み込んでいる記事数

```js:title=src/pages/index.js
const itemsPerPage = 6;
const [hasMoreItems, sethasMoreItems] = useState(true);
const [records, setrecords] = useState(itemsPerPage);
```

### コンポーネントの設置

設置したい箇所にInfiniteScrollコンポーネントを実装します。

渡すパラメーターは以下の通りです。

* loadMore→ユーザーがさらにアイテムを要求したときのコールバック
* hasMore→ロードするアイテムがまだあるかどうか
* loader→アイテムがロードされている間にレンダリングするコンポーネント
* useWindow→windowにスクロールを追加するかどうか

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

**posts.length**が記事数なので、それ以上になったらスクロール終了、それ以下なら1回分の記事数を加算する処理を行います。

setTimeoutを使用してちょっとだけローディング時間を設けています。

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

**hasMore**には**hasMoreItems**をそのまま渡せばOKです。

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

今回**useWindow**は画面全体にInfiniteScrollを実装したいので、**true**にしています。

### showItems

最後にInfiniteScrollで表示したコンテンツの中身を実装します。

**posts**に記事の中身が配列で入っているので、それを表示したい記事分だけ**items**に格納して表示しているというイメージです。

```js:title=src/pages/index.js
  const showItems = posts => {
    let items = [];
    for (let i = 0; i < records; i++) {
      if (posts[i] !== undefined) {
        let node = posts[i].node;
        const title = node.frontmatter.title || node.fields.slug;
        items.push(
          // ・・・省略・・・
        );
      }
    }

    return items;
  };
```

## タグページに実装

タグページにも基本的にトップページと同じ実装をします。

## まとめ

今回はGatsbyJSブログに**InfiniteScroll**を実装してみたので解説しました！！

InfiniteScrollがあるだけで結構良い感じになるので是非参考にしていただければと思います！！

pagenationよりおしゃれな感じがするのでいいですよね！

他にもGatsbyJSのブログカスタマイズをいろいろやっているので、以下もあわせてご覧いただければと思います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/tags/gatsby-js/" data-iframely-url="//cdn.iframe.ly/5j7eIPT"></a></div></div>


<br>
<br>

最後まで見ていただきありがとうございます！！  
この記事が良かったと思ったらSHAREしていただけると泣いて喜びます🤣


