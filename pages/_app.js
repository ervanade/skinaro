import '../styles/globals.css'
import Head from "next/head";
import Script from 'next/script';
import { useEffect, useState } from "react";
import parse from 'html-react-parser';
function MyApp({ Component, pageProps }) {
          const scriptString = `<script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=DC-10827733&amp;l=dataLayer&amp;cx=c"></script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=DC-10203694"></script>
          <!-- Global site tag (gtag.js) - Google Marketing Platform -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=DC-10203694"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'DC-10203694');
          </script>
          <!-- End of global snippet: Please do not remove -->
          
        <!-- Meta Pixel Code -->
        <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '755549682423303');
        fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=755549682423303&ev=PageView&noscript=1"
        /></noscript>
        <!-- End Meta Pixel Code -->

          `;
  // const [apiScript, setApiScript] = useState('');

  // Ambil data script dari API (contoh: hardcoded untuk demonstrasi)
  // const apiScriptData = `<script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=DC-10827733&amp;l=dataLayer&amp;cx=c"></script>`;
  // const apiScriptData = `!function(f,b,e,v,n,t,s)
  // {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  // n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  // if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  // n.queue=[];t=b.createElement(e);t.async=!0;
  // t.src=v;s=b.getElementsByTagName(e)[0];
  // s.parentNode.insertBefore(t,s)}(window, document,'script',
  // 'https://connect.facebook.net/en_US/fbevents.js');
  // fbq('init', '${"1486056371919786"}');
  // fbq('track', 'PageView');`;

  // useEffect(() => {
  //   setApiScript(scriptString);
  // }, []);
  return (
    <>
      <Head>
        {/* Tambahkan data script dari API ke dalam tag <head> */}
        {/* <link rel="icon" href="/favicon-skinaro.png" />
        <div dangerouslySetInnerHTML={{ __html: apiScript }} /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
                ${apiScriptData}
              `,
          }}
        ></script> */}
        {/* {parse(apiScript)} */}
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
