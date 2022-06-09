import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ThemeScriptTag } from 'use-theme-switcher';
 
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
        </Head>
        <body>
          <ThemeScriptTag
            defaultLightTheme="theme-light"
            defaultDarkTheme="theme-dark" 
            themeStorageKey='port__theme'
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}