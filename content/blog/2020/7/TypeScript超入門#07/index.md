---
title: 【初心者向け】TypeScript超入門#07 型の互換性編
date: "2020-07-18"
description: この記事はTypeScript超入門シリーズの第7回目として、TypeScriptの型の互換性についてまとめて解説していきます！
slug: 2020-07-18/start-typescript-07
tags: [TypeScript, TypeScript入門, 型の互換性]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きおじさんこと**のふのふ**(@rpf_nob)です！！

この記事はTypeScript超入門シリーズの第7回目として、TypeScriptの型の互換性についてまとめて解説していきます！

[TypeScript 超入門#01 概要説明~環境構築編](https://rpf-noblog.com/2020-06-17/start-typescript-01)<br>
[TypeScript 超入門#02 基本的な型編](https://rpf-noblog.com/2020-06-22/start-typescript-02)<br>
[TypeScript 超入門#03 関数編](https://rpf-noblog.com/2020-06-25/start-typescript-03)<br>
[TypeScript 超入門#04 クラス編](https://rpf-noblog.com/2020-06-28/start-typescript-04)<br>
[TypeScript 超入門#05 ジェネリクス編](https://rpf-noblog.com/2020-07-05/start-typescript-05)<br>
[TypeScript 超入門#06 型推論基礎編](https://rpf-noblog.com/2020-07-15/start-typescript-06)<br>
[TypeScript 超入門#07 型の互換性編](https://rpf-noblog.com/2020-07-18/start-typescript-07)<br>
[TypeScript 超入門#08 型安全編](https://rpf-noblog.com/2020-07-26/start-typescript-08)<br>

- 型の互換性とは
- any型とプリミティブ型
- プリミティブ型←プリミティブ型
- プリミティブ型とプリミティブリテラル型
- enum型とnumber型
- 関数←関数
- クラス←クラス

GitHub のリポジトリは[こちら](https://github.com/N-Iwata/start-typescript)にあります。

## 型の互換性とは

ある変数に別の変数が代入可能な場合、代入される変数の型と代入する変数の型に互換性があるということになります。型の互換性がない場合はコンパイルエラーとなります。

型の互換性は基本的には**構造的部分型**と呼ばれる概念に基づいています。簡単に言うと大は小を兼ねるのような意味合いです。

基本的なものから解説していきます。

## any型とプリミティブ型

### any型←プリミティブ型

まずany型の変数にプリミティブ型の変数を代入する場合ですが、以下の通り全て問題ないです。any型が絡んだ場合はJavaScriptの概念に戻るようなイメージです。

それぞれの型の変数を代入した後に**typeof**で型を確認すると、any型からそれぞれの型に変化していきます。

```ts:title=src/07_type-compatibility.ts
let targetAny: any;
let sourceString: string = "Taro";
let sourceNumber: number = 0;
let sourceBoolean: boolean = false
targetAny = sourceString; //OK
console.log(typeof targetAny); //string
targetAny = sourceNumber; //OK
console.log(typeof targetAny); //number
targetAny = sourceBoolean; //OK
console.log(typeof targetAny); //boolean
```

### プリミティブ型←any型

次のプリミティブ型の変数にany型の変数を代入する場合も同じように、any型が絡むので、全て問題ありません。

最初にany型に文字列を入れて、それぞれの型の変数を代入した後に**typeof**で型を確認すると、any型からstring型に変化していきます。

```ts:title=src/07_type-compatibility.ts
let targetString: string;
let targetNumber: number;
let targetBoolean: boolean;
let sourceAny: any = "Taro";

targetString = sourceAny; //OK
console.log(typeof targetString); //string
targetNumber = sourceAny; //OK
console.log(typeof targetNumber); //string
targetBoolean = sourceAny; //OK
console.log(typeof targetBoolean); //string
```

## プリミティブ型←プリミティブ型

次にプリミティブ型の変数にプリミティブ型の変数を代入する場合ですが、こちらは当たり前ですが、同じ型であれば代入できます。

```ts:title=src/07_type-compatibility.ts
let targetString: string;
let targetNumber: number;
let targetBoolean: boolean;
let sourceString: string = "Taro";
let sourceNumber: number = 0;
let sourceBoolean: boolean = false;

targetString = sourceString; //OK
targetNumber = sourceNumber; //OK
targetBoolean = sourceBoolean; //OK
targetString = sourceNumber; //NG
```
## プリミティブ型とプリミティブリテラル型
### プリミティブ型←プリミティブリテラル型

次にプリミティブ型の変数にプリミティブリテラル型の変数を代入する場合ですが、リテラル型はそれぞれのプリミティブ型の派生型であるため互換性があります。

```ts:title=src/07_type-compatibility.ts
let targetString: string;
let targetNumber: number;
let targetBoolean: boolean;
let sourceStringLiteral: "Taro" = "Taro";
let sourceNumberLiteral: 0 = 0;
let sourceBooleanLiteral: false = false;

targetString = sourceStringLiteral; //OK
targetNumber = sourceNumberLiteral; //OK
targetBoolean = sourceBooleanLiteral; //OK
```

### プリミティブリテラル型←プリミティブ型

次にプリミティブリテラル型の変数にプリミティブ型の変数を代入する場合ですが、こちらは完全にNGとなります。詳細な型（リテラル型）に抽象的な型（プリミティブ型）を代入するのは構造的部分型の概念からもNGです。

```ts:title=src/07_type-compatibility.ts
let targetStringLiteral: "Jiro" = "Jiro";
let targetNumberLiteral: 1 = 1;
let targetBooleanLiteral: true = true;
let sourceString: string = "Taro";
let sourceNumber: number = 0;
let sourceBoolean: boolean = false;

targetStringLiteral = sourceString; //NG
targetNumberLiteral = sourceNumber; //NG
targetBooleanLiteral = sourceBoolean; //NG
```

## enum型とnumber型

### enum型←number型

次にenum型の変数にnumber型の変数を代入する場合ですが、こちらは互換性があるため代入可能です。

```ts:title=src/07_type-compatibility.ts
enum Color {
  RED,
  BLUE,
  GREEN,
}

let tagetEnum = Color.RED;
let sourceNumber: number = 0;
tagetEnum = sourceNumber; //OK
```

以下のように代入する値が、enum型で定義している範囲を超えていても問題ありません。

```ts:title=src/07_type-compatibility.ts
sourceNumber = 100;
tagetEnum = sourceNumber; //OK
```

### number型←enum型

次にnumber型の変数にenum型の変数を代入する場合ですが、こちらも互換性があるため代入可能です。

```ts:title=src/07_type-compatibility.ts
enum Color {
  RED,
  BLUE,
  GREEN,
}
let tagetNumber: number = 100;
let sourceEnum = Color.RED;
tagetNumber = sourceEnum; //OK
```

### enum型←enum型

次にenum型の変数にenum型の変数を代入する場合ですが、こちらは互換性がないため代入不可能でNGとなります。

```ts:title=src/07_type-compatibility.ts
enum Color {
  RED,
  BLUE,
  GREEN,
}
enum Size {
  SMALL,
  MEDIUM,
  LARGE,
}
let targetEnum = Color.RED;
let sourceEnum = Size.MEDIUM;

targetEnum = sourceEnum;  //NG
```

## 関数←関数

### 引数が一つの場合

引数が一つの場合は、基本的には同じ引数の型を持っていれば代入可能です。

```ts:title=src/07_type-compatibility.ts
let targetFunction0 = function (a: string) {};
let sourceFunction0 = function (a: number) {};
targetFunction0 = sourceFunction0; //NG

let targetFunction1 = function (a: string) {};
let sourceFunction1 = function (a: string) {};
targetFunction1 = sourceFunction1; //OK
```

### 引数が複数の場合

引数が複数の場合は一つの場合と少し変わります。

以下の例では**targetFunction2**は**sourceFunction2**の引数を部分的に満たしているため代入が可能ですが、**targetFunction3**は**sourceFunction3**の引数を満たしていないため代入が不可能なためNGとなります。

```ts:title=src/07_type-compatibility.ts
let targetFunction2 = function (a: string, b: string) {};
let sourceFunction2 = function (a: string) {};
targetFunction2 = sourceFunction2; //OK

let targetFunction3 = function (a: string) {};
let sourceFunction3 = function (a: string, b: string) {};
targetFunction3 = sourceFunction3;  //NG
```

## クラス←クラス

クラス同士の互換性のチェックはインスタンスメンバのみ（変数やメソッド）が比較対象となります。静的メンバやコンストラクターは比較対象となりません。

### インスタンスメンバが同じ場合

インスタンスのメンバが同じ場合は互換性があるため代入が可能となります。

```ts:title=src/07_type-compatibility.ts
class Person1 {
  name: string = "Taro";
}
class Animal1 {
  name: string = "Poti";
}
let targetClass1 = new Person1();
let sourceClass1 = new Animal1();
targetClass1 = sourceClass1; //OK
```

### インスタンスメンバが異なる場合

インスタンスのメンバが異なる場合は構造的部分型の概念に基づいて、互換性を決定しています。

**Animal2クラス**に**age**がないため互換性がないためtargetClass2にsourceClass2を代入するとエラーとなります。

```ts:title=src/07_type-compatibility.ts
class Person2 {
  name: string = "Taro";
  age: number = 20;
}
class Animal2 {
  name: string = "Poti";
}
let targetClass2 = new Person2();
let sourceClass2 = new Animal2();
targetClass2 = sourceClass2; //NG
```

逆に**Animal3クラス**に**age**がある場合は互換性があることになるためtargetClass3にsourceClass3を代入することが可能です。

```ts:title=src/07_type-compatibility.ts
class Person3 {
  name: string = "Taro";
}
class Animal3 {
  name: string = "Poti";
  age: number = 20;
}
let targetClass3 = new Person3();
let sourceClass3 = new Animal3();
targetClass3 = sourceClass3; //OK
```

しかし、同じインスタンスメンバを持っているクラス同士でも、**private**修飾子がついている場合は互換性が無くなります。同じインスタンスから作られたものであれば代入は可能です。

```ts:title=src/07_type-compatibility.ts
class Person4 {
  name: string = "Taro";
  private age: number = 20;
}
class Animal4 {
  name: string = "Poti";
  private age: number = 3;
}
let targetClass4 = new Person4();
let sourceClass4 = new Animal4();
targetClass4 = sourceClass4; //NG
```


## まとめ

今回はTypeScriptの型の互換性について解説を行いました。<br>

TypeScriptは全体的に構造的部分型という概念が重要な気がします。しっかり理解しておきたいですね！！

最後まで見ていただきありがとうございました！！

TypeScript超入門シリーズの他の記事もご覧いただければうれしいので是非お願いします！！

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/tags/type-script%25E5%2585%25A5%25E9%2596%2580/" data-iframely-url="//cdn.iframe.ly/sqovy6d"></a></div></div>