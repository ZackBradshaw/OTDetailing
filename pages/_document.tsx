import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </Head>
      <body className="bg-white text-black dark:bg-black dark:text-white ">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
