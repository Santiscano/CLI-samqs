
export const createIndexHtml = () => {
  const data = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="theme-color" content="#000000" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <link rel="manifest" href="/manifest.json" />

    <!-- Favicon -->
    <link rel="icon" href="/favicon/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />

    <!-- Google Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />

    <meta
      name="description"
      content=" The Integrator with multi-Apps: whatsapp, mercadolibre, linio, shopify, and more."
    />
    <meta name="keywords" content="shopify,whatsapp,mercadolibre,linio,application,dashboard,admin,template" />
    <meta name="author" content="Santiago Sierra Cano" />

    <title>S && S Integrator</title>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const global = globalThis;
    </script>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`;
  return data;
}
