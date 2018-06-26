
const configPage = {
  title: {
    '/LEARN': 'MobilizeToday-Learn',
    '/ORDER': 'MobilizeToday-Order',
    '/LEARN/COMPARE': 'MobilizeToday-Compare',
    'template': 'MobilizeToday'
  },
  meta: {

  }
}

export default function (componentHTML, key) {
  let title = configPage.title[key.toUpperCase()] || configPage.title.template
  let assetUrl = process.env.NODE_ENV !== 'production' ? 'http://localhost:8050' : ''
  return `
    <!DOCTYPE html>
      <html>
      <head>
          <title>${title}</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Raleway:400,700,900" rel="stylesheet">
          <link rel="stylesheet" href="${assetUrl}/assets/app/styles.css">
          <link rel="stylesheet" href="/assets/css/animate.css">
          <link rel="stylesheet" href="/assets/css/main.css">
          <link rel="stylesheet" href="/assets/css/hover.css">
          <link rel="stylesheet" type="text/css" href="/assets/css/portfolio.css" />
          <link rel="stylesheet" type="text/css" href="/assets/css/portfolio-example.css" />

          <link rel="apple-touch-icon" sizes="57x57" href="/assets/img/icons/apple-icon-57x57.png">
          <link rel="apple-touch-icon" sizes="60x60" href="/assets/img/icons/apple-icon-60x60.png">
          <link rel="apple-touch-icon" sizes="72x72" href="/assets/img/icons/apple-icon-72x72.png">
          <link rel="apple-touch-icon" sizes="76x76" href="/assets/img/icons/apple-icon-76x76.png">
          <link rel="apple-touch-icon" sizes="114x114" href="/assets/img/icons/apple-icon-114x114.png">
          <link rel="apple-touch-icon" sizes="120x120" href="/assets/img/icons/apple-icon-120x120.png">
          <link rel="apple-touch-icon" sizes="144x144" href="/assets/img/icons/apple-icon-144x144.png">
          <link rel="apple-touch-icon" sizes="152x152" href="/assets/img/icons/apple-icon-152x152.png">
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/icons/apple-icon-180x180.png">
          <link rel="icon" type="image/png" sizes="192x192"  href="/assets/img/icons/android-icon-192x192.png">
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/icons/favicon-32x32.png">
          <link rel="icon" type="image/png" sizes="96x96" href="/assets/img/icons/favicon-96x96.png">
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/icons/favicon-16x16.png">

          <meta name="msapplication-TileColor" content="#ffffff">
          <meta name="msapplication-TileImage" content="/assets/img/icons/ms-icon-144x144.png">
          <meta name="theme-color" content="#ffffff">

          <script src="/assets/js/portfolio/modernizr.custom.js"></script>
      </head>

      <body >
      <!--
        <div id='preloader'>
          <img src='/assets/img/loader.gif'/>
        </div>
      -->
        <div id='particles-js'> </div>
        <div id='react-view'>${componentHTML}</div>

        <!-- SCRIPTS BG-1 -->
        <script src="/assets/js/bg-1/particles.js"></script>
        <script src="/assets/js/bg-1/app.js"></script>
        <script src="/assets/js/jquery-3.3.1.min.js"></script>
        <script src="/assets/js/jquery.tinyscrollbar.min.js"></script>
        <script src="/assets/js/random-amimation-block.js"></script>

        <!-- SCRIPTS BG-2 -->
        <script src="/assets/js/bg-2/three.min.js"></script>

        <!-- react-app -->
        <script type="application/javascript" src="${assetUrl}/assets/app/bundle.js"></script>

      </body>
    </html>
  `
}

/*
          <script>
            let div = document.createElement('div')
            let img = document.createElement('img')
            img.src = '/assets/img/loader.gif'
            div.appendChild(img)
            div.setAttribute('id', 'preloader')
          </script>
*/
