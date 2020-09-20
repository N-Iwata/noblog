---
title: 【初心者向け】TypeScript超入門#08 型安全編
date: "2020-07-26"
description: この記事はTypeScript超入門シリーズの第8回目として、TypeScriptの型安全についてまとめて解説していきます！
slug: 2020-07-26/start-typescript-08
tags: [TypeScript, TypeScript入門, 型安全]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きwebエンジニアおじさんこと**のふのふ**(@rpf_nob)です！！

この記事はTypeScript超入門シリーズの第8回目として、TypeScriptの型安全についてまとめて解説していきます！

[TypeScript 超入門#01 概要説明~環境構築編](https://rpf-noblog.com/2020-06-17/start-typescript-01)<br>
[TypeScript 超入門#02 基本的な型編](https://rpf-noblog.com/2020-06-22/start-typescript-02)<br>
[TypeScript 超入門#03 関数編](https://rpf-noblog.com/2020-06-25/start-typescript-03)<br>
[TypeScript 超入門#04 クラス編](https://rpf-noblog.com/2020-06-28/start-typescript-04)<br>
[TypeScript 超入門#05 ジェネリクス編](https://rpf-noblog.com/2020-07-05/start-typescript-05)<br>
[TypeScript 超入門#06 型推論基礎編](https://rpf-noblog.com/2020-07-15/start-typescript-06)<br>
[TypeScript 超入門#07 型の互換性編](https://rpf-noblog.com/2020-07-18/start-typescript-07)<br>
[TypeScript 超入門#08 型安全編](https://rpf-noblog.com/2020-07-26/start-typescript-08)<br>

- 型安全について
- 関数のオプショナルパラメータ
- 関数のデフォルトパラメータ
- 関数にNullable型のパラメータを使う
- readonlyで読み込み専用にする
- オブジェクトにリテラル型をつける
- オブジェクトに動的に値を追加する
- typeof タイプガード
- in タイプガード
- instanceof タイプガード
- タグ付きUnion Types

GitHub のリポジトリは[こちら](https://github.com/N-Iwata/start-typescript)にあります。

## 型安全について

TypeScriptは、制約をつけたり絞り込んだりすることにより、型安全を実現しバグを減らすことを目的としています。この安全性はJavaScriptでも必要なことですが、TypeSctiptを使いこなすことで型の安全性が実現するので、解説していきます。

## 関数のオプショナルパラメータ

まず次のように、パラメータを2つ受け取り文字列を返す関数に1つしかパラメーターを渡さなければ、エラーになります。

```ts:title=src/08_type-safety.ts
function introduce(age: number, name: string) {
  return `私は${name}です。${age}歳です。`;
}
console.log(introduce(20, "Taro")); //私はTaroです。20歳です。
console.log(introduce(20)); //NG
```

そこで?を付けることによって、引数がなくてもエラーになりません。

```ts:title=src/08_type-safety.ts
function introduce(age: number, name?: string) {
  return `私は${name}です。${age}歳です。`;
}
console.log(introduce(20, "Taro")); //私はTaroです。20歳です。
console.log(introduce(20)); //私はundefinedです。20歳です。
```

しかし、オプショナルパラメータにすることによってnameにundefined型も付与されていることがわかります。そのため、引数を渡さないとundefinedとなります。

```ts
function introduce(age: number, name?: string | undefined): string
```

また、以下のように**toUpperCase**を使用すると、undifined型である可能性があるため、エラーになります。

```ts:title=src/08_type-safety.ts
function introduce(age: number, name?: string) {
  return `私は${name.toUpperCase()}です。${age}歳です。`; 
  //NG→オブジェクト'undefined' である可能性があります。
}
```

ですので、次のようにnameがあるかないかの分岐をつけてやることで、toUpperCaseが使用することができます。

```ts:title=src/08_type-safety.ts
function introduce(age: number, name?: string) {
  if (name) {
    return `私は${name.toUpperCase()}です。${age}歳です。`;
  } else {
    return `私は${age}歳です。`;
  }
}
console.log(introduce(20, "Taro")); //私はTAROです。20歳です。
console.log(introduce(20)); //私は20歳です。
```

## 関数のデフォルトパラメータ

引数を関数に渡さなかった場合のデフォルトパラメータを設定している場合は、とりあえず通常では次のようになります。

```ts:title=src/08_type-safety.ts
function introduce(name: string, age = 10) {
  return `私は${name}です。${age}歳です。`;
}
console.log(introduce("Taro", 20)); //私はTaroです。20歳です。
console.log(introduce("Taro")); //私はTaroです。10歳です。
```

この時のintroduceの型推論を見ると次のようになっており、デフォルトパラメータの値から、引数の型推論がされており、ここではnumber型が推論されていることになります。

```ts
function introduce(name: string, age?: number): string
```

なので、次のようにstring型の値["20"]を渡すとエラーになります。

```ts:title=src/08_type-safety.ts
console.log(introduce("Taro", "20")); //NG
```

## 関数にNullable型のパラメータを使う

関数に引数を渡す時に、まだAPIからデータが取得できていなくて、nullを許容したい場合があります。この時にNullable型を使用します。

次の場合はnullを許容していないため、nullを引数に渡すとエラーになります。

```ts:title=src/08_type-safety.ts
function getAge(age: number) {
  return `${age}歳です`;
}
console.log(getAge(20)); //20歳です
console.log(getAge(null));  //NG
```

ですので、**number | null** にようにnullを含めた共用型にすることでエラーを回避しています。number型のメソッドを使いたい場合も、型を絞り込むことによって安全に使用できます。

```ts:title=src/08_type-safety.ts
function getAge(age: number | null) {
  if (age) {
    return `${age}歳です`;
  } else {
    return `年齢がわかりません`;
  }
}
console.log(getAge(20)); //20歳です
console.log(getAge(null)); //年齢がわかりません
```

## readonlyで読み込み専用にする

オブジェクトやクラスのメンバなどに**readonly**をつけることによって、読み込み専用のプロパティにして、安全性を高めることができます。

次の例ではnameにreadonlyをつけることで、nameの書き換えを禁止しています。

```ts:title=src/08_type-safety.ts
type Profile = {
  readonly name: string;
  age: number;
};

const taro: Profile = {
  name: "Taro",
  age: 20,
};

taro.name = "Jiro"; //NG
taro.age = 30; //OK
```

また、**Readonly型**を使用することで、一括で読み込み専用にできます。

```ts:title=src/08_type-safety.ts
type Profile = {
  name: string;
  age: number;
};
const taro: Readonly<Profile> = {
  name: "Taro",
  age: 20,
};
taro.name = "Jiro"; //NG
taro.age = 30; //NG
```

以下のような型になっているイメージです。

```ts
type Profile = {
  readonly name: string;
  readonly age: number;
};
```

## オブジェクトにリテラル型をつける

普通にオブジェクトを定義すると、以下のように型推論されます。

```ts:title=src/08_type-safety.ts
const taro = {
  name: "Taro",
  age: 20,
};
```
```ts
const taro: {
  name: string;
  age: number;
}
```

これをリテラル型にして安全性を高めるには以下のようにします。

```ts:title=src/08_type-safety.ts
const taro = {
  name: "Taro" as "Taro",
  age: 20 as 20,
}
//or
const taro = {
  name: "Taro" as const,
  age: 20 as const,
};
```

すると次のようにリテラル型で定義されます。

```ts
const taro: {
  name: "Taro";
  age: 20;
}
```

ちなみに次のようにオブジェクトの最後に[as const]をつけると、**readonly**が付与されます。

```ts:title=src/08_type-safety.ts
const taro = {
  name: "Taro",
  age: 20,
} as const;
```
```ts
const taro: {
  readonly name: "Taro";
  readonly age: 20;
};
```

## オブジェクトに動的に値を追加する

TypeScriptでは次のようなProfile型の変数に、定義されていないプロパティに代入をするとエラーになります。

```ts:title=src/08_type-safety.ts
type Profile = {
  name: string;
};
const taro: Profile = {
  name: "Taro", //OK
  age: 20,  //NG
};
```

JavaScriptと同じように、TypeScriptでも動的にオブジェクトのプロパティを追加することが可能です。

インデックスシグネチャというものを使うことで可能になります。<br>
次の例ではstring型のプロパティのみ追加できるので、number型を追加するとエラーになります。

**[index: string]: string;**の部分がインデックスシグネチャといいます。

```ts:title=src/08_type-safety.ts
type Profile = {
  name: string;
  [index: string]: string;
};
const taro: Profile = {
  name: "Taro", //OK
  work: "engineer", //OK
  age: 20, //NG
};
```

しかし、次の場合は固定のnameの型とインデックスシグネチャの型が一致していないためエラーになります。

```ts:title=src/08_type-safety.ts
type Profile = {
  name: string; //NG
  [index: string]: number;
};
```

これを回避するにはインデックスシグネチャの型を共用型にしてあげます。

```ts:title=src/08_type-safety.ts
type Profile = {
  name: string; //OK
  [index: string]: number | string;
};
const taro: Profile = {
  name: "Taro", //string
  age: 20, //number
};
```

この場合はnameは明示的にstring型になりますが、追加したプロパティは共用型になります。

```ts:title=src/08_type-safety.ts
const a = taro.age;
//const a: string | number
```

### プロパティの型を制限

次の例では、プロパティ[work]に文字列リテラル型のWork型のみを含むことができます。

undefinedを含めている理由は、存在しない可能性があるプロパティの参照もWork型として推論されてしまうからです。

```ts:title=src/08_type-safety.ts
type Work = "engineer" | "desighner" | "director" | undefined;

type Profile = {
  name: string;
  work: { [index: string]: Work };
};
const taro: Profile = {
  name: "Taro",
  work: {
    kind: "engineer",
  },
};
const x = taro.work.kind;
const y = taro.work.aaa;
console.log(x); //engineer
console.log(y); //undefined
```

### プロパティ自体の名称を制限

次の例では、**[index in Kind]?**とすることで、Kind型で定義していない[test]を作成するとエラーになります。inキーワードを使う場合、オプショナルの?を使用することができるためundefinedの付与は不要となります。

```ts:title=src/08_type-safety.ts
type Work = "engineer" | "desighner" | "director";
type Kind = "kind" | "role";

type Profile = {
  name: string;
  work: { [index in Kind]?: Work };
};
const taro: Profile = {
  name: "Taro",
  work: {
    kind: "engineer",
    role: "engineer",
    test: "engineer",  //NG
  },
};
const x = taro.work.kind;
const y = taro.work.role;
const z = taro.work.test; //NG
console.log(x);
console.log(y);
```

## typeof タイプガード

次の例では、typeofを使うことで、その条件分岐内では型が絞り込まれているので、安全に算術できます。

```ts:title=src/08_type-safety.ts
function sum(a: number | string) {
  if (typeof a === "number") {
    const value = a; //const value: number
    return value * 2;
  } else {
    const value = a; //const value: string
    return `${value} ${value}`;
  }
}

console.log(sum(100)); //200
console.log(sum("Hey")); //Hey Hey
console.log(sum(false)); //NG
```

## in タイプガード

次の例では、2つのinterfaceからなる型を引数に受け取る関数内で、in演算子を使うことで型を絞りこんでいます。

nameは両方のinterfaceに含まれるため、どこからでもアクセスできますが、aveとeraはin演算子で絞り込んだ条件分岐内でしかアクセスができません。

```ts:title=src/08_type-safety.ts
interface Batter {
  name: string;
  ave: number;
}
interface Pitcher {
  name: string;
  era: number;
}
type TwoWay = Batter | Pitcher;

function taroProfile(twoWay: TwoWay) {
  console.log(twoWay.name);  
  console.log(twoWay.ave);  
  // プロパティ 'ave' は型 'TwoWay' に存在しません。
  // プロパティ 'ave' は型 'Pitcher' に存在しません。

  if ("ave" in twoWay) {
    console.log(twoWay.ave);
    console.log(twoWay.era);  //プロパティ 'era' は型 'Batter' に存在しません
  }
  if ("era" in twoWay) {
    console.log(twoWay.ave);  //プロパティ 'ave' は型 'Pitcher' に存在しません。
    console.log(twoWay.era);
  }
}
taroProfile({ name: "taro", ave: 0.33, era: 2.15 });
```

## instanceof タイプガード

instanceofを使うことでクラスのインスタンスに関しても絞り込みを行うことができます。

```ts:title=src/08_type-safety.ts
class Batter {
  batting() {
    console.log("batting!");
  }
}
class Pitcher {
  pitching() {
    console.log("pitching!");
  }
}
type TwoWay = Batter | Pitcher;

function twoWay(value: TwoWay) {
  value.batting(); 
  // プロパティ 'batting' は型 'TwoWay' に存在しません。
  // プロパティ 'batting' は型 'Pitcher' に存在しません。
  
  if (value instanceof Batter) {
    value.batting();
    value.pitching(); //プロパティ 'pitching' は型 'Batter' に存在しません。
  }
  if (value instanceof Pitcher) {
    value.batting();  //プロパティ 'batting' は型 'Pitcher' に存在しません。
    value.pitching();
  }
}
twoWay(new Batter());
twoWay(new Pitcher());
```

## タグ付きUnion Types

次の例のように、全てにnameプロパティを持ち、型がリテラル型の場合には条件分岐で絞り込みが可能です。

```ts:title=src/08_type-safety.ts
class Batter {
  name: "batter" = "batter";
  batting() {
    console.log("batting!");
  }
}
class Pitcher {
  name: "pitcher" = "pitcher";
  pitching() {
    console.log("pitching!");
  }
}
type TwoWay = Batter | Pitcher;

function twoWay(value: TwoWay) {
  switch (value.name) {
    case "batter":
      value.batting();
      value.pitching(); // プロパティ 'pitching' は型 'Batter' に存在しません。
      break;
    case "pitcher":
      value.batting();  // プロパティ 'batting' は型 'Pitcher' に存在しません。
      value.pitching();
      break;
  }
}
twoWay(new Batter());
twoWay(new Pitcher());
```


## まとめ

今回はTypeScriptの型安全について解説を行いました。<br>

結局はTypeScriptはバグを少なくするためなので、しっかりTypeScriptを理解して安全にコードを書きたいですね。

最後まで見ていただきありがとうございました！！

TypeScript超入門シリーズの他の記事もご覧いただければうれしいので是非お願いします！！

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-17/start-typescript-01/" data-iframely-url="//cdn.iframe.ly/tmxszMy?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-22/start-typescript-02/" data-iframely-url="//cdn.iframe.ly/GsezT0D?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-25/start-typescript-03/" data-iframely-url="//cdn.iframe.ly/dOMYRKX?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-28/start-typescript-04/" data-iframely-url="//cdn.iframe.ly/lpldZS4?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-05/start-typescript-05/" data-iframely-url="//cdn.iframe.ly/LXlpIFZ?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-15/start-typescript-06/" data-iframely-url="//cdn.iframe.ly/pnXu3dX?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-18/start-typescript-07/" data-iframely-url="//cdn.iframe.ly/zWpJ6LT?iframe=card-small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-07-26/start-typescript-08/" data-iframely-url="//cdn.iframe.ly/hyokrE0?iframe=card-small"></a></div></div>