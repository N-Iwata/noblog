---
title: 【初心者向け】TypeScript超入門#05 ジェネリクス編
date: "2020-07-05"
description: この記事はTypeScript超入門シリーズの第5回目として、TypeScriptのジェネリクスについてまとめて解説していきます！
slug: 2020-07-05/start-typescript-05
tags: [TypeScript,TypeScript入門,ジェネリクス]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！  
麻雀と芝生大好きおじさんこと**のふのふ**(@rpf_nob)です！！

この記事はTypeScript超入門シリーズの第5回目として、TypeScriptのジェネリクスについてまとめて解説していきます！

[TypeScript 超入門#01 概要説明~環境構築編](https://rpf-noblog.com/2020-06-17/start-typescript-01)<br>
[TypeScript 超入門#02 基本的な型編](https://rpf-noblog.com/2020-06-22/start-typescript-02)<br>
[TypeScript 超入門#03 関数編](https://rpf-noblog.com/2020-06-25/start-typescript-03)<br>
[TypeScript 超入門#04 クラス編](https://rpf-noblog.com/2020-06-28/start-typescript-04)<br>
[TypeScript 超入門#05 ジェネリクス編](https://rpf-noblog.com/2020-07-05/start-typescript-05)<br>
[TypeScript 超入門#06 型推論基礎編](https://rpf-noblog.com/2020-07-15/start-typescript-06)<br>
[TypeScript 超入門#07 型の互換性編](https://rpf-noblog.com/2020-07-18/start-typescript-07)<br>
[TypeScript 超入門#08 型安全編](https://rpf-noblog.com/2020-07-26/start-typescript-08)<br>

* ジェネリクスとは
* 関数のジェネリクス
* 関数のジェネリクス
* クラスのジェネリクス
* インターフェースのジェネリクス

ソースコードは以下GitHubを参照してください。
<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/N-Iwata/start-typescript" data-iframely-url="//cdn.iframe.ly/mWiO3U9"></a></div></div>

## ジェネリクスとは

ジェネリクスを使うと型の決定を実行時まで遅らせることができます。

わかりやすくいうと型を引数として受け渡すことで、同じような処理を極力減らして、汎用的で再利用可能な関数やクラスを作ることができる仕組みのことです。

## 関数のジェネリクス

### 基本的な書き方

まず、値を受け取りそのまま値を返す関数を作るとすると、以下のように[string型]・[number型]・[boolean型]をそれぞれ作る必要がありますよね？

```ts:title=src/05_generics-types.ts
const echoString = (prm: string): string => {
  return prm;
};
const echoNumber = (prm: number): number => {
  return prm;
};
const echoBoolean = (prm: boolean): boolean => {
  return prm;
};

console.log(echoString("Hello"));  //Hello
console.log(echoNumber(32));  //32
console.log(echoBoolean(false));  //false
```

ジェネリクスを使うとこのように同じような処理を1つの関数で汎用的な関数を作ることができます。

以下のように、`<T>`の部分で呼び出し元から型を受け取って、その関数内で使用できるようにできるのがジェネリクスの仕組みです。

```ts:title=src/05_generics-types.ts
const echo = <T>(prm: T): T => {
  return prm;
};
```

呼び出し元からは以下のように関数名とパラメータの間に`<string>`のように、使いたい型を指定してあげます。

```ts:title=src/05_generics-types.ts
console.log(echo<string>("Hello"));  //Hello
console.log(echo<number>(32));  //32
console.log(echo<boolean>(false));  //false
```

これで汎用的な関数ができましたね。

このように実行するまで型の決定を送らせるのがジェネリクスの仕組みとなります。

### 初期ジェネリクス

関数のデフォルトパラメーターのように、`<T = string>`のように書くと、実行時にジェネリクス型を指定しなくても、デフォルトの型で実行できます。

```ts:title=src/05_generics-types.ts
const echo2 = <T = string>(prm: T): T => {
  return prm;
};

console.log(echo2("Hello"));  //Hello
console.log(echo2<string>("Hello"));  //Hello
console.log(echo2<number>(32)); //32
console.log(echo2<boolean>(false)); //false
```

### extendsによる制約

**extends**を付与することで、ジェネリクスに指定できる型を制約することができます。

次の例ではジェネリクスに指定できる型を**string型**のみに制約をつけているため、**number型**や**boolean型**は指定できません。

```ts:title=src/05_generics-types.ts
const echo3 = <T extends string>(prm: T): T => {
  return prm;
};
console.log(echo3<string>("Hello"));  //Hello
console.log(echo3<number>(32)); //NG→型 'number' は制約 'string' を満たしていません。
console.log(echo3<boolean>(false)); //NG→型 'number' は制約 'string' を満たしていません。
```

複数に制約を付けたい場合は**string | number**のように共用型にします。

```ts:title=src/05_generics-types.ts
const echo4 = <T extends string | number>(prm: T): T => {
  return prm;
};
console.log(echo4<string>("Hello"));  //Hello
console.log(echo4<number>(32)); //32
console.log(echo4<boolean>(false)); //NG→型 'number' は制約 'string' を満たしていません。
```

### keyofを使ってオブジェクトのキーの共用型を作る

第二引数のジェネリクスを第一引数のジェネリクスと関連付けることもできます。
次の場合は、第一引数のオブジェクトのキーを第二引数の型として定義しています。

```ts:title=src/05_generics-types.ts
const echo5 = <T, U extends keyof T>(prm: T, key: U): T => {
  console.log(prm[key]);  //Hello
  return prm;
};
console.log(echo5({ message: "Hello", id: 32 }, "message"));  //{ message: 'Hello', id: 32 }
```

### 暗黙的に指定されるジェネリクス

関数定義にジェネリクスが含まれていても、実行時の型指定は必須ではなく、省略していてもパラメータの値から推論されて実行することができます。

以下のように、直接文字列をパラメータとして渡すと、**echo**関数はその文字列リテラル型に型推論され、オブジェクトとしてパラメータを渡すと、**string型**に型推論されていることがわかります。

```ts:title=src/05_generics-types.ts
console.log(echo("Hello")); //Hello
//const echo: <"Hello">(prm: "Hello") => "Hello"

console.log(echo({ value: "Hello" }));
// const echo: <{
//     value: string;
// }>(prm: {
//     value: string;
// }) => {
//     value: string;
// }
```

## クラスのジェネリクス

クラスの宣言にジェネリクスを使用すると、コンストラクターの引数の型を制約することができます。次の例ではインスタンス生成時に**string型**と**number型**の引数をしていできます。

```ts:title=src/05_generics-types.ts
class Echo<T extends string | number> {
  constructor(public value: T) {}
  echo(): T {
    return this.value;
  }
}

console.log(new Echo<string>("Hello").echo());  //Hello
console.log(new Echo<number>(128).echo());  //128
console.log(new Echo<boolean>(false).echo()); //NG→型 'boolean' は制約 'string | number' を満たしていません。
```

## インターフェースのジェネリクス

インターフェースにもジェネリクスが使用できます。

```ts:title=src/05_generics-types.ts
interface Echo2<T> {
  message: T;
}
const echo7: Echo2<string> = {
  message: "Hello",
};
console.log(echo7);

const echo8: Echo2<number> = {
  message: 32,
};
console.log({ message: 32 });
```

## まとめ

今回はTypeScriptのジェネリクスについて解説を行いました。<br>

はじめてジェネリクスという名前を聞くと一見難しそうですが、一個ずつ順を追って理解していけばそんなに難しくないですよね！！

次回は型推論についてまとめていきたいと思います。

最後まで見ていただきありがとうございました！！

TypeScript超入門シリーズの他の記事もご覧いただければうれしいので是非お願いします！！

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-17/start-typescript-01/" data-iframely-url="//cdn.iframe.ly/tmxszMy?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-22/start-typescript-02/" data-iframely-url="//cdn.iframe.ly/GsezT0D?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-25/start-typescript-03/" data-iframely-url="//cdn.iframe.ly/dOMYRKX?iframe=card-small"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-28/start-typescript-04/" data-iframely-url="//cdn.iframe.ly/lpldZS4?iframe=card-small"></a></div></div><script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-05/start-typescript-05/" data-iframely-url="//cdn.iframe.ly/LXlpIFZ?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-15/start-typescript-06/" data-iframely-url="//cdn.iframe.ly/pnXu3dX?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-18/start-typescript-07/" data-iframely-url="//cdn.iframe.ly/zWpJ6LT?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-26/start-typescript-08/" data-iframely-url="//cdn.iframe.ly/hyokrE0?iframe=card-small"></a></div></div>