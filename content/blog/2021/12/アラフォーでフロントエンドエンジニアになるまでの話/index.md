---
title: 【再現性1人】アラフォーのパチスロ開発エンジニアがフロントエンドエンジニアになるまでの話
date: "2021-12-13"
updated: "2021-12-13"
description: 今回はアラフォーのパチスロ開発エンジニアがフロントエンドエンジニアになるまでの話を書いてみたいと思います。
slug: 2021-12-13/becoming-frontend-engineer
tags: [フロントエンドエンジニア]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

今回はアラフォーのパチスロ開発エンジニアがフロントエンドエンジニアになるまでの話を書いてみたいと思います。

再現性は私 1 人だけなのでそれほど信憑性はありませんが、参考になる部分は大いにあるかなと思いますので、読んでみていただけると幸いです。特に現在他の分野のエンジニアをしている方や業務未経験の方が Web 開発方面（特にフロントエンド）にキャリアチェンジしたい方には参考になるかもしれません。

[[info]]
| この記事は雑食系エンジニアサロン Advent Calendar 2021 の 13 日目の記事です。

https://adventar.org/calendars/6582

## 経歴とスペック

私の経歴とスペックを簡単に紹介しておきます。

経歴については以下のような感じです。あんまり誇れるキャリアではなく普通以下のエンジニアだと思ってください。

- 30 代後半で妻と娘の 3 人家族
- 愛知県名古屋市出身で現在は埼玉県在住
- 地方国立大理系学部卒（6 年かけて・・・）
- 25 歳の時に新卒扱いでスタートアップのパチスロ開発会社（主に受託で自社開発を目指している会社）入社（約 4 年間勤務）
- 中途で遊技機大手メーカーに転職（約 9 年間勤務）
- 基本的にパチスロのソフト開発のエンジニア（スペックデザイナーとも呼ばれる出玉システムを考えたり実装してシミュレートしたりする仕事）として勤務
- 2019 年から新設部署で機械学習や web 開発中心の業務に社内でジョブチェンジ
- 最後の 1 年は React と Nodejs での SPA+API という方式の社内向け web アプリケーションを開発・運用
- 転職ドラフトを用いて転職
- 現在はフロントエンドに React(Next.js) と TypeScript を用いたアプリケーションを開発（ロボットを動かしたりする）しているスタートアップでフロントエンドエンジニアとして勤務（バックエンドは基本的に Golang、一部 Rails、インフラは基本 AWS です。）

スペックについては基本的に 2019 年以前はパチスロ開発で使用する**C、C++(VC++)、VBA**がメインというか他の言語をほぼほぼ触ったことがないレベルでした。

2019 年に機械学習周りの勉強として python、2020 年以降にようやく web 開発（特にフロントエンド周辺の技術）を触り始めたような感じです。

この記事ではフロントエンドエンジニアになるまでに、私自身がどういった学習をして、どういうふうに考え、業務に結びつけて、実際にフロントエンドエンジニアとして転職したかを書いていきます。あまり同じような境遇の人がいないかもしれませんが、ある程度参考になる部分もあると思います。

## 新設部署では全員が初めてのことをやる

前職の会社の本業はパチンコ・パチスロ開発（以降遊技機開発）です。

新設部署は今まで使っていた技術ではなく、新しいこと（当時は AI・ブロックチェーン・Web 開発など）を学んで、本業である遊技機開発の効率化や新規事業の創出等を目的とした部署でした。ですので会社での業務もある程度新しいことを学びながら行えるような環境でした。

希望して異動した理由もこういう環境を求めてのことです。このまま遊技機開発だけしかできない状態だと、あと数年で人生詰む可能性もあるなと考えていました。このあたりの市場価値についての話は健太さんやまこなり社長の YouTube 動画をかなり参考にしてました。

最初は機械学習（ディープラーニング）の知識を得ることで会社に大きく貢献できるのではないかという部署の流れもあったので、python を学び、機械学習（ディープラーニング）を学び、希望者で G 検定を取得するなど AI 技術に特化して勉強をしてました。しかし実際にプロダクトとして提供するには Web に関する知識が必須ではないかと考えたので、個人としては Web アプリケーションを作ることに特化するという方向性にシフトしました。

この辺りから本格的に Web に関する勉強を始めたと思います。

## 新しいプロジェクトが始まる

そういう状況の中で常務直々の依頼で、あるデータ分析を行うためのデータ収集のためのアプリケーションを作ってくれという仕事が舞い込みました。そのメンバーに選ばれたのですが、他のメンバー（部署のマネージャーも含む）がそれほどやる気がない感じだったので自分が率先してやることにしました。

<br>

その時に自分が考えて決めた技術選定としては以下の通りです。

