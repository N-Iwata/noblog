import React, { useState } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
//import image from "../images/about.png";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(0);

  const handleChange = event => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "subject":
        setSubject(event.target.value);
        break;
      case "message":
        setMessage(event.target.value);
        break;
      default:
        console.log("key not found");
    }
  };

  const handleSubmit = () => {
    setLoading(1);
  };

  const canSubmit = () => {
    if (name === "") return true;
    if (email === "") return true;
    if (subject === "") return true;
    if (message === "") return true;
    if (loading === 1) return true;

    return false;
  };

  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="Contact" />
        <h1>Contact</h1>
        <p>
          各種お問い合わせはこちらのフォームよりお願いいたします。
          <br></br>
          お名前・メールアドレス・件名・問い合わせ内容を記載して送信ボタンをクリックしてください。
        </p>
        <div className="contact">
          <form name="contact" method="POST" data-netlify="true">
            <div className="contact__area">
              <TextField
                id="outlined-basic"
                className="contact__field"
                name="name"
                label="お名前"
                type="text"
                variant="outlined"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="contact__area">
              <TextField
                id="outlined-basic"
                className="contact__field"
                name="email"
                label="メールアドレス"
                type="email"
                variant="outlined"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="contact__area">
              <TextField
                id="outlined-basic"
                className="contact__field"
                name="subject"
                label="件名"
                type="text"
                variant="outlined"
                value={subject}
                onChange={handleChange}
              />
            </div>
            <div className="contact__area">
              <TextField
                id="outlined-multiline-static"
                className="contact__field"
                name="message"
                label="問い合わせ内容"
                multiline
                rows={4}
                variant="outlined"
                value={message}
                onChange={handleChange}
              />
            </div>
            <div className="contact__btn">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={canSubmit()}
                onClick={() => handleSubmit()}
              >
                送信
              </Button>
            </div>
          </form>
        </div>
        <Link to="/">← Home</Link>
      </Layout>
    </div>
  );
};

export default Contact;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
  }
`;
