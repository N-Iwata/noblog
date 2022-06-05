---
title: 【初心者向け】TypeScript超入門#02 基本的な型編
date: "2020-06-22"
description: この記事はTypeScript超入門シリーズの第2回目として、TypeScriptの基本的な型についてまとめて解説していきます！
slug: 2020-06-22/start-typescript-02
tags: [TypeScript, TypeScript超入門]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

この記事は TypeScript 超入門シリーズの第 2 回目として、TypeScript の基本的な型についてまとめて解説していきます！

ソースコードは以下 GitHub を参照してください。

https://github.com/N-Iwata/start-typescript

## boolean 型

**boolean 型**は真偽値を格納するデータ型であり、取りうる値は**false**と**true**の二つです。

基本的には JavaScript での変数宣言に**[: boolean]**と追記するだけで宣言できます。

```ts:title=src/02_basic-types/020_boolean.ts
let isOpen: boolean = false;
console.log(isOpen); //→false

isOpen = true;
console.log(isOpen); //→true
```

**false**と**true**の 2 つ以外のデータを代入するとエラーになります。

```ts:title=src/02_basic-types/020_boolean-number-string.ts
isOpen = 1;
// 型 'number' を型 'boolean' に割り当てることはできません。

isOpen = "Hello world";
// 型 'string' を型 'boolean' に割り当てることはできません。
```

このように変数（関数も）に型という制約を課すことによって、誤ったデータの代入を防ぐこと（型安全）が TypeScript の最大のメリットとなります。

## number 型

**number 型**は浮動小数点値を格納するデータ型です。<br>
以下 4 つがサポートされています。

- 2 進数
- 8 進数
- 10 進数
- 16 進数

```ts:title=src/02_basic-types/020_boolean-number-string.ts
let counter: number = 0;
console.log(counter); //→0

counter++;
console.log(counter); //→1

counter = 1.5;
console.log(counter); //→1.5

counter = 15;
console.log(counter); //→15

counter = 0x0f; // 16進数
console.log(counter); //→15

counter = 0b1111; // 2進数
console.log(counter); //→15

counter = 0o17; // 8進数
console.log(counter); //→15
```

数値（number 型）以外のデータを代入するとエラーになります。

```ts:title=src/02_basic-types/020_boolean-number-string.ts
counter = "Tom";
// 型 'string' を型 'number' に割り当てることはできません。

counter = false;
// 型 'boolean' を型 'number' に割り当てることはできません。
```

## string 型

**string 型**は文字列を格納するデータ型です。<br>
JavaScript と同じように二重引用符(")、一重引用符(')又はバッククォート(`)で囲みます。

```ts:title=src/02_basic-types/020_boolean-number-string.ts
let name: string = "Tom";
console.log(name); //→Tom

name = "Mike";
console.log(name); //→Tom

let message = `Hello My Name is ${name}`;
console.log(message); //→Hello My Name is Mike
```

文字列（string 型）以外のデータを代入するとエラーになります。

```ts:title=src/02_basic-types/020_boolean-number-string.ts
name = 10;
// 型 'number' を型 'string' に割り当てることはできません。

name = false;
// 型 'boolean' を型 'string' に割り当てることはできません。
```

## array 型

**array 型**は配列を格納するデータ型です。<br>

```ts:title=src/02_basic-types/021_array-tuple.ts
let counters: number[] = [0, 1, 2, 3, 4];
console.log(counters); //→[0, 1, 2, 3, 4]
console.log(counters[0]); //→0
```

次のような書き方もできますが、非推奨とされています。

```ts:title=src/02_basic-types/021_array-tuple.ts
let counters2: Array<number> = [0, 1, 2, 3, 4]; // 非推奨
console.log(counters2); //→[0, 1, 2, 3, 4]
```

二次元配列の場合は次のように書きます。

```ts:title=src/02_basic-types/021_array-tuple.ts
let counters3: number[][] = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
];
console.log(counters3); //→[ [ 0, 1, 2, 3, 4 ], [ 5, 6, 7, 8, 9 ] ]
```

型を複数指定したい場合は次のように書きます。<br>
こちらは後に解説する共用型（Union 型）を使用しています。

```ts:title=src/02_basic-types/021_array-tuple.ts
let array: (number | boolean | string)[] = [0, false, "Tom"];
console.log(array); //→[ 0, false, 'Tom' ]
```

## tuple 型

**tuple 型**は固定数の要素の型がわかっている配列を表現するデータ型です。<br>

```ts:title=src/02_basic-types/021_array-tuple.ts
let profile: [string, number] = ["Tom", 20];
console.log(profile); //→[ 'Tom', 20 ]
```

次のようにデータを代入するとエラーになります。

```ts:title=src/02_basic-types/021_array-tuple.ts
profile = [2, "Tom"];
// 型 'number' を型 'string' に割り当てることはできません。
// 型 'string' を型 'number' に割り当てることはできません。
```

## any 型

**any 型**は型の不明な変数を扱うことができるデータ型です。

- JavaScript のコードを TypeScript に置き換える時
- API からデータを取得する時

などにおいてコンパイルを通過させる時には有効ですが、TypeScript のメリットを享受できません。ですので、最終的には**any 型**の現れない、型安全なコードを書くようにしましょう。

```ts:title=src/02_basic-types/022_any-unknown.ts
let anyVariable: any = 0;
console.log(anyVariable); //→0

anyVariable = "Tom";
console.log(anyVariable); //→Tom

anyVariable = false;
console.log(anyVariable); //→false
```

## unknown 型

**unknown 型**は**any 型**と似ていますが、型安全な**any 型**を表したいときに使用します。

数値を返す getAge]関数の戻り値を**any 型**と**unknown 型**で受け取った場合に、その値にさらに 10 を加算する処理をする場合に**unknown 型**だとエラーになります。

