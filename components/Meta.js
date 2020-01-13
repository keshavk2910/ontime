import Head from 'next/head'

export default function Meta() {
    return (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
    <style jsx global>{`
    iframe {
      overflow:hidden;height:calc(100vh - 150px);width:100%
    }
    .top-pad {
    min-height: 100vh;
    overflow: hidden;
    padding-top:100px;
    }
    header div {
      display:flex;
      justify-content: space-between;
    }
    header div.bm-menu-wrap{
      display:block!important;
    }
    header div.cart-Icon_wrap {
      display:inline-block!important;
    }
    .flex-mid {
      display:flex;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    @font-face {font-family: "Neue Einstellung Bold";
  src: url("fonts/51fdf8021065497210ca54837e1601e9.eot"); /* IE9*/
  src: url("fonts/51fdf8021065497210ca54837e1601e9.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
  url("fonts/51fdf8021065497210ca54837e1601e9.woff2") format("woff2"), /* chrome、firefox */
  url("fonts/51fdf8021065497210ca54837e1601e9.woff") format("woff"), /* chrome、firefox */
  url("fonts/51fdf8021065497210ca54837e1601e9.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url("fonts/51fdf8021065497210ca54837e1601e9.svg#Neue Einstellung Bold") format("svg"); /* iOS 4.1- */
}
ul.pagination {
  margin: 15px;
  text-align: center;
}
ul.pagination li {
display:inline-block;
padding:10px 15px;
}
ul.pagination li a {
padding:5px;
background-color:#eee;
}
    `}</style>
    <style jsx global>{`
    #nprogress{pointer-events:none}#nprogress .bar{background:-webkit-linear-gradient(344deg, rgba(255,86,0,1) 4%, rgba(255,60,0,1) 25%, rgba(0,73,232,1) 54%, rgba(255,60,0,1) 90%);position:fixed;z-index:99999999999;top:0;left:0;width:100%;height:5px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #f1592a,0 0 5px #f1592a;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:120px;right:20px;}#nprogress .spinner-icon{width:35px;height:35px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#f1592a;border-left-color:#f1592a;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}</style>
    </div>
)
    }