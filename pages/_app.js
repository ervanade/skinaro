import '../styles/globals.css'
import Head from "next/head";
import Script from 'next/script';
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }) {
  const [apiScript, setApiScript] = useState('');

  // Ambil data script dari API (contoh: hardcoded untuk demonstrasi)
  const apiScriptData = `<script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=DC-10827733&amp;l=dataLayer&amp;cx=c"></script>`;

  useEffect(() => {
    // Simulasikan pengambilan data script dari API
    // Di sini, kita akan mengatur data script dari API ke dalam state
    setApiScript(apiScriptData);
  }, []);
  return (
    <>
      <Head>
        {/* Tambahkan data script dari API ke dalam tag <head> */}
        <div dangerouslySetInnerHTML={{ __html: apiScript }} />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${"1486056371919786"}');
                fbq('track', 'PageView');
              `,
          }}
        ></script> */}
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp
