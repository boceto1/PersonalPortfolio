/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ThemeProvider } from 'theme-ui';
import theme from '../../theme';
import '../styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

library.add(fab, fas);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <style>
            @import
            url(&apos;https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap&apos;);
          </style>
        </Head>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}