import React, { memo } from 'react'
import { MDXProvider } from '@mdx-js/react'

import MDXComponentsMap from '../components/mdx'
import Header from '../components/Header'
import '../shared/styles.css'
import Footer from '../components/Footer'
import BaseLayout from './base'

const GeneralLayout = memo(({ children, noGutterBottom, headProps }) => (
  <BaseLayout headProps={headProps}>
    <Header noGutterBottom={noGutterBottom} />
    <main>
      <MDXProvider components={MDXComponentsMap}>{children}</MDXProvider>
    </main>
    <Footer />
  </BaseLayout>
))

GeneralLayout.displayName = 'GeneralLayout'

export default GeneralLayout
