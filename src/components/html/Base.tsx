import { Footer } from "./Footer";
import { Header } from "./Header";

export function BaseHtml({ children }: JSX.ElementChildrenAttribute) {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/public/styles/style.css" />
        <script src="https://unpkg.com/htmx.org@1.9.9"></script>
        <title>Document</title>
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
