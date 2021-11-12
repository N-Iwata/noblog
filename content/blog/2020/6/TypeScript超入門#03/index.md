---
title: 【初心者向け】TypeScript超入門#03 関数編
date: "2020-06-25"
description: この記事はTypeScript超入門シリーズの第3回目として、TypeScriptの関数についてまとめて解説していきます！
slug: 2020-06-25/start-typescript-03
tags: [TypeScript, TypeScript超入門]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

この記事は TypeScript 超入門シリーズの第 3 回目として、TypeScript の関数についてまとめて解説していきます！

[TypeScript 超入門#01 概要説明~環境構築編](https://rpf-noblog.com/2020-06-17/start-typescript-01)<br>
[TypeScript 超入門#02 基本的な型編](https://rpf-noblog.com/2020-06-22/start-typescript-02)<br>
[TypeScript 超入門#03 関数編](https://rpf-noblog.com/2020-06-25/start-typescript-03)<br>
[TypeScript 超入門#04 クラス編](https://rpf-noblog.com/2020-06-28/start-typescript-04)<br>
[TypeScript 超入門#05 ジェネリクス編](https://rpf-noblog.com/2020-07-05/start-typescript-05)<br>
[TypeScript 超入門#06 型推論基礎編](https://rpf-noblog.com/2020-07-15/start-typescript-06)<br>
[TypeScript 超入門#07 型の互換性編](https://rpf-noblog.com/2020-07-18/start-typescript-07)<br>
[TypeScript 超入門#08 型安全編](https://rpf-noblog.com/2020-07-26/start-typescript-08)<br>

- 関数の基本的な書き方
- パラメータ関連
- オーバーロード

ソースコードは以下 GitHub を参照してください。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/N-Iwata/start-typescript" data-iframely-url="//cdn.iframe.ly/mWiO3U9"></a></div></div>

## 関数の基本的な書き方

基本的には JavaScript の関数に引数と戻り値に型を指定してあげるだけです。

### function

```ts:title=src/03_function-types/030_function-declaration-statement.ts
function sum1(a: number, b: number): number {
  return a + b;
}
console.log(sum1(1, 2));  //→3
```

### 無名関数

```ts:title=src/03_function-types/031_function-expression/.ts
const sum = function (a: number, b: number): number {
  return a + b;
};
console.log(sum(3, 4));  //→7
```

無名関数を変数に入れておく場合の変数のほうにも型を設定しておきたい場合は以下のように書きます。

```ts:title=src/03_function-types/031_function-expression/.ts
const sum2: (a: number, b: number) => number = function (
  a: number,
  b: number
): number {
  return a + b;
};
console.log(sum2(3, 4));  //→7
```

VSCode だと sum2 のところにカーソルを合わすと ↓ の画像のように推論されるので、これの型の部分を変数につけてあげれば終わりです。

![画像1](./img1.png)

### アロー関数

```ts:title=src/03_function-types/032_arrow-functio/.ts
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(5, 6));  //→11
```

アロー関数も無名関数と同じように、変数のほうにも型を設定しておくことができます。

### 値を返さない関数

前回の**void 型**の時に少し解説しましたが、値を返さない関数には**void 型**を指定します。

```ts:title=src/02_basic-types/033_void-function.ts
function logger(message: string): void {
  console.log(message); //→Hello World!
}
logger("Hello World!");
```

また、前回の**never 型**の時に少し解説しましたが、エラーを投げるだけの関数など、戻り値を得られない関数には**never 型**を指定します。

```ts:title=src/02_basic-types/033_void-function.ts
function error(message: string): never {
  throw new Error(message);
}
error("Error!");
```

## パラメータ関連

### オプショナルパラメータ

引数の後ろに[?]を付けることで、引数を指定しなくても関数が動作するようになります。

指定していない引数は**undefined**になります。

次の場合は**isLog**が**undefined**になるため、if 文ではじかれてコンソールに表示されません。

```ts:title=src/03_function-types/034_optional-paramete/.ts
const sum = (a: number, b: number, isLog?: boolean): number => {
  if (isLog) {
    console.log(a + b);
  }
  return a + b;
};
sum(7, 8, true);   //→15
sum(7, 8, false);  //→何も表示されない
sum(7, 8);       　//→何も表示されない
```

### デフォルトパラメータ

基本的には JavaScript と同じ書き方です。

引数を指定しない場合のデフォルトの値を関数宣言時に記載すれば、引数を指定しない場合のその値を使用して結果を返します。

次の場合は引数を指定してあげれば、その値で計算を実行し、指定しなければ、デフォルトの[1.1]で計算を実行しています。

```ts:title=src/03_function-types/035_default-parameter.ts
const sum = (a: number, b: number, rate: number = 1.1): number => {
  return (a + b) * rate;
};
console.log(sum(500, 500, 1.05));  //→1050
console.log(sum(500, 500));  //→1100
```

### Rest パラメータ

[Rest]パラメータを引数にする場合は、配列で型付けしてあげます。

次の場合は引数を 1~10 まで Rest パラメータで受け取って、合計値を[reduce]を使用して求めています。

```ts:title=src/03_function-types/036_rest-parameter.ts
const sum = (...values: number[]): number => {
  console.log(values);  //→[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const ret: number = values.reduce((acc: number, cur: number): number => {
    return acc + cur;
  });
  return ret;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));　//→55
```

## オーバーロード

c++や Java など他の静的型付け言語にもある関数のオーバーロードの機能は TypeScript にもあります。

先に関数の型だけを宣言してあげて、実態のところは全てを満たす型を指定してあげます。

次の例は以下のような関数になります。

- number 型の引数を 1 つとる場合は、2 倍して数値を返す
- number 型の引数を 2 つとる場合は、乗算して数値を返す
- string 型の引数を 1 つとる場合は、2 つを連結して文字列を返す

```ts:title=src/03_function-types/037_overload.ts
function sum(a: number): number;
function sum(a: number, b: number): number;
function sum(a: string): string;
function sum(a: number | string, b?: number): number | string {
  if (typeof a === "number") {
    if (b) {
      return a * b;
    } else {
      return a * 2;
    }
  } else {
    return `${a} ${a}`;
  }
}
console.log(sum(100));
console.log(sum(100, 3));
console.log(sum("Hey"));
console.log(sum("Hey",3)); // 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。
console.log(sum(false));  // この呼び出しに一致するオーバーロードはありません。
```

ちなみにオーバーロードは上記のように関数宣言文で書くのが正式な書き方らしいです。

以下のようにアロー関数で書いた場合は以下のようにエラーになります。

- 型 '(a: number | string, b?: number | undefined) => number | string' を型 'Type' に割り当てることはできません。
- 型 'string | number' を型 'number' に割り当てることはできません。
- 型 'string' を型 'number' に割り当てることはできません。

```ts:title=src/03_function-types/037_overload.ts
type Type = {
  (a: number): number;
  (a: number, b: number): number;
  (a: string): string;
}
const sum2: Type = (a: number | string, b?:number): number | string => {
  if (typeof a === "number") {
    if(b){
      return a * b;
    }
    else{
    return a * 2;
  }
  } else {
    return `${a} ${a}`;
  }
};

console.log(sum2(100));
console.log(sum2(100,3));
console.log(sum2("Hey"));
console.log(sum2("Hey",3));
console.log(sum(false));
```

VSCode で関数をホバーした時に関数宣言文だと**function sum(a: number): number (+2 overloads)**のようにオーバーロードと明記されますが、関数式だとオーバーロードと明記されません。

## まとめ

今回は TypeScript の関数について解説を行いました。<br>

関数についても JavaScript とそんなに変わらないので、すぐ覚えられそうですね。

次回はクラスについてまとめていきたいと思います。

最後まで見ていただきありがとうございました！！

TypeScript 超入門シリーズの他の記事もご覧いただければうれしいので是非お願いします！！

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-17/start-typescript-01/" data-iframely-url="//cdn.iframe.ly/tmxszMy?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-22/start-typescript-02/" data-iframely-url="//cdn.iframe.ly/GsezT0D?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-25/start-typescript-03/" data-iframely-url="//cdn.iframe.ly/dOMYRKX?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-28/start-typescript-04/" data-iframely-url="//cdn.iframe.ly/lpldZS4?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-05/start-typescript-05/" data-iframely-url="//cdn.iframe.ly/LXlpIFZ?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-15/start-typescript-06/" data-iframely-url="//cdn.iframe.ly/pnXu3dX?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-18/start-typescript-07/" data-iframely-url="//cdn.iframe.ly/zWpJ6LT?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-26/start-typescript-08/" data-iframely-url="//cdn.iframe.ly/hyokrE0?iframe=card-small"></a></div></div>
