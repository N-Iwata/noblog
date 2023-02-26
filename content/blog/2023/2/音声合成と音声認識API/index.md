---
title: 【JavaScript】Web Speech APIで音声合成と音声認識を試す
date: "2023-02-26"
updated: "2023-02-26"
description: 2022年の個人の振り返りを一応しておきます。
slug: 2023-02-26/speech-synthesis-recognition
tags: [JavaScript]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

今回は Web Speech API の SpeechSynthesisUtterance と SpeechRecognition を試してみたので、実装方法のまとめと試してみた感想を残しておきたいと思います。

https://developer.mozilla.org/ja/docs/Web/API/SpeechSynthesisUtterance

https://developer.mozilla.org/ja/docs/Web/API/SpeechRecognition/SpeechRecognition

## 音声合成

業務では、Amazon Polly を使用して音声を作成したものをブラウザから流すようにしています。

自分が入社する前（２・３年前）に SpeechSynthesisUtterance を試してみて、自然な音声にならないので断念し、Amazon Polly を選択したという経緯があったようです。

今回は、現時点で音声がどうなっているかを確認する目的で試してみました。

ちなみに SpeechSynthesisUtterance は Experimental（実験的な機能）の状態です。
本番で使用する前にブラウザー互換性一覧表をチェックしてください。

### 作成したものの概要

- TextField を１つ用意し、入力されたテキストを音声合成する
- 再生・停止・再開のボタンを用意する

### state 準備

TextField 編集用の state と SpeechSynthesisUtterance を管理する ref を用意します。

```ts
const [text, setText] = useState("");
const speechRef = useRef(new SpeechSynthesisUtterance(text));
```

### handler 準備

再生・停止・再開の handler を以下のようにそれぞれ準備します。

window.speechSynthesis.speak で音声を再生します。（連打するとキューのように再生する音声が溜まっていきます）

pause と resume もそれぞれ用意します。

```ts
const handlePlay = () => {
  if (!text) {
    alert("テキストを入力してください");
    return;
  }
  speechRef.current.lang = "ja-JP";
  speechRef.current.text = text;
  window.speechSynthesis.speak(speechRef.current);
};
const handleStop = () => {
  window.speechSynthesis.pause();
};
const handleResume = () => {
  window.speechSynthesis.resume();
};
```

### JSX 部分

```tsx
  <input
      value={text}
      onChange={(e) => setText(e.target.value)}
  />
  <div>
    <button onClick={handlePlay}>再生</button>
    <button onClick={handleStop}>停止</button>
    <button onClick={handleResume}>再開</button>
  </div>
```

これで、１つの TextField と３つのボタンで音声が再生・停止・再開できるようになります。

簡単ですね。

## 音声認識

音声認識については、音声合成の調査のついでに気になったので試してみました。

入力フォームなどでマイクから音声が入力できると楽でいいなと思ったのも一つの動機です。

### 作成したものの概要

マイクで音声入力ボタンを用意し、先ほどの音声合成で使用した TextField に音声で入力できるようにします。

### handler 準備

state は必要ありませんので、handler だけ用意します。

とりあえず Chrome で確認できるように webkitSpeechRecognition を使用します。

マイクで音声入力ボタンをクリックすると、マイクの使用許可が求められて、音声で入力した文字列を setText で設定して TextField の値を更新します。

```ts
const handleRecogniteStart = () => {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = "ja-JP";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    const result = event.results[0][0].transcript;
    setText(result);
  };

  recognition.start();
};
```

### JSX 部分

マイクで音声入力ボタン追加します。

```tsx
<button onClick={handleRecogniteStart}>マイクで音声入力</button>
```

これでマイクで音声入力ボタンが追加されて、クリックするとマイク受付中になり、認識が終了すると TextField に反映されます。

これも簡単ですね。

## 実装したもの

以下 CodeSandBox 上 でお試しできます。全体のコードもこちらからご確認ください。

<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 50%;"><iframe src="https://codesandbox.io/embed/texttospeech-speechrecognition-gpbmgt" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen></iframe></div>

## まとめ

音声合成も音声認識も Web Speech API を使用して簡単に実装できました。

音声合成に関しては、あまり自然な音声にならないですし、そもそもブラウザによって実装状況も変わってくるので、本番ではまだ使えない印象です。ですので音声合成に関しては Amazon Polly などのサービスを使う方が良さそうです。

音声認識に関しては、意外と精度も良い印象でした。社内で運用や開発のために使用するアプリケーションならそれなりに使えそうです。入力フォームなど繰り返し入力する必要があるところに良いかもしれません。

<br>
<br>

最後まで読んでいただきありがとうございます！！
この記事が良かったと思ったら SHARE していただけると泣いて喜びます 🤣
