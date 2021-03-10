import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        <meta name="description"
                     content="davis programing portfolio"/>
                     <meta charSet="utf8"/>
                     
                <link rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css" 
             />
            <meta name="robots" content="noindex, nofollow"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>
            {`
            body{
                font-family: 'Shippori Mincho B1', serif;
            }
            `}
        </style>
      </Html>
    )
  }
}

export default MyDocument

