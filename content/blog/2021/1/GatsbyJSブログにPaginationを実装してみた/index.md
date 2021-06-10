---
title: GatsbyJSブログにPaginationを実装してみた
date: "2021-01-11"
description: 今回はGatsbyJSブログに[gatsby-awesome-pagination]というパッケージを利用してPagenationを実装してみたので解説します！！
slug: 2021-01-11/gatsby-awesome-pagination
tags: [GatsbyJS, gatsby-starter-blog, gatsby-awesome-pagination, pagination, material-ui]
hero: ./hero.png
---

## はじめに 

おはようございます！こんにちは！こんばんは！<br>
麻雀と芝生大好きおじさんこと**のふのふ**([@rpf_nob](https://twitter.com/rpf_nob))です！！

記事数が増えてきたこともあって、そろそろページネーションがあったほうがいいかな思ったので実装してみました。

公式ページに追加方法も記載されていますが、今回は**gatsby-awesome-pagination**というパッケージで簡単にできたので、こちらで解説します！！


* 前提
* パッケージのインストール
* templatesフォルダ配下にpages/index.jsを移動
* gatsby-node.jsの編集
* pages/index.jsの編集
* components/pagenation.jsの作成
* まとめ

## 前提

このブログはGatsbyJSの[gatsby-starter-blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/)のテンプレートから作成しています。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/" data-iframely-url="//cdn.iframe.ly/qjUJkBu?iframe=card-small"></a></div></div>


## パッケージのインストール

今回は**gatsby-awesome-pagination**を使って実装します。

```
$npm install --save gatsby-awesome-pagination
```

<br>
こちらのパッケージで簡単にページネーションを実装できます。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://www.gatsbyjs.com/" data-iframely-url="//cdn.iframe.ly/57Mzcc6?iframe=card-small"></a></div></div>

## templatesフォルダ配下にpages/index.jsを移動

まず初めに**pages/index.js**をtemplatesフォルダ配下に移動します。

## gatsby-node.jsの編集

次にインストールした**gatsby-awesome-pagination**からpaginateをインポートします。
```js:title=gatsby-node.js
const { paginate } = require("gatsby-awesome-pagination");
```

そして以下のように、createPagesに追記します。  

templateに先ほど移動したpages/index.jsの編集を指定します。  

pathPrefixに設定する値で、1ページ目は **ROOTURL/**で2ページ目以降は **ROOTURL/page/2**になるように設定します。



```js{3,19-26}:title=gatsby-node.js
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`src/templates/index.js`);

  const result = await graphql(
    `
      {
        posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
          ・・・
      }
    `
  );
  if (result.errors) {
    throw result.errors;
  }
 
  const posts = result.data.posts.edges;

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 5,
    component: template,
    pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
  });
```

こちらでgatsby-node.jsの編集は完了です。

## pages/index.jsの編集

次にpages/index.jsを編集します。

まず始めにpageQueryでskipとlimitを取得できるようにします。

```js{2,8-9}:title=src/templates/index.js
export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      ・・・
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        ・・・
      }
    }
  }
`;
```

次にテンプレートのコンポーネントにpageContextがわたってくるのでpropsとして受け取り、次で作成するPagenationコンポーネントをBioコンポーネントの上に設置して、同じようにpageContextをpropsで渡してあげます。

```js{1,10}:title=src/templates/index.js
const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        ・・・
        <Pagenation pageContext={pageContext} />
        <Bio />
        <Adsense />
      </Layout>
    </div>
  );
};
```

## components/pagenation.jsの作成

最後にPagenationコンポーネントを作成します。  

今回はmaterial uiのページネーションコンポーネントを使います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://material-ui.com/components/pagination/" data-iframely-url="//cdn.iframe.ly/7LXFBH0"></a></div></div>


<br>

ソース全文
```js:title=src/components/pagenation.js
import React from "react";
import { navigate } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles(theme => ({
  root: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: "center",
  },
}));

const Pagenation = ({ pageContext }) => {
  const classes = useStyles();
  const { numberOfPages, humanPageNumber } = pageContext;

  const handleChange = (event, value) => {
    value === 1 ? navigate(`/`) : navigate(`/page/${value}`);
  };
  return (
    <div className={classes.root}>
      <Pagination
        size="small"
        defaultPage={humanPageNumber}
        count={numberOfPages}
        color="primary"
        onChange={handleChange}
      />
    </div>
  );
};
export default Pagenation;
```
pageContextからnumberOfPagesとhumanPageNumberを取り出します。

* numberOfPagesは総ページ数
* humanPageNumberは現在のページ番号

material uiのPaginationコンポーネントを設置して以下渡します。

* defaultPageにhumanPageNumberを渡す
* countにnumberOfPagesを渡す
* onChangeにhandleChangeを渡す（後述）

defaultPageを設定してあげないと、ページ遷移時に１ページに目に見た目だけ戻ってしまいます。

handleChangeはページ番号クリック時の処理を記載します。  

valueにページ番号が渡ってくるので、それに対応したページに遷移してあげます。  
ページ遷移にはgatsbyからnavigateをインポートしてこちらを使います。react-routerのhistory.pushみたいなものです。

これで次のようにページネーションがいい感じに実装できました！！

![img](img01.png)

## まとめ

今回は**gatsby-awesome-pagination**というパッケージでページネーション実装をしたので方法を解説しました！！

ページネーションがあるとちゃんとしたブログっぽくなりますね。  
もっと記事数を増やしてページネーションが意味あるものにしていきたいと思います！！  
有用な記事数も増やせるようにしていきたいですね・・・

他にもGatsbyJSのブログカスタマイズをいろいろやっているので、以下もあわせてご覧いただければと思います。

<div class="iframely-embed"><div class="iframely-responsive" style="height: 140px; padding-bottom: 0;"><a href="https://rpf-noblog.com/tags/gatsby-js/" data-iframely-url="//cdn.iframe.ly/5j7eIPT"></a></div></div>


<br>
<br>

最後まで見ていただきありがとうございます！！  
この記事が良かったと思ったらSHAREしていただけると泣いて喜びます🤣

