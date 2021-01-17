---
title: 【初心者向け】TypeScript超入門#02 基本的な型編
date: "2020-06-22"
description: この記事はTypeScript超入門シリーズの第2回目として、TypeScriptの基本的な型についてまとめて解説していきます！
slug: 2020-06-22/start-typescript-02
tags: [TypeScript,TypeScript入門]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きおじさんこと**のふのふ**(@rpf_nob)です！！

この記事はTypeScript超入門シリーズの第2回目として、TypeScriptの基本的な型についてまとめて解説していきます！

[TypeScript 超入門#01 概要説明~環境構築編](https://rpf-noblog.com/2020-06-17/start-typescript-01)<br>
[TypeScript 超入門#02 基本的な型編](https://rpf-noblog.com/2020-06-22/start-typescript-02)<br>
[TypeScript 超入門#03 関数編](https://rpf-noblog.com/2020-06-25/start-typescript-03)<br>
[TypeScript 超入門#04 クラス編](https://rpf-noblog.com/2020-06-28/start-typescript-04)<br>
[TypeScript 超入門#05 ジェネリクス編](https://rpf-noblog.com/2020-07-05/start-typescript-05)<br>
[TypeScript 超入門#06 型推論基礎編](https://rpf-noblog.com/2020-07-15/start-typescript-06)<br>
[TypeScript 超入門#07 型の互換性編](https://rpf-noblog.com/2020-07-18/start-typescript-07)<br>
[TypeScript 超入門#08 型安全編](https://rpf-noblog.com/2020-07-26/start-typescript-08)<br>

GitHubのリポジトリは[こちら](https://github.com/N-Iwata/start-typescript)にあります。

## boolean型

**boolean型**は真偽値を格納するデータ型であり、取りうる値は**false**と**true**の二つです。

基本的にはJavaScriptでの変数宣言に**[: boolean]**と追記するだけで宣言できます。

```ts:title=src/02_basic-types.ts
let isOpen: boolean = false;
console.log(isOpen); //→false

isOpen = true;
console.log(isOpen); //→true
```

**false**と**true**の2つ以外のデータを代入するとエラーになります。

```ts:title=src/02_basic-types.ts
isOpen = 1;
// 型 '1' を型 'boolean' に割り当てることはできません。

isOpen = "Hello world";
// 型 '"Hello world"' を型 'boolean' に割り当てることはできません。
```

このように変数（関数も）に型という制約を課すことによって、誤ったデータの代入を防ぐこと（型安全）がTypeScriptの最大のメリットとなります。

## number型

**number型**は浮動小数点値を格納するデータ型です。<br>
以下4つがサポートされています。

* 2進数
* 8進数
* 10進数
* 16進数

```ts:title=src/02_basic-types.ts
let counter: number = 0;
console.log(counter); //→0

counter++;
console.log(counter); //→1

counter = 1.5;
console.log(counter); //→1.5

counter = 15;
console.log(counter); //→15

counter = 0x0f; //16進数
console.log(counter); //→15

counter = 0b1111; //2進数
console.log(counter); //→15

counter = 0o17; //8進数
console.log(counter); //→15
```

## string型

**string型**は文字列を格納するデータ型です。<br>
JavaScriptと同じように二重引用符(")、一重引用符(')又はバッククォート(`)で囲みます。

```ts:title=src/02_basic-types.ts
let name: string = "Tom";
console.log(name); //→Tom

name = "Mike";
console.log(name); //→Tom

let message = `Hello My Name is ${name}`;
console.log(message); //→Hello My Name is Mike
```

## array型

**array型**は配列を格納するデータ型です。<br>

```ts:title=src/02_basic-types.ts
let counters: number[] = [0, 1, 2, 3, 4];
console.log(counters); //→[0, 1, 2, 3, 4]
console.log(counters[0]); //→0
```

次のような書き方もできますが、非推奨とされています。

```ts:title=src/02_basic-types.ts
let counters2: Array<number> = [0, 1, 2, 3, 4]; // 非推奨
console.log(counters2); //→[0, 1, 2, 3, 4]
```

二次元配列の場合は次のように書きます。

```ts:title=src/02_basic-types.ts
let counters3: number[][] = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
];
console.log(counters3); //→[ [ 0, 1, 2, 3, 4 ], [ 5, 6, 7, 8, 9 ] ]
```

型を複数指定したい場合は次のように書きます。<br>
こちらは後に解説する共用型（Union型）を使用しています。

```ts:title=src/02_basic-types.ts
let array: (number | boolean | string)[] = [0, false, "Tom"];
console.log(array); //→[ 0, false, 'Tom' ]
```

## tuple型

**tuple型**は固定数の要素の型がわかっている配列を表現するデータ型です。<br>

```ts:title=src/02_basic-types.ts
let profile: [string, number] = ["Tom", 20];
console.log(profile); //→[ 'Tom', 20 ]
```

次のようにデータを代入するとエラーになります。

```ts:title=src/02_basic-types.ts
profile = [2, "Tom"];
// 型 'number' を型 'string' に割り当てることはできません。
// 型 'string' を型 'number' に割り当てることはできません。
```

## any型

**any型**は型の不明な変数を扱うことができるデータ型です。

* JavaScriptのコードをTypeScriptに置き換える時
* APIからデータを取得する時

などにおいてコンパイルを通過させる時には有効ですが、TypeScriptのメリットを享受できません。ですので、最終的には**any型**の現れない、型安全なコードを書くようにしましょう。

```ts:title=src/02_basic-types.ts
let anyVariable: any = 0;
console.log(anyVariable); //→0

anyVariable = "Tom";
console.log(anyVariable); //→Tom

anyVariable = false;
console.log(anyVariable); //→false
```

## unknown型

**unknown型**は**any型**に似ていますが、型安全な**any型**を表したいときに使用します。

数値を返すgetAge]関数の戻り値を[any型]と[unknown型]で受け取った場合に、その値にさらに10を加算する処理をする場合に[unknown型]だとエラーになります。

```ts:title=src/02_basic-types.ts
const getAge = (): number => 25;
let ageAny: any = getAge();
let ageUnknown: unknown = getAge();
console.log(ageAny + 10); //→OK
console.log(ageUnknown + 10); //→NG
// オブジェクト型は 'unknown' です。
```

以下のように**タイプガード**をしてあげれば、実行することができます。

```ts:title=src/02_basic-types.ts
if( typeof ageUnknown === "number"){
  console.log(ageUnknown + 10); //→OK
}
```

## void型

**void型**は型をないことを表し、通常は値を返さない関数の戻り値の型として利用します。

```ts:title=src/02_basic-types.ts
function logger(message: string): void {
  console.log(message); //→Hello World!
}
logger("Hello World!");
```

変数に**void型**を使用した場合は、**undefined**しか代入できません。

## null/undefine型

**null型**と**undefined型**も**void型**と同じように、単体ではあまり役に立ちません。

```ts:title=src/02_basic-types.ts
let u: undefined = undefined;
let n: null = null;

console.log(u); //→undefined
console.log(n); //→null
```

デフォルト設定では[null]と[undefined]は全ての型のサブタイプであり、全ての型で代入できます。

ただし、**[--strictNullChecks]**をtrueに設定すると、[null]と[undefined]は[void型]と[null型]・[undefined型]のどちらかのみ代入できます。

## never型

**never型**は発生しえない値の型を表します。次のようにエラーを投げるだけの関数など、戻り値を得られない時に使用します。

```ts:title=src/02_basic-types.ts
function error(message: string): never {
  throw new Error(message);
}
error("Error!");
```

## object型

**object型**はJavaScriptのオブジェクトを格納するデータ型です。

次のコードで[object型]を宣言できます。

```ts:title=src/02_basic-types.ts
let profile1: object = { name: "Tom" };
profile1 = { age: 20 };
```

もう一つ次のような書き方もできます。

```ts:title=src/02_basic-types.ts
let profile2: {} = { name: "Tom" };
profile2 = { age: 20 };
```

しかし、データ型が文字列でも数値でも問題なくコンパイルできてしまうため、型安全とはいえないので、以下のようにします。

```ts:title=src/02_basic-types.ts
let profile2: { name: string } = { name: "Tom" };
profile2 = { name: "Mike" }; //→OK
profile2 = { age: 20 };  //→NG
// オブジェクト リテラルは既知のプロパティのみ指定できます。'age' は型 '{ name: string; }' に存在しません。
```

こうすれば、型の制約が強くなるため、型安全になります。

## 型エイリアスとinterface

型エイリアスとは型を別名として作ることができます。<br>
次のコードは[Age型]を[number型]として作成しています。

```ts:title=src/02_basic-types.ts
type Age = number;
let age: Age = 20;
```

複雑な型も作成できます。

```ts:title=src/02_basic-types.ts
type Profile = {
  name: string;
  age: number;
};
let profile3: Profile = {
  name: "Tom",
  age: 20,
};
```

オブジェクトに対しては次の[interface]を使う方法もあります。

```ts:title=src/02_basic-types.ts
interface Profile2 {
  name: string;
  age: number;
}
let profile4: Profile2 = {
  name: "Mike",
  age: 30,
};
```

## intersection型（交差型）

**intersection型**は複数の型を1つに結合します。書き方は[&]で型エイリアスを連結します。

```ts:title=src/02_basic-types.ts
type Profile3 = {
  name: string;
  age: number;
};
type Profile4 = {
  height: number;
  weight: number;
};

type Profile5 = Profile3 & Profile4;

const profile5: Profile5 = {
  name: "Tom",
  age: 20,
  height: 1.7,
  weight: 60,
};
console.log(profile5);
```

## union型（共用体型）

**union型**は複数の型のうち、1つの型が成立することを表します。書き方は[|]を用いて、複数の型を連結します。

```ts:title=src/02_basic-types.ts
let value1: number = 1; //→OK
value1 = "Tom"; //→NG
// 型 '"Tom"' を型 'number' に割り当てることはできません。

let value2: number | string = 1; //→OK
value2 = "Tom"; //→OK
```

## literal型

**文字列literal型**と**数値literal型**と**真偽値literal型**があり、それぞれ正確な値を指定できます。

文字列literal型
```ts:title=src/02_basic-types.ts
let myName: "Tom";
myName = "Tom"; //→OK
myName = "Mike"; //→NG
// 型 '"Mike"' を型 '"Tom"' に割り当てることはできません。
```

数値literal型
```ts:title=src/02_basic-types.ts
let zero: 0;
zero = 0;
zero = 1; //→NG
// 型 '1' を型 '0' に割り当てることはできません。
```

真偽値literal型
```ts:title=src/02_basic-types.ts
let isTruth: true;
isTruth = true; //→OK
isTruth = false;  //→NG
// 型 'false' を型 'true' に割り当てることはできません。
```

## enum型（列挙型）

**数値列挙**と**文字列列挙**の2つを使用できます。

数値列挙は次のように記載します。値を記載しない場合は、0からの連番の値がふられます。

```ts:title=src/02_basic-types.ts
enum Day1 {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Day1.Sun);  //→0
```

次のように書くと1からの連番の値がふられます。

```ts:title=src/02_basic-types.ts
enum Day2 {
  Sun = 1,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}
console.log(Day2.Sun); //→1
```

文字列列挙は数値列挙と基本は同じですが、必ず値を指定しなければなりません。

```ts:title=src/02_basic-types.ts
enum Day3 {
  Sun = "日曜日",
  Mon = "月曜日",
  Tue = "火曜日",
  Wed = "水曜日",
  Thu = "木曜日",
  Fri = "金曜日",
  Sat = "土曜日",
}
console.log(Day3.Sun);  //→日曜日
```

## まとめ

今回はTypeScriptの基本の型の解説を行いました。<br>

このあたりはあまり難しくないと思うので、理解はしやすいですね！！<br>
実際にコードを書くときに調べながらやれば、簡単に覚えるられると思います。

次回は関数についてまとめていきたいと思います。

最後まで見ていただきありがとうございました！！

TypeScript超入門シリーズの他の記事もご覧いただければうれしいので是非お願いします！！

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/tags/type-script%25E5%2585%25A5%25E9%2596%2580/" data-iframely-url="//cdn.iframe.ly/sqovy6d"></a></div></div>