---
title: 【React】おしゃれなクレジット情報入力フォームを作る
date: "2021-06-08"
description: 今回はReactアプリケーションにおしゃれなクレジット情報入力フォームを作ることができるReactCreditCardsという便利なライブラリを紹介します！！
slug: 2021-06-08/react-credit-cards
tags: [React,Reactパッケージ]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きおじさんこと**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))です！！

今回はReactアプリケーションにおしゃれなクレジット情報入力フォームを作ることができるReactCreditCardsという便利なライブラリを紹介します！！

* 概要
* react-credit-cardsのインストール
* react-credit-cardsの使用方法
* ソースとデモ
* まとめ

## 概要

React用のおしゃれにクレジットカードを表示するコンポーネントです。

以下公式のREADME.mdに使用方法が説明されていますので詳細はこちらを見てください。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/amarofashion/react-credit-cards" data-iframely-url="//cdn.iframe.ly/6ntxqEq?card=small"></a></div></div>

## react-credit-cardsのインストール

お好きなほうでインストールしてください。

```
npm install --save react-credit-cards
or
yarn add react-credit-cards
```

## react-credit-cardsの使用方法

### 入力フォームを作る

まず普通にカード番号、名前、有効期限、セキュリティコードを入力するためのフォームを作成します。
**useState**で入力の状態を管理して、**onChange**で状態を更新するReactの基本的な実装です。

```js
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  return (
    <div className="App">
      <form>
        <input
          type="tel" name="number" placeholder="Card Number" value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type="text" name="name" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text" name="expiry" placeholder="MM/YY" value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <input
          type="tel" name="cvc" placeholder="CVC" value={cvc}
          onChange={(e) => setCvc(e.target.value)}
        />
      </form>
    </div>
  );
}
```

### どのフォームにフォーカスが当たっているかを管理する

**focus**という状態を作成して、それぞれの入力フォームにフォーカスが当たった時に入力フォームの名前を保存します。

```js{8,16,21,26,31}
import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div className="App">
      <form>
        <input
          type="tel" name="number" placeholder="Card Number" value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text" name="name" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text" name="expiry" placeholder="MM/YY" value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel" name="cvc" placeholder="CVC" value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>
    </div>
  );
}
```

### カードコンポーネントを設置する

**react-credit-cards**からCardsコンポーネントとCSSファイルをインポートして、Cardsコンポーネントを表示したい箇所に設置します。  
propsで各入力フォームの状態とフォーカスしている入力フォームの名前を渡してあげます。

```js{2-3,14-20}
import { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

export default function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div className="App">
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form>
        <input
          type="tel" name="number" placeholder="Card Number" value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text" name="name" placeholder="Name" value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="text" name="expiry" placeholder="MM/YY" value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
        <input
          type="tel" name="cvc" placeholder="CVC" value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
        />
      </form>
    </div>
  );
}
```

## ソースとデモ

下のCodesandboxでソースと動きを確認できて、以下のような動きが確認できるので触ってみてください。

* 入力フォームに情報を入力していくとカードにも反映されていきます
* カード番号の頭1,2文字でカード会社が識別できるので、それを元にカードの見た目も変化します
* セキュリティコードは裏面にあるのでフォーカスがセキュリティコード入力欄に当たると、カードが裏面になります

<div style="left: 0; width: 100%; height: 500px; position: relative; padding-bottom: 50%;"><iframe src="https://codesandbox.io/embed/react-credit-cards-sample-s23wn?file=/src/App.js:72-90" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen></iframe></div>

## まとめ

今回はReactアプリケーションにおしゃれなクレジット情報入力フォームを作ることができるReactCreditCardsという便利なライブラリを紹介しました！！

クレジットカード情報を入力する必要があった場合に今後使ってみたいと思います！

今後も便利なReactのライブラリなどを紹介していきたいと思います！！  
よろしければまた見てください！！！

<br>
<br>

最後まで見ていただきありがとうございます！！  
この記事が良かったと思ったらSHAREしていただけると泣いて喜びます🤣


