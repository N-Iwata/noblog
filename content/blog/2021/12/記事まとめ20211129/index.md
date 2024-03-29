---
title: 【感想】今週読んで印象に残った記事（20211129週）
date: "2021-12-05"
updated: "2021-12-05"
description: 2021/11/29週の今週読んで印象に残った記事のまとめと所感です。
slug: 2021-12-05/impressive-article
tags: [今週読んで印象に残った記事]
hero: ./hero.png
---

## はじめに

おはようございます！こんにちは！こんばんは！<br>
**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))と申します！！都内のスタートアップでフロントエンドエンジニアとして働いています。

2021/11/29 週の今週読んで印象に残った記事のまとめと所感です。

## 記事と所感

### 知ってると得をする React コンポーネントのイケてる書き方

https://qiita.com/102Design/items/b1dcebbbc768c65befc9

> ショートハンドを覚えるのも大事ですが、Props が多すぎる場合にはそもそ Component の分割を検討した方が良いでしょう。

これは本当に大事だと思う。職場のプロダクトが膨大な Props になっているのでいつかはリファクタリングが必須になってくるなと思っている。

Component のタグを Props で渡すようにできる、この書き方は初見でした。className を props で渡すのと同時にやれば使い勝手が良さそうに思います。

```ts
type Props = {
  Component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

export const Heading: FCX<Props> = ({ children, Component = "h1" }) => {
  return <Component className={classnames(style.heading, className)}>{children}</Component>;
};
```

### TypeScript の型定義で麻雀の役判定をする

https://blog.manaten.net/entry/2021/12/03/030217

麻雀の役判定とか点数判定とか相当大変だと思っていたのでやっぱすごいなと思いました。平和は最後リャンメンじゃないとつかないので実際はもっと大変そうですね。

CPU の打牌選択とか鳴きとかの判断する仕組みを作るのはもっと難しいと思う。

### ［速報］AWS、ローコードで Web のフロントエンドを開発できる「AWS Amplify Studio」発表

https://www.publickey1.jp/blog/21/awswebaws_amplify_studioaws_reinvent_2021.html

フロントエンドエンジニア不要論でちゃうのかと思ってしまいました。

結局は中途半端な状態が一番まずいのでフロントエンジニアだったらもっとスペシャリストになるか、バックエンド・クラウド・インフラなど全般なスキルを身につけておかないと危険だと感じました。エンジニアは学び続けられることも大事ですね。

### 同じ組織で働く人は常に転職活動をしていてほしい

https://d.potato4d.me/entry/20211201-always-job-change/

> そして重要なのはこの「市場に自身が認められている」状態をキープすることです。市場に自身が認められており、「組織が自分を選んでいるのではなく、自分が組織を選んでいる」状態を常に維持し続けることは非常に重要です。

35 歳くらいまでこの考え方を全くしていなかったのが後悔しているところですね。パチンコ業界という右肩下がりの業界でパチスロ開発のエンジニアしていても、いつかは詰むだろうなと考えたのが娘が産まれてからだったので、機械学習の知識の勉強だったり、web 開発の方向にスキルチェンジしていったのはだいぶ正解だったと思う。

まだ転職して半年経ってないので転職するつもりはないですが、転職ドラフトのレジュメだけ更新して参加だけしておこうかなと思いました。

### エンジニアのための「ミーティング・メモ」入門 - クラウドサービスと VSCode を添えて

https://shinyorke.hatenablog.com/entry/meeting-memo

あんまり議事録をとる機会が多くないですが、slack の DM でメモを取って VSCode でまとめるって感じは意外と自分もやっているパターンでした。ただ、テンプレート的なものはないので参考にしたいと思いました。

### 面接で聞かれた技術的質問

https://zenn.dev/hidebon0630/articles/75022374e28cdf

web に関する基本的な内容ですが、わかりやすくまとまっていて復習になりました。セキュリティ周りあまり深い知識がないので勉強必要だと感じました。

### Web フロントエンドのリプレースを支えるテストの考え方

https://speakerdeck.com/berlysia/jsconf-jp-2021

現職では社内で使用するアプリケーションのリプレースがちょうど終わりかけの頃に入社したので、しばらくはなさそうな気がしますが、今後やることがあったらものすごく参考になるのでこちらをしっかりブックマークしておきたいと思います。

### GraphQL と Prisma から考える次の N 年を見据えた技術選定

https://speakerdeck.com/qsona/architecture-decision-for-the-next-n-years-at-studysapuri

職場ではバックエンドに Golang を基本的に使っているので、Node をバックエンドを使う機会がないので Prisma を勉強したいと思っていても優先度が低くなってしまう。

Schema を記述することでコードを生成するっていう流れ（スキーマ駆動開発）は個人的に好きなのでいつか触りたいと思う。

前職でバックエンドに Node 使っていたし、フロントエンドエンジニアだとバックエンドも TypeScript 使いたくなるので個人開発でやるならこれを選択すると思う。

### Next.js でリアーキテクトした話

https://speakerdeck.com/takefumiyoshii/story-of-re-architect-with-nextjs

やっぱりスキーマ駆動開発は開発しやすい手法なんだと感じた。フロントエンドエンジニアが OpenAPI を書く通常の開発フローとは逆ですが、こうなるとフロントエンドエンジニアが開発をリードできるのでありだと思いました。前職で最後にやってたプロジェクトはこのイメージでやれていた気がします。

## まとめ

2021/11/29 週の今週読んで印象に残った記事のまとめと所感でした。

気になる記事があったら読んでみてください〜😀

↓↓↓ 前回はこちら ↓↓↓

https://rpf-noblog.com/2021-11-28/impressive-article/

<br>
<br>

最後まで読んでいただきありがとうございます！！
この記事が良かったと思ったら SHARE していただけると泣いて喜びます 🤣
