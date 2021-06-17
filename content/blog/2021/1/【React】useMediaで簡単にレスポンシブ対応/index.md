---
title: 【React】useMediaで簡単にレスポンシブ対応
date: "2021-01-17"
description: 今回はReactアプリケーションで簡単にレスポンシブ対応が実装できるuse-mediaというReact Hooksの便利なライブラリを紹介します！！
slug: 2021-01-17/react-hook-usemedia
tags: [React,Reactパッケージ]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きおじさんこと**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))です！！

今回はReactアプリケーションで簡単にレスポンシブ対応が実装できる**use-media**というReact Hooksの便利なライブラリを紹介します！！

* 概要
* use-mediaのインストール
* use-mediaの使用方法
* react-responsiveとの比較
* react-responsiveのインストール
* react-responsiveで同じ仕様を書く
* ソースとデモ
* まとめ

## 概要

CSSメディアクエリの状態を追跡するReactのフックです。

以下公式のREADME.mdにフックの使用方法とテスト方法が説明されていますので詳細はこちらを見てください。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/streamich/use-media" data-iframely-url="//cdn.iframe.ly/u2VHAW7?card=small"></a></div></div>

## use-mediaのインストール

お好きなほうでインストールしてください。

```
npm install --save use-media
or
yarn add use-media
```

## use-mediaの使用方法

useMediaをインポートして、useMedia関数に閾値をオブジェクトで渡してあげれば、閾値を超えているかどうかの真偽値を取得できます。

以下の例だと、widthが1000pxを超えたら😃で、超えてなかったら😢が表示されます。

```js
import useMedia from 'use-media';

const App = () => {
  const isWide = useMedia({minWidth: '1000px'});
  return (
    <div>
      Screen is wide: {isWide ? '😃' : '😢'}
    </div>
  );
};
```

## react-responsiveとの比較

Reactアプリケーションでレスポンシブ対応させる時に、**react-responsive**というパッケージを使っている人もいると思いますので、比較のために同じ仕様のコードを書いてみたいと思います。

## react-responsiveのインストール

お好きなほうでインストールしてください。

```
npm install --save react-responsive
or
yarn add react-responsive
```

## react-responsiveで同じ仕様を書く

react-responsiveを使って同じ仕様を書くと以下のようになります。

```js
import MediaQuery from "react-responsive";

const App = () => {
  return (
    <>
      <MediaQuery query="(max-width: 999px)">
        <div>Screen is wide2: 😢</div>
      </MediaQuery>
      <MediaQuery query="(min-width: 1000px)">
        <div>Screen is wide2: 😃</div>
      </MediaQuery>
    </>
  );
};
```

好みであるかもしれませんが、use-mediaを用いた書き方のほうが短く書けますし、真偽値を用いて表示を切り替えるのでReactらしい書き方だと思います。

## ソースとデモ

以下のCodesandboxでソースとデモを確認できます。

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50%;"><iframe src="https://codesandbox.io/embed/react-use-media-3kg6l?file=/src/App.js:269-473" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" allowfullscreen></iframe></div>

## まとめ

今回はReactアプリケーションで簡単にレスポンシブ対応が実装できる**use-media**というReact Hooksの便利なライブラリを紹介しました！！

react-responsiveを使うより短くかけたりするので、今後はこちらを使用していきたいと思いますので、皆さんも是非試してみてください。

今後も便利なReactのライブラリなどを紹介していきたいと思います！！  
よろしければまた見てください！！！

<br>
<br>

最後まで見ていただきありがとうございます！！  
この記事が良かったと思ったらSHAREしていただけると泣いて喜びます🤣

