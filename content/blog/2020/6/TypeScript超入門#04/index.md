---
title: 【初心者向け】TypeScript超入門#04 クラス編
date: "2020-06-28"
description: この記事はTypeScript超入門シリーズの第4回目として、TypeScriptのクラスについてまとめて解説していきます！
slug: 2020-06-28/start-typescript-04
tags: [TypeScript, TypeScript超入門]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

この記事は TypeScript 超入門シリーズの第 4 回目として、TypeScript のクラスについてまとめて解説していきます！

[TypeScript 超入門#01 概要説明~環境構築編](https://rpf-noblog.com/2020-06-17/start-typescript-01)<br>
[TypeScript 超入門#02 基本的な型編](https://rpf-noblog.com/2020-06-22/start-typescript-02)<br>
[TypeScript 超入門#03 関数編](https://rpf-noblog.com/2020-06-25/start-typescript-03)<br>
[TypeScript 超入門#04 クラス編](https://rpf-noblog.com/2020-06-28/start-typescript-04)<br>
[TypeScript 超入門#05 ジェネリクス編](https://rpf-noblog.com/2020-07-05/start-typescript-05)<br>
[TypeScript 超入門#06 型推論基礎編](https://rpf-noblog.com/2020-07-15/start-typescript-06)<br>
[TypeScript 超入門#07 型の互換性編](https://rpf-noblog.com/2020-07-18/start-typescript-07)<br>
[TypeScript 超入門#08 型安全編](https://rpf-noblog.com/2020-07-26/start-typescript-08)<br>

- 基本的なクラスの書き方
- クラスメンバー修飾子（アクセシビリティ）
- getter と setter
- static(静的メンバ)
- 継承
- 抽象クラス

ソースコードは以下 GitHub を参照してください。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://github.com/N-Iwata/start-typescript" data-iframely-url="//cdn.iframe.ly/mWiO3U9"></a></div></div>

## 基本的なクラスの書き方

基本的には JavaScript のクラスにコンストラクタで受け取る引数とメンバー変数やメソッドの戻り値に型を指定してあげるだけです。

コンストラクタはメソッドですが、戻り値の型を指定する必要はありません。TypeScript の言語仕様です。

```ts:title=src/04_class-types.ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

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

次のコードは上記の**Person**クラスと同一のものになります。

```ts:title=src/04_class-types/040_basic-clas/.ts
class Person2 {
  constructor(public name: string, public age: number) {}

  introduce(): string {
    return `私の名前は${this.name}です。年齢は${this.age}歳です。`;
  }
}
const tanaka = new Person2("田中次郎", 25);
console.log(tanaka.name); //→田中次郎
console.log(tanaka.age);  //→25
console.log(tanaka.introduce()); // →私の名前は田中次郎です。年齢は25歳です。
```

## クラスメンバー修飾子（アクセシビリティ）

基本的には他の言語と同じように**public・private・protected**修飾子を付与することができます。

- public→ どこからでも参照・実行が可能
- private→ 同一クラス内のみ参照・実行が可能
- protected→ 継承されたサブクラス内でも参照・実行が可能

次の場合は**age**に**private**を付与しているので、**age**には**Person1 クラス**からしか直接アクセスはできません。継承している**Person2 クラス**からもアクセスできません。

**gender**には**protected**を付与しているので、継承している**Person2 クラス**からもアクセスできます。

修飾子を付与しない場合は**public**と同じになります。基本的には**public**は書かないのが普通のようです。

```ts:title=src/04_class-types/041_member-accessibility.ts
class Person1 {
  public name: string;
  private age: number;
  protected gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  introduce(): string {
    return `私の名前は${this.name}です。年齢は${this.age}歳です。`;
  }
}
class Person2 extends Person1 {
  constructor(name: string, age: number, gender: string) {
    super(name, age, gender);
  }

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

## getter と setter

オブジェクト指向プログラミングの定石である**getter と setter**は TypeScript にもあります。getter と setter については他の言語でもいろいろと賛否があるみたいですが、言語仕様としてあるので理解はしておいたほうがいいです。

getter と setter の必要性を知りたい方は[オブジェクト指向プログラムで getter/setter メソッドを使わなければならない 10 の理由](http://fukumori.org/oo/why_use_getters_and_setters_j.html)が参考になると思います。

とりあえず簡単に言うと、getter と setter を使うことによって、アクセス制御ができるようにして、どこでメンバ変数の参照や書き換えをしているかをコード中で見やすくするようなことです。

それでは簡単な例を見てみましょう。

```ts:title=src/04_class-types/042_getter-setter.ts
class Person {
  private _name: string;
  private _age: number;

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
const yamada = new Person("山田三郎", 20);

console.log(yamada._name);  //→NG(privateなので直接アクセスできない)
console.log(yamada.name); // 山田三郎

yamada._age = 30;  //→NG(privateなので直接アクセスできない)
yamada.age = 30;  //→OK
```

この場合、以下のようなアクセス制御になっています。

- メンバ変数の[_name]には直接参照できないが、[getter]を通して[_name]にアクセスしている。
- メンバ変数の[_age]は直接書き換えできないが、[setter]を通して[_age]を書き換えている。

このように、直接外部からアクセスできないようにして、[getter]や[setter]を介すことによって、アクセスの追跡をしやすくできます。

ちなみにメンバ変数と[getter]や[setter]の名称が同じになってしまう場合は、慣習としてメンバ変数の先頭に[_]をつけることが多いです。

## static(静的メンバ)

**static**を使用することによって、クラスのインスタンスを作成しなくてもメンバ変数やメソッドにアクセスすることができます。

次の例では直接[Person4]クラスのメンバ変数やメソッドにアクセスして使用しています。

```ts:title=src/04_class-types/043_static-member.ts
class Person {
  static firstName: string = "太郎";
  static lastName: string = "山田";
  static age: number = 18;

  // メソッド
  static introduce(): string {
    return `私の名前は${this.lastName}${this.firstName}です。${this.age}歳です。`;
  }
}
console.log(Person.firstName); //→太郎
console.log(Person.lastName);  //→山田
console.log(Person.age); //→18
console.log(Person.introduce()); //→私の名前は山田太郎です。18歳です。
```

## 継承

クラスの継承に関しては基本的には JavaScript と同じになります。
子クラス内の constructer で**super**メソッドを呼んであげれば、親クラスのメンバ変数を初期化できます。

また、親クラスのメソッドを子クラスでも使用できます。<br>
次の例では Dog クラス(子クラス)で Animal クラス(親クラス)の**cry**メソッドを**super.cry()**で実行しています。

```ts:title=src/04_class-types/044_Inheritance.ts
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

次の例では**Animal**クラスに**name**プロパティと**cry**メソッドが必要ですよと、子クラスに伝えるものです。

```ts:title=src/04_class-types/045_abstract-class.ts
abstract class Animal {
  abstract name: string;
  abstract cry(): string;
}
```

クラスを継承しただけの状態だと、次のようなエラーが出て、実装のし忘れなどを防ぐことができます。

```ts:title=src/04_class-types/045_abstract-class.ts
class Dog extends Animal {
}
```

> 非抽象クラス 'Dog' はクラス 'Animal' からの継承抽象メンバー 'cry' を実装しません。ts(2515)<br>
> 非抽象クラス 'Dog' はクラス 'Animal' からの継承抽象メンバー 'name' を実装しません。ts(2515)

なので、次のように実装してあげます。

```ts:title=src/04_class-types/045_abstract-class.ts
class Dog extends Animal {
  name = "ポチ";
  cry() {
    return "わんわん";
  }
}
```

## インターフェース

インターフェースを使用すれば、複数のクラスを継承（実際は実装）することができます。

```ts:title=src/04_class-types/046_interface.ts
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

上の例で**TwoWay**クラス内に**batting**メソッドを書き忘れていた場合には以下のようにエラーがでます。

> クラス 'TwoWay' はインターフェイス 'Batter' を正しく実装していません。<br>プロパティ 'batting' は型 'TwoWay' にありませんが、型'Batter' では必須です。ts(2420)

こういうエラーが実装中に出るのが、TypeScript のメリットですね！

## まとめ

今回は TypeScript のクラスについて解説を行いました。<br>

クラスについては JavaScript にはない概念があったりするので、少し難しいですが、実際にコードを書いてみるとエラーが出るタイミングとか理由が何となく理解できると思います！！

クラスはオブジェクト指向プログラミングの柱みたいなものなので、しっかり理解したいですね！！

次回はジェネリクスについてまとめていきたいと思います。

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
