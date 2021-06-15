---
title: 【GatsbyJS】ブログに自分のSNSへのリンクを追加した
date: "2020-05-15"
description: 今回はGatsbyJSブログに自分のSNSへのリンクを追加します。さまざまな人にブログやツイッターを見てもらいたいです！
slug: 2020-05-15/gatsby-sns-link
tags: [GatsbyJS, gatsby-starter-blog, react-fontawesome]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きおじさんこと**のふのふ**(@rpf_nob)です！！

今回はGatsbyJSブログに自分のSNSへのリンクを追加します。<br>
さまざまな人にブログやツイッターを見てもらいたいです！

TwitterとGitHubとQiitaへのリンクアイコンを作りたいと思います。

## 前提

このブログはGatsbyJSの[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)のテンプレートから作成しています。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" data-iframely-url="//cdn.iframe.ly/qjUJkBu?iframe=card-small"></a></div></div>

## パッケージのインストール

以下コマンドで必要なパッケージをインストールします。<br>

TwitterとGitHubは[fortawesome]のアイコンを使用して、Qiitaに関してはいい感じに画像を拾ってきて作成します。

```
npm install --save @fortawesome/react-fontawesome
npm install --save @fortawesome/free-brands-svg-icons
```

## Bioコンポーネントにアイコンを設置する

[src/components/bio.js]に追記していきます。


まずインポートする
```js:title=src/components/bio.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import image from "../images/qiita.png";
```

自己紹介文の後ろにアイコンを設置
```js:title=src/components/bio.js
class Bio extends React.Component {
  render() {
    return (
      //--省略--
      <div style={{ position: "relative", marginTop: "10px", }}　>
        <div style={{ position: "absolute", width: "100%", top: "0", left: "0", }} >
          <a style={{ boxShadow: "none", }} href="https://twitter.com/rpf_nob">
            <FontAwesomeIcon
              style={{ height: "1.5em", width: "1.5em", marginRight: "5", }}
              color="#3eaded"
              icon={faTwitter}
            />
          </a>
          <a style={{ boxShadow: "none",}} href="https://github.com/N-Iwata" >
            <FontAwesomeIcon
              style={{ height: "1.5em", width: "1.5em", marginRight: "5", }}
              color="#333"
              icon={faGithub}
            />
          </a>
        </div>
        <div style={{ position: "absolute", width: "32px", top: "-4px", left: "56px", }} >
          <a style={{ boxShadow: "none", }} href="https://qiita.com/rpf-nob" >
            <img
              src={image}
              alt="Qiita"
              style={{ height: "2em", width: "2em", }}
            />
          </a>
        </div>
      </div>
    //--省略--
    );
  }
}
```

これでSNSリンクアイコンが実装できました！！

![img](img1.png)

## まとめ

今回はGatsbyJSブログに自分のSNSへのリンクを追加しました。<br>
さまざまな人にブログやツイッターを見てもらいたいので、情報発信できるように頑張っていきます！！

他にもGatsbyJSのブログカスタマイズをいろいろやっているので、以下もあわせてご覧いただければと思います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/tags/gatsby-js/" data-iframely-url="//cdn.iframe.ly/5j7eIPT"></a></div></div>


<br>
<br>

最後まで見ていただきありがとうございます！！