```ts:title=src/02_basic-types/022_any-unknown.ts
const getAge = (): number => 25;
let ageAny: any = getAge();
let ageUnknown: unknown = getAge();
console.log(ageAny + 10); //→OK
console.log(ageUnknown + 10); //→NG
// オブジェクト型は 'unknown' です。
```

次のように**タイプガード**をしてあげれば、実行することができます。

```ts:title=src/02_basic-types/022_any-unknown.ts
if( typeof ageUnknown === "number"){
  console.log(ageUnknown + 10); //→OK
}
```

## void 型

**void 型**は型がないことを表し、通常は値を返さない関数の戻り値の型として利用します。

```ts:title=src/02_basic-types/023_void-null-undefined.ts
function logger(message: string): void {
  console.log(message); //→Hello World!
}
logger("Hello World!");
```

変数に**void 型**を使用した場合は、**undefined**しか代入できません。

## null/undefined 型

**null 型**と**undefined 型**も**void 型**と同じように、単体ではあまり役に立ちません。

```ts:title=src/02_basic-types/023_void-null-undefined.ts
let nullVar: null = null;
console.log(nullVar); //→null

let undefVar: undefined = undefined;
console.log(undefVar); //→undefined
```

デフォルト設定では**null**と**undefined**は全ての型のサブタイプであり、全ての型で代入できます。

ただし、**--strictNullChecks**を true に設定すると、**null**と**undefined**は**void 型**と**null 型**・**undefined 型**のどちらかのみ代入できます。基本的には strictNullChecks を true に設定しておきましょう。

## never 型

**never 型**は発生しえない値の型を表します。次のようにエラーを投げるだけの関数など、戻り値を得られない時に使用します。

```ts:title=src/02_basic-types/024_never.ts
function error(message: string): never {
  throw new Error(message);
}
error("Error!");
```

また、switch 文の case の漏れを未然にチェックするためにも使うこともあります。一つの case 文をコメントアウトすると**型 'string' を型 'never' に割り当てることはできません。**と**check**のところがエラーになります。

```ts:title=src/02_basic-types/024_never.ts
const engineer = (enginner: "Frontend" | "Backend" | "Fullstack") => {
  switch (enginner) {
    case "Frontend":
      return `${enginner}エンジニアなのでReactが好きです!`;
    case "Backend":
      return `${enginner}エンジニアなのでGolangが好きです!`;
    case "Fullstack":
      return `${enginner}エンジニアなのでいろいろ好きです!`;
    default: {
      const check: never = enginner;
    }
  }
};
console.log(engineer("Frontend")); // FrontendエンジニアなのでReactが好きです!
```

## object 型

**object 型**は JavaScript のオブジェクトを格納するデータ型です。
また、非プリミティブ型を表す型なので、boolean,number,string,symbol,null,undefined のいずれでもありません。

次のコードで[object 型]を宣言できます。

```ts:title=src/02_basic-types/025_object.ts
let profile1: object = { name: "Tom" };
profile1 = { age: 20 };
```

