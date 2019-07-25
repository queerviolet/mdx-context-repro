import React from 'react'
// import {MDXProvider} from '@mdx-js/tag'
import {Provider, MDXProvider} from 'unified-ui'

export default ({Component, pageProps}) => (
  <MDXProvider components={{ p() { return 'Hello?' }}}>
    <Component {...pageProps} />
  </MDXProvider>
)
