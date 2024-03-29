---
title: 【24時間分割意識生活】200日継続したので振り返る&2021年の抱負
date: "2021-01-02"
description: 今回は24時間分割意識生活を開始して200日継続したのでやったことや感じたことの振り返りと2021年の抱負を書いていきたいと思います！！
slug: 2021-01-02/24hour-split-life-200day
tags: [24時間分割意識生活, 今年の抱負]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

今回は**24 時間分割意識生活**を開始して 200 日継続したのでやったことや感じたことの振り返りと 2021 年の抱負を書いていきたいと思います！！

24 時間分割意識生活の記事はこちら ↓

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/tags/24-%25E6%2599%2582%25E9%2596%2593%25E5%2588%2586%25E5%2589%25B2%25E6%2584%258F%25E8%25AD%2598%25E7%2594%259F%25E6%25B4%25BB/" data-iframely-url="//cdn.iframe.ly/aoWazWg"></a></div></div>

今回は以下 4 つで書いていきます！！

- 24 時間分割意識生活のおさらい
- 24 時間分割意識生活中（101 日～ 200 日まで）にやったこと
- 24 時間分割意識生活中（101 日～ 200 日まで）に感じたこと
- 2021 年の抱負

## 24 時間分割意識生活のおさらい

2014 年 5 月に開催された TEDxSaku で長岡秀貴さんによる「時間という財産」という発表の中で 24 時間分割意識生活の話をされています。

`youtube:https://www.youtube.com/embed/EzXvih454dM`

何回見てもこの動画には心を動かされますね。ほんと素敵なプレゼンだと思います。
皆さんも一度でいいから見たほうがいいと絶対に思います！！

詳細はこちら ↓

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-06-11/24hour-split-life-start/" data-iframely-url="//cdn.iframe.ly/BULtMcj?iframe=card-small"></a></div></div>

## 24 時間分割意識生活中（101 日～ 200 日まで）にやったこと

個人開発・インプット・アウトプットの 3 点で書いていきます。

### 個人開発関連

11 月くらいから個人で Web アプリをリリースする目標で開発を始めました。
現在作っているもののタイトル・機能・利用技術を簡単にまとめてみます。

#### タイトル

**麻雀成績統計管理ツール**
mahjong-statistics-manager(仮)

#### 機能

基本的には入力・閲覧・分析・共有ができればいいと思っています。
ルールもプロ団体仕様や巷の雀荘でありそうなルールを網羅する予定です。
細かいデータを分析してみたいという会社の後輩の要望から成績入力は 1 局ごと入力できるようにするのを前提にしています。

- サインイン（メール・Google・Twitter）
- サインアウト
- 成績入力（1 局ごと）
- 成績閲覧（1 局ごと・半荘ごと・1 日ごと）
- 成績分析（ルールごと・対戦相手ごと）
  → ポイント推移
  → 順位
  → 和了
  → 放銃
  → 立直
  → 副露
- ランキング
  → 通算得点
  → 平均順位
  → トップ率
  → 連対率
  → 順位成績
  → 通算チップ数
  → 総得点
  → 総失点
  → 平均点
  → 平均得点
  → 平均失点
  →MAX 得点
  → 飛ばし回数
  → 箱回数
- 成績共有
  → 対局閲覧用ページ
  → ログイン不要
  →SNS シェア

#### プラットフォーム

基本的には Web（ブラウザ）のみで動くサービスを想定。
ユースケースとしては以下の通り。

- ユースケース
  → 入力時はスマホメイン
  → 閲覧時は PC メイン

#### 利用技術

**フロントエンド**

フロントは基本慣れている技術ですが、PWA に関しては知識 0 なので勉強しながらやります。

- React × TypeScript
- PWA
- 状態管理
  →ReactHooks × Redux
- styling
  →Material UI
- charts
  →chart.js
- 実行環境
  →Firebase Hosting

**バックエンド**

今回は Firebase にお任せすることにしました。

- Firebase
  →Firestore
  →Authentication
  →Functions
  →Storage

### インプット関連

多くなりすぎるので、良かったものだけ記載します。

#### Web 系エンジニアになろう

こちらは Web 系エンジニアになりたい人がいたら、「まずこの本読んだらいいよ」と言える書籍だと思います。
自分も Web 系自社開発企業への転職を考えてしまうほど、心を揺るがされました。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.amazon.co.jp/dp/4408339334" data-iframely-url="//cdn.iframe.ly/T3INcld?iframe=card-small"></a></div></div>

<br>

#### 実践 Firestore

個人開発で Firebase を使用するのでこちらで勉強しました。
セキュリティルールは以下の 3 要素を網羅する必要があることを学びました。

- ユーザーに対する認証と認可
- ドキュメントのスキーマ検証
- データのバリデーション

Firebase は世間では簡単と認識されているような気がしますけど、バックエンドの知識もかなり必要だと思うので全然簡単ではないですね。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.amazon.co.jp/dp/B0851BGDQG" data-iframely-url="//cdn.iframe.ly/bnbLCto?iframe=card-small"></a></div></div>

<br>

#### Learn or Die

こちらは読書感想文をブログに書いたので以下リンクから是非見てください。
自分のことを「泳ぐのをやめると死んでしまうマグロ」と自称してみたいですね。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.amazon.co.jp/dp/B085SZLB2Q" data-iframely-url="//cdn.iframe.ly/EiNdQcH?iframe=card-small"></a></div></div>

