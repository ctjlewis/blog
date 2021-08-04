import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GoogleFont } from '../components/GoogleFont'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <GoogleFont family="Averia Serif Libre" />
          <GoogleFont family="EB Garamond" />
          <GoogleFont family="Fira Sans" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
