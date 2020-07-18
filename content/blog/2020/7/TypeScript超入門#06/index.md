---
title: 【初心者向け】TypeScript超入門#06 型推論基礎編
date: "2020-07-15"
description: この記事はTypeScript超入門シリーズの第6回目として、TypeScriptの型推論の基礎についてまとめて解説していきます！
slug: 2020-07-15/start-typescript-06
tags: [TypeScript,TypeScript入門,型推論]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！

麻雀と芝生大好きwebエンジニアおじさん(@rpf_nob)です。

この記事はTypeScript超入門シリーズの第6回目として、TypeScriptの型推論の基礎についてまとめて解説していきます！

[【初心者向け】TypeScript超入門#01 概要説明~環境構築編](https://rpf-noblog.com/2020-06-17/start-typescript-01)<br>
[【初心者向け】TypeScript超入門#02 基本的な型編](https://rpf-noblog.com/2020-06-22/start-typescript-02)<br>
[【初心者向け】TypeScript超入門#03 関数編](https://rpf-noblog.com/2020-06-25/start-typescript-03)<br>
[【初心者向け】TypeScript超入門#04 クラス編](https://rpf-noblog.com/2020-06-28/start-typescript-04)<br>
[【初心者向け】TypeScript超入門#05 ジェネリクス編](https://rpf-noblog.com/2020-07-05/start-typescript-05)<br>
[【初心者向け】TypeScript超入門#06 型推論基礎編](https://rpf-noblog.com/2020-07-15/start-typescript-06) ←今ここ


* 型推論とは
* letの型推論
* constの型推論
* Widening Literal Types
* arrayの型推論
* tupleの型推論
* Objectの型推論
* 関数の戻り値の型推論

GitHubのリポジトリは[こちら](https://github.com/N-Iwata/start-typescript)にあります。

## 型推論とは

変数宣言時や関数宣言時に型注釈を行わなくても、初期化時の値などから型が推論されます。

型注釈を全て行うとコードが冗長になってしまうため、できるだけ型推論に任せてしまうのが一般的です。

また、型推論は論理的なルールで行われますので、どう行われるかを理解しておくことがTypeScriptを理解する上で重要になります。

※型注釈は以下のように型を指定して変数宣言などを行うことです。

```ts
let a: number = 10;
```

## letの型推論

まず**let**での変数宣言における型推論の解説をします。

以下のようにletで変数宣言すると、

```ts:title=src/06_type-inference.ts
let a = 0;
let b = "Taro";
let c = false;
let d;
```

<br>

このように型推論されます。<br>
変数を初期化していればその値の型になり、初期化していなければany型になります。

```ts
let a: number
let b: string
let c: boolean
let d: any
```

<br>

varの場合もletと同様に型推論されます。<br>
次に変数宣言時に式を代入する場合ですが、以下のように変数宣言すると、

```ts:title=src/06_type-inference.ts
let e = a + 5;
let f = a + "5";
let g = b + 5;
let h = b + "5";
let i = c + 5;  //→NG
let j = c + "5";
```

<br>

このように型推論されます。<br>

```ts
let e: number
let f: string
let g: string
let h: string
let j: string
```

fとgの場合はJavaScriptでも同様の挙動になりますが、文字列と数値の加算は文字列になります。

* e → number + number = number
* f → number + string = string
* g → string + number = string
* h → string + string = string
* i → boolean + string = NG(算術できない) 
* j → boolean + string = string

```ts
console.log(e); //→5
console.log(f); //→05
console.log(g); //→Taro5
console.log(h); //→Taro5
console.log(i); //→NG
console.log(j); //false5
```

## constの型推論

次に**const**での変数宣言における型推論の解説をします。

以下のようにconstで変数宣言すると、

```ts:title=src/06_type-inference.ts
const a = 0;
const b = "Taro";
const c = false;
const d; //→NG 当たり前ですが、初期化が必須です
```

<br>

このようにリテラル型として型推論されます。<br>
当たり前ですが、constなので初期化は必須です。

```ts
const a: 0
const b: "Taro"
const c: false
```

<br>

次に変数宣言時に式を代入する場合ですが、以下のように変数宣言すると、

```ts:title=src/06_type-inference.ts
const e = a + 5;
const f = a + "5";
const g = b + 5;
const h = b + "5";
const i = c + 5;  //NG
const j = c + "5";
```

<br>

このように型推論されます。<br>
iはboolean型とnumber型の加算なので算術できないためエラーとなります。

```ts
const e: number
const f: string
const g: string
const h: string
const j: string
```

<br>

リテラル型とプリミティブ型の加算は基本的にプリミティブ型になります。

* e → numberリテラル + number = number
* f → numberリテラル + string = string
* g → stringリテラル + number = string
* h → stringリテラル + string = string
* i → booleanリテラル + number = NG(算術できない)
* j → booleanリテラル + string = string

```ts
console.log(e); //→5
console.log(f); //→05
console.log(g); //→Taro5
console.log(h); //→Taro5
```

## Wideningリテラル型

constで宣言されたリテラル型は、通常のリテラル型とは異なる挙動をします。<br>
これを**Wideningリテラル型**といいます。

次のように変数宣言すると、

```ts:title=src/06_type-inference.ts
const a = 0;
const b: 0 = 0;
const c = 0 as 0;
```

<br>

このように全て**0型**としてリテラル型で推論されます。

```ts
const a: 0
const b: 0
const c: 0
```

<br>

しかし、この変数を用いて新たに変数を宣言すると、

```ts:title=src/06_type-inference.ts
let d = 0;
let e = a;
let f = b;
let g = c;
```

<br>

次のように型推論されます。<br>
このようにconstで適用されたリテラル型は変更可能な変数に代入すると、リテラル型ではなくなってしまいます。

```ts
let d: number
let e: number
let f: 0
let g: 0
```

stringリテラル型やbooleanリテラル型でも同様の挙動をします。<br>
厳格なリテラル型を適応したい場合は明確に型注釈を行いましょう。

## arrayの型推論

次に**array**での配列宣言における型推論の解説をします。

以下のように型注釈なしで変数宣言すると、

```ts:title=src/06_type-inference.ts
const a = [true, false];
const b = [0, 1];
const c = ["Taro", "Hanako"];
const d = [0, 1, "Taro"];
const e = [0, false, "Jiro"];
```

<br>

このように型推論されます。<br>
複数の型の値を含めた場合は共用型になります。

ちなみに**string → number → boolean** の順番になるんですね。

```ts
const a: boolean[]
const b: number[]
const c: string[]
const d: (string | number)[]
const e: (string | number | boolean)[]
```

<br>

また、配列に入れられる値を固定したい場合は、初期化時に型注釈してあげます。<br>
次の場合は、0又は1のみ代入できる配列をつくっているので、2は代入できません。

```ts:title=src/06_type-inference.ts
const f = [0 as 0, 1 as 1]; // const f: (0 | 1)[]
f.push(0); // OK
f.push(1); // OK
f.push(2); // NG
```

<br>

型注釈をした場合でも同様の結果になります。

```ts:title=src/06_type-inference.ts
const g: 0 = 0; //const g: 0
const h: 1 = 1; //const h: 1
const i = [g, h]; //const i: (0 | 1)[]

i.push(0); // OK
i.push(1); // OK
i.push(2); // NG
```

<br>

また、配列を[]だけで初期化してから**push**で要素を追加する場合に以下のような挙動になります。

* 宣言したとき→any[]
* pushでnumber型の値を追加した時→any[]
* 追加した後→number[]
* さらにpushでstring型の値を追加した時→any[]
* 追加した後→(string | number)[]

```ts:title=src/06_type-inference.ts
const j = []; //const j: any[]
for (let i = 0; i < 10; i++) {
  j.push(i);  //const j: any[]
}
console.log(j); //const j: number[]
j.push("Taro"); //const j: any[]
console.log(j); //const j: (string | number)[]
```

## tupleの型推論

次に**tuple**型推論の解説をします。

型注釈なしで宣言した場合にはタプル型は発生しない型となります。タプル型として型推論を適用するためには型注釈をしてあげる必要があります。

以下のように型注釈ありで宣言すると、

```ts:title=src/06_type-inference.ts
const a = [false, 1] as [boolean, number];
const b = ["Taro", false, 1] as [string, boolean, number];
```

<br>

次のように型推論されます。

```ts
const a: [boolean, number]
const b: [string, boolean, number]
```

<br>

またタプル型の値をインデックスで参照して変数に格納すると、その変数に対して型推論されます。<br>
次のように変数に代入してあげると、

```ts:title=src/06_type-inference.ts
const c = b[0]; //const c: string
const d = b[1]; //const d: boolean
const e = b[2]; //const e: number
const f = b[3]; //NG
```

<br>

次のように型推論されます。<br>
インデックスの範囲外の値を参照するとエラーになります。

```ts
const c: string
const d: boolean
const e: number
```

<br>

インデックスの範囲外への値の追加は問題ありませんが、追加できる型はタプル型に含まれる共用型となります。

```ts:title=src/06_type-inference.ts
a.push(true); //OK
a.push(2); //OK
a.push("Taro"); //NG
```

## Objectの型推論

次に**Object**型推論の解説をします。

Objectの変数宣言時に次のように初期化してあげると、

```ts:title=src/06_type-inference.ts
const obj1 = {
  a: 0,
  b: false,
  c: "Taro"
}
```

<br>

次のように型推論されます。<br>

```ts
const obj1: {
  a: number;
  b: boolean;
  c: string;
}
```
<br>

値を代入する時は型の互換性がない場合はエラーになります。

```ts:title=src/06_type-inference.ts
obj1.a = 10; //OK
obj1.a = true;  //NG
obj1.a = "Taro";  //NG
```

## 関数の戻り値の型推論

次に**関数の戻り値**の型推論の解説をします。

関数の宣言時に必ず戻り値の型を指定する必要はなく、内容によって型推論されます。

次の例では、number型の引数を受け取ってそのまま返しているので、戻り値の型はnumber型と推論されます。

```ts:title=src/06_type-inference.ts
function a(num: number) {
  return num;
}
```
```ts
function a(num: number): number
```
<br>

次の例では、number型の引数を受け取っていますが、文字列を返しているのでstring型と推論されます。

```ts:title=src/06_type-inference.ts
function b(age: number) {
  return `私は${age}歳です。`;
}
```
```ts
function b(age: number): string
```
<br>

次の例では、値を返していないのでvoid型と推論されます。

```ts:title=src/06_type-inference.ts
function c(message: string) {
  console.log(`Hello ${message}`);
}
```
```ts
function c(message: string): void
```
<br>

次の例では、条件分岐があり戻り値が曖昧ですが、定義内容に応じてリテラル型共用型と推論されます。

```ts:title=src/06_type-inference.ts
function d(num: number) {
  if (num > 0) {
    return "Taro";
  } else {
    return "Jiro";
  }
}
```
```ts
function d(num: number): "Taro" | "Jiro"
```
<br>

次の例では、条件分岐があり戻り値を返さない場合があるはundefined型を返す場合があるので、**"Taro" | undefined**の共用型になります。

これをエラーにしたい場合は**tsconfig.json**で**noImplicitReturns=True**にすればエラーにできます。

```ts:title=src/06_type-inference.ts
function e(num: number) {
  if (num > 0) {
    return "Taro";
  }
}
```
```ts
function e(num: number): "Taro" | undefined
```

<br>

ついでに**関数の引数**の型推論についてですが、関数の引数はちゃんと型注釈で型を指定してあげないといけないというのが基本的な考え方です。

次の例では暗黙的にany型になります。

```ts:title=src/06_type-inference.ts
function a(num) {
  if (num > 0) {
    return "Taro";
  }
}
```
```ts
function a(num: any): "Taro" | undefined
```


## まとめ

今回はTypeScriptの型推論についての基礎を解説を行いました。<br>

基本的には冗長にならないように型注釈をなるべくしないほうがいいので、型推論のルールを知っておくのが重要になりますのでしっかり勉強したいですね！！

最後まで見ていただきありがとうございました！！

過去の超入門シリーズもご覧いただければうれしいです！！

[【初心者向け】TypeScript超入門#01 概要説明~環境構築編](https://rpf-noblog.com/2020-06-17/start-typescript-01)<br>
[【初心者向け】TypeScript超入門#02 基本的な型編](https://rpf-noblog.com/2020-06-22/start-typescript-02)<br>
[【初心者向け】TypeScript超入門#03 関数編](https://rpf-noblog.com/2020-06-25/start-typescript-03)<br>
[【初心者向け】TypeScript超入門#04 クラス編](https://rpf-noblog.com/2020-06-28/start-typescript-04)<br>
[【初心者向け】TypeScript超入門#05 ジェネリクス編](https://rpf-noblog.com/2020-07-05/start-typescript-05)<br>
[【初心者向け】TypeScript超入門#06 型推論基礎編](https://rpf-noblog.com/2020-07-15/start-typescript-06) ←今ここ
