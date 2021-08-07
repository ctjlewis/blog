import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GoogleFont } from '../components/GoogleFont'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <GoogleFont family="Averia Serif Libre" weights={[700]} />
          <GoogleFont family="Averia Sans Libre" weights={[300]} />
          <GoogleFont family="EB Garamond" weights={[400]} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