- フロントエンドは React(JavaScript) で SPA、
- バックエンドは Node(express)で API、
- データベースは MySQL
- MUI・FullCalendar・Chart.js あたりもフロントエンドで使用
- AWS は会社として使用不可だったので物理マシンの CentOS 入れてサーバーにした

この時自分が率先して考えていなければ、メンバーが慣れている VC++での Windows アプリケーションを作ることになっていた可能性が高いです。そうなっていたら今おそらく転職もしていないし、フロントエンドエンジニアにもなっていないと思います。

[[info]]
| ちなみに技術選定したタイミングでは以下 3 つを Udemy で受講しただけの Web に関する知識量です。「Web を支える技術」の書籍を読んでいましたがこの時点ではほとんど理解できずの状態でした。React もさわったことなかったですし、データベースに関する知識も MongoDB だけです（SQL の前に NoSQL を触るというレアものです）。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/html-css-js/" data-iframely-url="//cdn.iframe.ly/iHLWYOR?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/front-dev-tutorial/" data-iframely-url="//cdn.iframe.ly/P4eepyz?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/web-application-with-nodejs-express/" data-iframely-url="//cdn.iframe.ly/NWDsTdD?card=small"></a></div></div>

そんな状態でなぜ React を選び、Node で API を作るような形にしたのかというと、

- React は当時フロントエンドでは一番世界的に使われていたので、勉強するなら React が一番コスパよく市場価値も上がるのではないか？
- メンバーが Web の知識が少ないので API の中身だけ実装してもらうのが学習コストも低く抑えられるのではないか？
- 個人的にバックエンドの知識が Udemy でやった Node の知識しかなかった

といった理由だったと思います。

この辺りですでに転職することも見据えていました。遊技機業界以外での市場価値はほぼ０だったと思うので、どうしたら市場価値が上がるのかを一番考えていた時期かなと思います。

それにしても Web の勉強を始めて 1・2 週間くらいで実は BFF の考え方のようなことを実践していましたね。（奇跡）

<br>

こういった感じで新しいプロジェクトの**リーダー的存在に自ら率先**してなり、先行して勉強していた技術を用いて技術選定を行い、**データベース設計や API 設計**などの設計部分にも携わり、実際に**フロントエンドとバックエンドのコーディング**もしたり、メンバーへのタスクのチケットを発行し管理したり、常務への説明プレゼンしたりといろんな業務を 1 プロジェクトで経験できました。

この辺り経験が今に生きているのではないかと思います。

[[info]]
| ちなみにパチスロのソフトウェア開発は新しい技術をほとんど必要としないので、一回仕事を覚えてしまえば技術に対するプレッシャーがなかったので、この仕事が技術的に今までで一番プレッシャーを感じた仕事でした。

こんな感じで自分が学びたい技術（市場価値が上げられる技術）を自分の業務に強引に持っていくことができたのは本当によかったと思います。

## プロジェクトやりながら勉強したもの

### React のお勉強

React の勉強ははむさんの「フロントエンドエンジニアのための React・Redux アプリケーション開発入門」だけやってそれを元にプロジェクトのコードを書き始めました。API を axios で叩き CRUD 操作する内容が含まれていたので、これだけでなんとかなるイメージでした。（たしかこの時点では公式チュートリアルはやっていないです。）

こちらの講座は基本的な React でのマークアップや CRUD 操作、Redux の基本的な考え方が学べるのでいい講座だと思います。今だと class コンポーネントを使っていたり MUI も v1 を使っていたりと古くなった講座ですが、今の会社もプロダクトコードに class コンポーネントが残っていたりするので React を使うフロントエンドエンジニアとしては知っておかなければいけないので良かったかなと思います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/react-application-development/" data-iframely-url="//cdn.iframe.ly/LYgGGf8?card=small"></a></div></div>

<br>

テストに関してはこちらの講座でなんとなくやりました。あと Cypress 使った E2E テストなどもやったりしました。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/reacthooksreduxtoolkit/" data-iframely-url="//cdn.iframe.ly/zaC20XE?card=small"></a></div></div>

### その他

他にはこの辺りの勉強をプロジェクトをやりつつやっていたと思います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/standard-sql-for-beginners/" data-iframely-url="//cdn.iframe.ly/EOtD4o3?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/unscared_linux/" data-iframely-url="//cdn.iframe.ly/ZyrkHqQ?card=small"></a></div></div>

## あとはひたすら Udemy や YouTube や書籍等で必要な知識を補う

あとはひたすらフロントエンドエンジニアとして転職するために必要な知識を補うような勉強をしていました。こちらのブログも React の知識を得るために Gatsby（starter ですが）で作ったりしています。

### フロントエンド全般

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.amazon.co.jp/-/en/%E5%AE%89%E9%81%94%E7%A8%9C-ebook/dp/B08SQQWPDW" data-iframely-url="//cdn.iframe.ly/35mt8C4?card=small"></a></div></div>