<br>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-11-08/reading-learn-or-die/" data-iframely-url="//cdn.iframe.ly/qpjUQwG?iframe=card-small"></a></div>

<br>
<br>

#### モダン JavaScipt の基礎から始める挫折しないための React 入門

React と TypeScript を用いて仕事を既にしていますが、素の JavaScript でアプリを作ることなく React を始めてしまったので、素の JavaScript でのコードの書き方と React でのコードの書き方の比較ができて勉強になりましたし、改めて React が書きやすさや保守性など様々な面で優れているか再認識できました。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/modern_javascipt_react_beginner/" data-iframely-url="//cdn.iframe.ly/oelojqC?iframe=card-small"></a></div></div>

<br>

#### React ソフトウェアテスト(Hooks+ReduxToolKit 時代のモダンテスト手法)

React 公式で推奨されている Jest と React Testing Library を用いたユニットテストの方法を学べます。Hooks と ReduxToolKit を用いたアプリケーションのテストの方法ですが、ReduxToolKit を使っていない Redux アプリでも同じようにテストできるので、おススメかと思います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/reacthooksreduxtoolkit/" data-iframely-url="//cdn.iframe.ly/zaC20XE?iframe=card-small"></a></div></div>

<br>

#### 【はむ式】フロントエンドエンジニアのための GraphQL with React 入門

こちらはまだ途中ですが、GraphQL もしっかり学びたいと思っています。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/graphql-with-react/" data-iframely-url="//cdn.iframe.ly/xPLVvTM?iframe=card-small"></a></div></div>

<br>

### アウトプット関連

ブログ・Zenn 等に以下執筆しました。最近は個人開発をメインでしていてあまりアウトプットできていないのでもっとブログ・Zenn・Qiita でアウトプットしないとなと思っています。

うーん、やっぱインプットとアウトプットの比率がまだインプットよりだな・・・

- use-http を使ってみた記事
- Learn or Die の読書感想文

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://zenn.dev/rpf_nob/articles/api-call-use-http" data-iframely-url="//cdn.iframe.ly/J4tqooI?iframe=card-small"></a></div></div>

<br>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/2020-11-08/reading-learn-or-die/" data-iframely-url="//cdn.iframe.ly/qpjUQwG?iframe=card-small"></a></div>

## 24 時間分割意識生活中（101 日～ 200 日まで）に感じたこと

### 冬の早起き辛い

冬に差し掛かって辛かったのがやはり布団から出ることでした。
布団の中の暖かさと暖房がまだついていない部屋を比較すると布団から出れないですよね・・・。

暖房をタイマーで 5 時にセットすることで対策しましたが、6 時まで布団から出られないこともしばしばあったので、もっと対策しないといけないかなと思っています。

### 残業しないように頑張る

毎回書いてますが、明確にスケジュールを立てると残業しないように、考えて効率的に仕事するようになります。

何回か残業していますが、本当にどうしようもない場合のみになっていますし、この生活を始める前よりは格段に減っていると思います。

生産性も高くなるし、自分のやりたいことをやる時間も作れるし、本当にいいことずくめです。

## 2021 年の抱負

最後に今年やりたいことを羅列していきます。

### 個人開発アプリをリリースする

現在開発中のものは**1 月中**には会社の後輩に見せられるレベルでリリースする。

また、やっぱり個人開発で一発当てたいとは思っているので、常にアイデアをストックしておく癖も付けたい。会社レベルでは充分な収益化が難しいものでも、個人開発レベルでは充分なレベルの収益化ができるものは結構ありそうですしね。まさに数打ちゃ当たる作戦を実行したい。

### ブログ orZennorQiita を週 2・3 本は書く

質も重要ですけどまず量を増やして**記事を書くことに慣れる・当たり前の習慣**にしたい。

また、収益も出したいので PV を増やすためにどうするか考えたり、アフィリエイトだったり、いろいろ研究します。

### web 開発技術面

**Next.js、AWS**を中心に学んでいきたいですが、おそらく新しいものや人気になったものを臨機応変に勉強していくと思います。

### 英語を勉強する

**エンジニアには英語**がやはり必須なので、DMM 英会話の受講とか考えています。公式ドキュメントのような一次情報を英語で読めたり、Udemy とか YouTube で英語のめっちゃ良さそうな動画がたくさんあるので絶対に役に立つと思っています。

### 転職を検討する

Web 系自社開発企業に憧れを持ってはいるものの、家族や住宅ローンのことを考えるとリスクもあるのでじっくり考える。動き出してみて良さそうな話があればというスタンスでもいいかなと思っている。（甘いかな・・・？）

### その他

つみたて NISA を始める予定。
企業型の確定拠出年金やってますけど、それ以外の積み立ての仕組みとしてつみたて NISA を利用したい。

娘の教育費や家の修繕費などの積み立て必須のもの以外の積み立てが少ないので、もっと支出を見直していって積み立てできればと思う。

## まとめ

今回は 24 時間分割意識生活を開始して 200 日継続した振り返りと 2021 年の抱負を書きました。

**個人開発とブログなどのアウトプット**をメインにしっかりやっていって、会社に依存しすぎないような人間になっていきたいと考えています。

## 最後に

みなさんも**24 時間分割意識生活**を始めてみませんか？？

朝活をするだけでもいいと思うので、まずは朝活だけでもどうでしょうか？？？

<br>
<br>

最後まで見ていただきありがとうございました！！！！！
この記事が良かったと思ったら SHARE していただけると泣いて喜びます 🤣
