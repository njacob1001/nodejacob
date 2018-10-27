const Html = (body, data) => {
  const prop = {
    title: 'Jacob Gonzalez Frontend developer from Colombia',
    description: 'Desarrollador web colombiano, frontend developer from colombia freelancer responsive design',
    urlBase: 'https://jacobgz.herokuapp.com/',
    ogtype: 'website',
    theme: '2B303A'
  };

  return (`
    <!DOCTYPE html>
    <html lang="en" prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/Blog">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
        <meta name="HandheldFriendly" content="true">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${prop.title}</title>
        <meta name="description" content="${prop.description}">
        <link rel="canonical" href="${prop.urlBase}">
        <noscript><p>Ncesita tener habilitado JavaScript para poder visualizar contenido</p></noscript>
        <meta name="HandheldFriendly" content="true">
        <meta name="MobileOptimized" content="320">
        <meta name="theme-color" content="${prop.theme}">
        <meta name="msapplication-TileColor" content="${prop.theme}">
        <meta name="msapplication-TileImage" content="${prop.theme}">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="default">
        <link rel="apple-touch-startup-image" href="./assets/img/og-image.jpg">
        <link rel="apple-touch-icon" href="./assets/img/og-image.jpg">
        <link rel="author" href="https://plus.google.com/112455610659481296930">
        <link rel="publisher" href="https://plus.google.com/112455610659481296930">
        <meta itemprop="name" content="${prop.title}">
        <meta itemprop="description" content="${prop.description}">
        <meta itemprop="image" content="./assets/img/og-image.jpg">
        <meta property="og:title" content="${prop.title}">
        <meta property="og:type" content="${prop.ogtype}">
        <meta property="og:url" content="${prop.urlBase}">
        <meta property="og:description" content="${prop.description}">
        <meta property="og:image" content="./assets/img/og-image.jpg">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@Jacob62213451">
        <meta name="twitter:title" content="${prop.title}">
        <meta name="twitter:description" content="${prop.description}">
        <meta name="twitter:creator" content="@Jacob62213451">
        <meta name="twitter:image:src" content="./assets/img/og-image.jpg">
        <meta name="theme-color" content="#${prop.theme}">
        <link rel="manifest" href="./manifest.json">
        <link rel="shortcut icon" href="./favicon.ico">
        <link href="./main.css" rel="stylesheet">
      </head>
      <body>
        <div id="root">${body}</div>
        <script>window.initialState = ${data}</script>
        <script type="text/javascript" src="./chunk.vendor.js"></script>
        <script type="text/javascript" src="./main.js"></script>
      </body>
    </html>`);
};

export default Html;