### React

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/modern_javascipt_react_beginner/" data-iframely-url="//cdn.iframe.ly/oelojqC?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/react_stepup/" data-iframely-url="//cdn.iframe.ly/xW4ppNM?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/react-hooks-101/" data-iframely-url="//cdn.iframe.ly/sIsgNce?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/firebase-react-hookstypescriptweb/" data-iframely-url="//cdn.iframe.ly/ZQzeELT?card=small"></a></div></div>

https://oukayuka.booth.pm/items/2368045

https://oukayuka.booth.pm/items/2368019

https://oukayuka.booth.pm/items/2367992

https://youtu.be/FBMA34gUsgw

https://youtu.be/8fNgXnVTULU

### Next.js

https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/hasura-nextjs-hasura-apollo-client-graphql-web/" data-iframely-url="//cdn.iframe.ly/Dzh124D?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/hasura-nextjs-firebase-hasuragraphql-web/" data-iframely-url="//cdn.iframe.ly/Di3oIHw?card=small"></a></div></div>

### TypeScript

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/ts-for-js-developers/" data-iframely-url="//cdn.iframe.ly/kqfXcrl?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/typescript-complete/" data-iframely-url="//cdn.iframe.ly/xXbIX29?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.amazon.co.jp/-/en/%E5%90%89%E4%BA%95-%E5%81%A5%E6%96%87-ebook/dp/B07T477V6G" data-iframely-url="//cdn.iframe.ly/usXX41D?card=small"></a></div></div>

### Git / GitHub

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/intro_git/" data-iframely-url="//cdn.iframe.ly/CPcR6WY?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/unscared_git/" data-iframely-url="//cdn.iframe.ly/EN86gnW?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/github-frontend-react-nextjs/" data-iframely-url="//cdn.iframe.ly/ESqSnPM?card=small"></a></div></div>

### AWS

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/aws-and-infra/" data-iframely-url="//cdn.iframe.ly/IqgsVE0?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.udemy.com/course/webapplication-on-aws/" data-iframely-url="//cdn.iframe.ly/p9rIJSY?card=small"></a></div></div>

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.amazon.co.jp/-/en/%E5%A4%A7%E6%BE%A4-%E6%96%87%E5%AD%9D/dp/4296105442" data-iframely-url="//cdn.iframe.ly/nrcTjAc?card=small"></a></div></div>

### Docker

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.amazon.co.jp/-/en/%E5%B0%8F%E7%AC%A0%E5%8E%9F-%E7%A8%AE%E9%AB%98-ebook/dp/B08T961HKP" data-iframely-url="//cdn.iframe.ly/64i1Kd4?card=small"></a></div></div>

https://youtu.be/lZD1MIHwMBY

## 転職活動について

ポートフォリオはありません。個人開発していたものは先に転職が決まったので途中で終了（そのうち作り直すかもしれませんが）しました。それでも実際に企業のプロジェクトとして仕事していた経験は大きかったと思います。

転職ドラフトのみでほぼ活動を行いましたが、やはり年齢とフロントエンドエンジニアとしての経験値が少ないことでそれほど多くの指名はいただけませんでしたが、プロジェクトで使用したものと近い技術スタックの企業に指名を受け、現在は働いています。

転職ドラフト体験談はこちら

https://rpf-noblog.com/2021-06-07/experiences-job-draft

Findy も使いましたが、いいねでのマッチングではほとんど意味がないので、結構無駄な時間を使ってしまいました。やはり転職ドラフトのように指名を受けてからのほうがスムーズに採用活動が進むので、個人的には転職ドラフトが一番いいのではないかと思います。

## まとめ

長々と書いてきましたが、まとめです。

結局は、新設部署がたまたまできて、そこにたまたま異動ができて、たまたま新しいことにチャレンジできる状況になり、うまいことやりたい技術をプロジェクトにできたという運の要素が大きかったと思いますが、その前に新しいことを自ら学んでおかなければこういったチャンスも掴めていないと思います。世間でもよく言われているとおり実務経験があるのはほんとに大事だと思うので、こういった経験が積めるチャンスを逃さないようにするのが鉄則なんだと思います。

あと、印象ですがフロントエンドエンジニアになりたいなら React（Next.js）×TypeScript ができれば一番確率が高いと思います。React をやると決めた時にほんとに良い選択をしたと思っています。

<br>

最後に、フロントエンドエンジニアとしてはまだまだ駆け出しですし、今後はバックエンドやインフラなど全体をもっとみれるようにもなっていく必要がありますので、これからも日々勉強していきたいと思います。

<br>
<br>

最後まで読んでいただきありがとうございます！！
この記事が良かったと思ったら SHARE していただけると泣いて喜びます 🤣
