---
title: 【初心者向け】TypeScript超入門#08 型安全編
date: "2020-07-26"
description: この記事はTypeScript超入門シリーズの第8回目として、TypeScriptの型安全についてまとめて解説していきます！
slug: 2020-07-26/start-typescript-08
tags: [TypeScript, TypeScript超入門]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

この記事は TypeScript 超入門シリーズの第 8 回目として、TypeScript の型安全についてまとめて解説していきます！

ソースコードは以下 GitHub を参照してください。

https://github.com/N-Iwata/start-typescript

## 型安全について

TypeScript は、制約をつけたり絞り込んだりすることにより、型安全を実現しバグを減らすことを目的としています。この安全性は JavaScript でも必要なことですが、TypeSctipt を使いこなすことで型の安全性が実現するので、解説していきます。

## 関数のオプショナルパラメータ

まず次のように、パラメータを 2 つ受け取り文字列を返す関数に 1 つしかパラメーターを渡さなければ、エラーになります。

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

しかし、オプショナルパラメータにすることによって name に undefined 型も付与されていることがわかります。そのため、引数を渡さないと undefined となります。

```ts
function introduce(age: number, name?: string | undefined): string;
```

また、以下のように**toUpperCase**を使用すると、undifined 型である可能性があるため、エラーになります。

```ts:title=src/08_type-safety.ts
function introduce(age: number, name?: string) {
  return `私は${name.toUpperCase()}です。${age}歳です。`;
  //NG→オブジェクト'undefined' である可能性があります。
}
```

ですので、次のように name があるかないかの分岐をつけてやることで、toUpperCase が使用することができます。

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

この時の introduce の型推論を見ると次のようになっており、デフォルトパラメータの値から、引数の型推論がされており、ここでは number 型が推論されていることになります。

```ts
function introduce(name: string, age?: number): string;
```

なので、次のように string 型の値["20"]を渡すとエラーになります。

```ts:title=src/08_type-safety.ts
console.log(introduce("Taro", "20")); //NG
```

## 関数に Nullable 型のパラメータを使う

関数に引数を渡す時に、まだ API からデータが取得できていなくて、null を許容したい場合があります。この時に Nullable 型を使用します。

次の場合は null を許容していないため、null を引数に渡すとエラーになります。

```ts:title=src/08_type-safety.ts
function getAge(age: number) {
  return `${age}歳です`;
}
console.log(getAge(20)); //20歳です
console.log(getAge(null));  //NG
```

ですので、**number | null** にように null を含めた共用型にすることでエラーを回避しています。number 型のメソッドを使いたい場合も、型を絞り込むことによって安全に使用できます。

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

## readonly で読み込み専用にする

オブジェクトやクラスのメンバなどに**readonly**をつけることによって、読み込み専用のプロパティにして、安全性を高めることができます。

次の例では name に readonly をつけることで、name の書き換えを禁止しています。

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

また、**Readonly 型**を使用することで、一括で読み込み専用にできます。

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
};
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
};
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

TypeScript では次のような Profile 型の変数に、定義されていないプロパティに代入をするとエラーになります。

```ts:title=src/08_type-safety.ts
type Profile = {
  name: string;
};
const taro: Profile = {
  name: "Taro", //OK
  age: 20,  //NG
};
```

JavaScript と同じように、TypeScript でも動的にオブジェクトのプロパティを追加することが可能です。

インデックスシグネチャというものを使うことで可能になります。<br>
次の例では string 型のプロパティのみ追加できるので、number 型を追加するとエラーになります。

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

しかし、次の場合は固定の name の型とインデックスシグネチャの型が一致していないためエラーになります。

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

この場合は name は明示的に string 型になりますが、追加したプロパティは共用型になります。

```ts:title=src/08_type-safety.ts
const a = taro.age;
//const a: string | number
```

### プロパティの型を制限

次の例では、プロパティ[work]に文字列リテラル型の Work 型のみを含むことができます。

undefined を含めている理由は、存在しない可能性があるプロパティの参照も Work 型として推論されてしまうからです。

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

次の例では、**[index in Kind]?**とすることで、Kind 型で定義していない[test]を作成するとエラーになります。in キーワードを使う場合、オプショナルの?を使用することができるため undefined の付与は不要となります。

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

次の例では、typeof を使うことで、その条件分岐内では型が絞り込まれているので、安全に算術できます。

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

次の例では、2 つの interface からなる型を引数に受け取る関数内で、in 演算子を使うことで型を絞りこんでいます。

name は両方の interface に含まれるため、どこからでもアクセスできますが、ave と era は in 演算子で絞り込んだ条件分岐内でしかアクセスができません。

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

instanceof を使うことでクラスのインスタンスに関しても絞り込みを行うことができます。

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

## タグ付き Union Types

次の例のように、全てに name プロパティを持ち、型がリテラル型の場合には条件分岐で絞り込みが可能です。

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

今回は TypeScript の型安全について解説を行いました。<br>

結局は TypeScript はバグを少なくするためなので、しっかり TypeScript を理解して安全にコードを書きたいですね。

<br>
<br>

最後まで見ていただきありがとうございました！！
この記事が良かったと思ったら SHARE していただけると泣いて喜びます 🤣
