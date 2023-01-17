import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="favicon.png" type="image/png" />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />

        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
