import React from 'react'
import {MDXProvider} from '@mdx-js/tag'
import {Provider} from 'unified-ui'

export default ({Component, pageProps}) => (
  <MDXProvider components={{ p() { return 'Hello?' }}}>
    <Provider>
      <Component {...pageProps} />
    </Provider>
  </MDXProvider>
)