もう一つ次のような書き方もできます。

```ts:title=src/02_basic-types/025_object.ts
let profile2: {} = { name: "Tom" };
profile2 = { age: 20 };
```

しかし、データ型が文字列でも数値でも問題なくコンパイルできてしまうため、型安全とはいえないので、以下のようにオブジェクトの構造を表す型を指定します。

```ts:title=src/02_basic-types/025_object.ts
let profile3: { name: string } = { name: "Tom" };
profile3 = { name: "Mike" }; //→OK
profile3 = { age: 20 }; //→NG
// オブジェクト リテラルは既知のプロパティのみ指定できます。'age' は型 '{ name: string; }' に存在しません。
```

こうすれば、型の制約が強くなるため、型安全になります。

## 型エイリアスと interface

型エイリアスとは型を別名として作ることができます。
次のコードは**Age 型**を**number 型**として作成しています。

```ts:title=src/02_basic-types/026_type-alias-interface.ts
type Age = number;
let age: Age = 20;
console.log(age); // 20
```

複雑な型も作成できます。

```ts:title=src/02_basic-types/026_type-alias-interface.ts
type Profile = {
  name: string;
  age: number;
};
let profile: Profile = {
  name: "Tom",
  age: 20,
};
console.log(profile); // { name: 'Tom', age: 20 }
```

オブジェクトに対しては次の**interface**を使う方法もあります。

```ts:title=src/02_basic-types.ts
interface Profile2 {
  name: string;
  age: number;
}

let profile2: Profile2 = {
  name: "Mike",
  age: 20,
};
console.log(profile2);  //{ name: 'Mike', age: 20 }
```

## intersection 型（交差型）

**intersection 型**は複数の型を 1 つに結合します。書き方は **&** で型エイリアスを連結します。

```ts:title=src/02_basic-types/027_intersection-union.ts
type Profile1 = {
  name: string;
  age: number;
};
type Profile2 = {
  height: number;
  weight: number;
};

type Profile3 = Profile1 & Profile2;

const profile: Profile3 = {
  name: "Tom",
  age: 20,
  height: 1.7,
  weight: 60,
};
console.log(profile); // { name: 'Tom', age: 20, height: 1.7, weight: 60 }
```

## union 型（共用体型）

**union 型**は複数の型のうち、1 つの型が成立することを表します。書き方は **|** を用いて、複数の型を連結します。

```ts:title=src/02_basic-types/027_intersection-union.ts
let value1: number = 1; //→OK
value1 = "Tom"; // 型 'string' を型 'number' に割り当てることはできません。

let value2: number | string = 1; //→OK
value2 = "Tom"; //→OK
```

## literal 型

**文字列 literal 型**と**数値 literal 型**と**真偽値 literal 型**があり、それぞれ正確な値を指定できます。

文字列 literal 型

```ts:title=src/02_basic-types/028_literal.ts
let myName: "Tom";
myName = "Tom"; //→OK
myName = "Mike"; //→NG
// 型 '"Mike"' を型 '"Tom"' に割り当てることはできません。
```

数値 literal 型

```ts:title=src/02_basic-types/028_literal.ts
let zero: 0;
zero = 0;
zero = 1; //→NG
// 型 '1' を型 '0' に割り当てることはできません。
```

真偽値 literal 型

```ts:title=src/02_basic-types/028_literal.ts
let isTruth: true;
isTruth = true; //→OK
isTruth = false;  //→NG
// 型 'false' を型 'true' に割り当てることはできません。
```

## enum 型（列挙型）

**数値列挙**と**文字列列挙**の 2 つを使用できます。

数値列挙は次のように記載します。値を記載しない場合は、0 からの連番の値がふられます。

```ts:title=src/02_basic-types/029_enum.ts
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

次のように書くと 1 からの連番の値がふられます。

```ts:title=src/02_basic-types/029_enum.ts
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

```ts:title=src/02_basic-types/029_enum.ts
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

今回は TypeScript の基本の型の解説を行いました。<br>

このあたりはあまり難しくないと思うので、理解はしやすいですね！！<br>
実際にコードを書くときに調べながらやれば、簡単に覚えるられると思います。

次回は関数についてまとめていきたいと思います。

https://rpf-noblog.com/tags/type-script%E8%B6%85%E5%85%A5%E9%96%80/

<br>
<br>

最後まで見ていただきありがとうございました！！
この記事が良かったと思ったら SHARE していただけると泣いて喜びます 🤣
