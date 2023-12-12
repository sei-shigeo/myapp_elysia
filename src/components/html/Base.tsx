export function BaseHtml({ children }: JSX.ElementChildrenAttribute) {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/public/dist/output.css" />
        <script src="https://unpkg.com/htmx.org@1.9.9"></script>
        <title>Document</title>
      </head>
      <body class="flex flex-col">
        <Header />
        <div class="flex-grow flex">{children}</div>
        <Footer />
      </body>
    </html>
  );
}


export function DashBoard({ children }: JSX.ElementChildrenAttribute) {
  return (
    <BaseHtml>
      <SideBar />
      <main class="bg-green-200 flex-grow pl-2">
        <div>
          <input type="text" class={"rounded"} />
        </div>
        {children}
      </main>
    </BaseHtml>
  );
}

const Header = () => {
  return (
    <header class="bg-blue-500">
      <div class="container mx-auto flex justify-between items-center py-2">
        <div class="text-white">
          <h1>運送会社用アプリ</h1>
        </div>
        <nav class="flex space-x-6 text-white">
          <a href="/auth/sign-in">Sign IN</a>
          <a href="/auth/sign-up">Sign UP</a>
        </nav>
      </div>
    </header>
  );
};

const SideBar = () => {
  return (
    <aside class="bg-red-300 px-2 ">
      <div>
        <nav class="flex flex-col">
          <a href="/employee">employee</a>
          <a href="/luggage">Luggage</a>
          <a href="/orders">Orders</a>
          <a href="/truck">Truck</a>
          <a href="/admin">Admin</a>
        </nav>
      </div>
    </aside>
  );
};

const Footer = () => {
  return (
    <footer class={"bg-gray-400 py-2 text-center"}>
      <small class={"text-white"}>@運送会社用アプリ 2023/12/01</small>
    </footer>
  );
};
