import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>
      <body
        className="bg-gray-50 font-sans text-gray-500 font-medium 
      "
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
