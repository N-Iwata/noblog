---
title: 【初心者向け】TypeScript超入門#04 クラス編
date: "2020-06-28"
description: この記事はTypeScript超入門シリーズの第4回目として、TypeScriptのクラスについてまとめて解説していきます！
slug: 2020-06-28/start-typescript-04
tags: [TypeScript,TypeScript入門]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！

麻雀と芝生大好きwebエンジニアおじさん(@rpf_nob)です。

この記事はTypeScript超入門シリーズの第4回目として、TypeScriptのクラスについてまとめて解説していきます！

[【初心者向け】TypeScript超入門#01 概要説明~環境構築編](https://rpf-noblog.com/2020-06-17/start-typescript-01)<br>
[【初心者向け】TypeScript超入門#02 基本的な型編](https://rpf-noblog.com/2020-06-22/start-typescript-02)<br>
[【初心者向け】TypeScript超入門#03 関数編](https://rpf-noblog.com/2020-06-25/start-typescript-03)<br>
[【初心者向け】TypeScript超入門#04 クラス編](https://rpf-noblog.com/2020-06-28/start-typescript-04) ←今ここ<br>
[【初心者向け】TypeScript超入門#05 ジェネリクス編](https://rpf-noblog.com/2020-07-05/start-typescript-05)<br>
[【初心者向け】TypeScript超入門#06 型推論基礎編](https://rpf-noblog.com/2020-07-15/start-typescript-06)

* 基本的なクラスの書き方
* クラスメンバー修飾子（アクセシビリティ）
* getterとsetter
* static(静的メンバ)
* 継承
* 抽象クラス

GitHubのリポジトリは[こちら](https://github.com/N-Iwata/start-typescript)にあります。

## 基本的なクラスの書き方

基本的にはJavaScriptのクラスにコンストラクタで受け取る引数とメンバー変数やメソッドの戻り値に型を指定してあげるだけです。

コンストラクタはメソッドですが、戻り値の型を指定する必要はありません。TypeScriptの言語仕様です。

```ts:title=src/04_class-types.ts
class Person {
  // メンバー変数の宣言
  name: string;
  age: number;

  // コンストラクタ
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // メソッド
  introduce(): string {
    return `私の名前は${this.name}です。年齢は${this.age}歳です。`;
  }
}

const sato = new Person("佐藤太郎", 30);
console.log(sato.name); //→佐藤太郎
console.log(sato.age);  //→30
console.log(sato.introduce()); // →私の名前は佐藤太郎です。年齢は30歳です。
```

後述するクラスメンバー修飾子をコンストラクタで受け取る引数に付与してあげることで、メンバー変数の初期化もしてくれます。

次のコードは上の[Person]クラスと同一のものになります。

```ts:title=src/04_class-types.ts
class Person {
  // コンストラクタ
  constructor(public name: string, public age: number) {}

  // メソッド
  introduce(): string {
    return `私の名前は${this.name}です。年齢は${this.age}歳です。`;
  }
}
```

## クラスメンバー修飾子（アクセシビリティ）

基本的には他の言語と同じよう**public・private・protected**修飾子を付与することができます。

* public→どこからでも参照・実行が可能
* private→同一クラス内のみ参照・実行が可能
* protected→継承されたサブクラス内でも参照・実行が可能

次の場合は[age]に[private]を付与しているので、[age]には[Person1クラス]からしか直接アクセスはできません。継承している[Person2クラス]からもアクセスできません。

[gender]には[protected]を付与しているので、継承している[Person2クラス]からもアクセスできます。

修飾子を付与しない場合は[public]と同じになります。基本的には[public]は書かないのが普通のようです。

```ts:title=src/04_class-types.ts
class Person1 {
  // メンバー変数の宣言
  public name: string;
  private age: number;
  protected gender: string;

  // コンストラクタ
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // メソッド
  introduce(): string {
    return `私の名前は${this.name}です。年齢は${this.age}歳です。`;
  }
}
class Person2 extends Person1 {
  // コンストラクタ
  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }
  // メソッド
  introduce(): string {
    return `私の名前は${this.name}です。${this.age}歳の${this.gender}です。`;  
    //→NG 親クラス(Person1)のageがprivateなので[age]にアクセスできない
  }
}
const tanaka = new Person1("田中次郎", 25, "男性");
console.log(tanaka.name); //→田中次郎
console.log(tanaka.age); //→NG(ageはprivateなのでアクセスできない)
console.log(tanaka.gender); //→NG(genderはprotectedなのでアクセスできない)
console.log(tanaka.introduce());  // 私の名前は田中次郎です。年齢は25歳です。

const suzuki = new Person2("鈴木花子", 20, "女性");
console.log(suzuki.name); //→鈴木花子
console.log(suzuki.age); //→NG(ageはprivateなのでアクセスできない)
console.log(suzuki.gender); //→NG(genderはprotectedなのでアクセスできない)
console.log(suzuki.introduce());  //→NG(ageがprivateなのでメソッド自体がエラー)
```

## getterとsetter

オブジェクト指向プログラミングの定石である**getterとsetter**はTypeScriptにもあります。getterとsetterについては他の言語でもいろいろと賛否があるみたいですが、言語仕様としてあるので理解はしておいたほうがいいです。

getterとsetterの必要性を知りたい方は[オブジェクト指向プログラムでgetter/setterメソッドを使わなければならない10の理由](http://fukumori.org/oo/why_use_getters_and_setters_j.html)が参考になると思います。

とりあえず簡単に言うと、getterとsetterを使うことによって、アクセス制御ができるようにして、どこでメンバ変数の参照や書き換えをしているかをコード中で見やすくするようなことです。

それでは簡単な例を見てみましょう。

```ts:title=src/04_class-types.ts
class Person3 {
  // メンバー変数の宣言
  private _name: string;
  private _age: number;

  // コンストラクタ
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }
  set age(num: number) {
    this._age = num;
  }
}
const yamada = new Person3("山田三郎", 20);

console.log(yamada._name);  //→NG(privateなので直接アクセスできない)
console.log(yamada.name); // 山田三郎

yamada._age = 30;  //→NG(privateなので直接アクセスできない)
yamada.age = 30;  //→OK
```

この場合、以下のようなアクセス制御になっています。

* メンバ変数の[_name]には直接参照できないが、[getter]を通して[_name]にアクセスしている。

* メンバ変数の[_age]は直接書き換えできないが、[setter]を通して[_age]を書き換えている。

このように、直接外部からアクセスできないようにして、[getter]や[setter]を介すことによって、アクセスの追跡をしやすくできます。

ちなみにメンバ変数と[getter]や[setter]の名称が同じになってしまう場合は、慣習としてメンバ変数の先頭に[_]をつけることが多いです。

## static(静的メンバ)

**static**を使用することによって、クラスのインスタンスを作成しなくてもメンバ変数やメソッドにアクセスすることができます。

次の例では直接[Person4]クラスのメンバ変数やメソッドにアクセスして使用しています。

```ts:title=src/04_class-types.ts
class Person4 {
  // メンバ変数
  static firstName: string = "太郎";
  static lastName: string = "山田";
  static age: number = 18;

  // メソッド
  static introduce(): string {
    return `私の名前は${this.lastName}${this.firstName}です。${this.age}歳です。`;
  }
}
console.log(Person4.firstName); //→太郎
console.log(Person4.lastName);  //→山田
console.log(Person4.age); //→18
console.log(Person4.introduce()); //→私の名前は山田太郎です。18歳です。
```

## 継承

クラスの継承に関しては基本的にはJavaScriptと同じになります。

子クラス内のconstructerで[super]メソッドを呼んであげれば、親クラスのメンバ変数を初期化できます。

また、親クラスのメソッドを子クラスでも使用できます。<br>
次の例ではDogクラス(子クラス)でAnimalクラス(親クラス)の[cry]メソッドを[super.cry()]で実行しています。

```ts:title=src/04_class-types.ts
class Animal {
  constructor(public name: string) {}
  cry(): string {
    return "鳴く";
  }
}
class Dog extends Animal {
  public say: string;
  constructor(name: string, say: string) {
    super(name);
    this.say = say;
  }
  cry(): string {
    return `${this.name}は${this.say}と${super.cry()}`;
  }
}
const dog = new Dog("シロ", "わんわん");
console.log(dog.cry()); //→シロはわんわんと鳴く
```

## 抽象クラス

抽象クラスは先にこういうメンバ変数やメソッドがありますよというのを宣言しておいて、そのクラスを継承した子クラス内でメンバ変数やメソッドを実装する必要があると伝えるためのものです。

次の例では[Animal2]クラスに[name]プロパティと[cry]メソッドが必要ですよと、子クラスに伝えるものです。

```ts:title=src/04_class-types.ts
abstract class Animal2 {
  abstract name: string;
  abstract cry(): string;
}
```

クラスを継承しただけの状態だと、次のようなエラーが出て、実装のし忘れなどを防ぐことができます。

```ts:title=src/04_class-types.ts
class Dog2 extends Animal2 {
}
```

>非抽象クラス 'Dog2' はクラス 'Animal2' からの継承抽象メンバー 'cry' を実装しません。ts(2515)<br>
非抽象クラス 'Dog2' はクラス 'Animal2' からの継承抽象メンバー 'name' を実装しません。ts(2515)

なので、次のように実装してあげます。

```ts:title=src/04_class-types.ts
class Dog2 extends Animal2 {
  name = "ポチ";
  cry() {
    return "わんわん";
  }
}
```

## インターフェース

インターフェースを使用すれば、複数のクラスを継承（実際は実装）することができます。

```ts:title=src/04_class-types.ts
interface Pitcher {
  pitching(): void;
}
interface Batter {
  batting(): void;
}
class TwoWay implements Pitcher, Batter {
  pitching(): void {
    console.log("ピッチング！");
  }
  batting(): void {
    console.log("バッティング！");
  }
}
const otani = new TwoWay();
otani.pitching(); //→ピッチング！
```

上の例で[TwoWay]クラス内に[batting]メソッドを書き忘れていた場合には以下のようにエラーがでます。

>クラス 'TwoWay' はインターフェイス 'Batter' を正しく実装していません。<br>プロパティ 'batting' は型 'TwoWay' にありませんが、型'Batter' では必須です。ts(2420)

こういうエラーが実装中に出るのが、TypeScriptのメリットですね！


## まとめ

今回はTypeScriptのクラスについて解説を行いました。<br>

クラスについてはJavaScriptにはない概念があったりするので、少し難しいですが、実際にコードを書いてみるとエラーが出るタイミングとか理由が何となく理解できると思います！！

クラスはオブジェクト指向プログラミングの柱みたいなものなので、しっかり理解したいですね！！

次回はジェネリクスについてまとめていきたいと思います。

最後まで見ていただきありがとうございました！！

[【初心者向け】TypeScript超入門#01 概要説明~環境構築編](https://rpf-noblog.com/2020-06-17/start-typescript-01)<br>
[【初心者向け】TypeScript超入門#02 基本的な型編](https://rpf-noblog.com/2020-06-22/start-typescript-02)<br>
[【初心者向け】TypeScript超入門#03 関数編](https://rpf-noblog.com/2020-06-25/start-typescript-03)<br>
[【初心者向け】TypeScript超入門#04 クラス編](https://rpf-noblog.com/2020-06-28/start-typescript-04) ←今ここ<br>
[【初心者向け】TypeScript超入門#05 ジェネリクス編](https://rpf-noblog.com/2020-07-05/start-typescript-05)<br>
[【初心者向け】TypeScript超入門#06 型推論基礎編](https://rpf-noblog.com/2020-07-15/start-typescript-06)


