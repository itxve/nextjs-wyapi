import Document, { Html, Head, Main, NextScript,DocumentContext } from 'next/document'

function WyDocument() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
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

