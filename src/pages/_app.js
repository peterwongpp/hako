import Head from 'next/head';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8'/>
        <meta httpEquiv='x-ua-compatible' content='ie=edge'/>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <title>Hako</title>

        <link rel='stylesheet' href='/foundation-icons.css'/>
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/foundation-sites@6.5.1/dist/css/foundation.min.css' integrity='sha256-1mcRjtAxlSjp6XJBgrBeeCORfBp/ppyX4tsvpQVCcpA= sha384-b5S5X654rX3Wo6z5/hnQ4GBmKuIJKMPwrJXn52ypjztlnDK2w9+9hSMBz/asy9Gw sha512-M1VveR2JGzpgWHb0elGqPTltHK3xbvu3Brgjfg4cg5ZNtyyApxw/45yHYsZ/rCVbfoO5MSZxB241wWq642jLtA==' crossOrigin='anonymous'/>
      </Head>

      <Component {...pageProps} />

      <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'></script>
      <script src='https://cdn.jsdelivr.net/npm/foundation-sites@6.5.1/dist/js/foundation.min.js' integrity='sha256-WUKHnLrIrx8dew//IpSEmPN/NT3DGAEmIePQYIEJLLs= sha384-53StQWuVbn6figscdDC3xV00aYCPEz3srBdV/QGSXw3f19og3Tq2wTRe0vJqRTEO sha512-X9O+2f1ty1rzBJOC8AXBnuNUdyJg0m8xMKmbt9I3Vu/UOWmSg5zG+dtnje4wAZrKtkopz/PEDClHZ1LXx5IeOw==' crossOrigin='anonymous'></script>
    </>
  );
};

export default MyApp;
