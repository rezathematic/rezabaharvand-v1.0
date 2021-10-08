import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-PRRPBK6QV7`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PRRPBK6QV7');
          `,
            }}
          />
          <meta
            name="keywords"
            content="Reza Baharvand, Reza, Baharvand, web developer, Reactjs, Nextjs, Nodejs, MongoDB, PostgreSQL, Expressjs, Javascript, HTML, CSS, Sass"
          />
          <meta name="robots" content="index, follow" />
          <meta name="language" content="English" />
          <meta name="author" content="Reza Baharvand" />
          <meta name="revisit-after" content="3 days" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
