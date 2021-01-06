import Document, { Html, Head, Main, NextScript,DocumentContext } from 'next/document'

function WyDocument() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <p>000000</p>
        <NextScript />
      </body>
    </Html>
  )
}
WyDocument.getInitialProps =async (ctx:DocumentContext) => {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}

WyDocument.renderDocument=Document.renderDocument

export default WyDocument

