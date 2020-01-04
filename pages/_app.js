import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'

let cachedScrollPositions = [];

Router.events.on('routeChangeStart', url => {
  NProgress.configure({ easing: 'ease', speed: 600, minimum: 0.5 }).start()
})
Router.events.on('routeChangeComplete', () => NProgress.done(true))
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {

    componentDidMount() {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
          let shouldScrollRestore;
    
          Router.events.on('routeChangeStart', () => {
            cachedScrollPositions.push([window.scrollX, window.scrollY]);
          });
    
          Router.events.on('routeChangeComplete', () => {
            setTimeout(() => {
            if (shouldScrollRestore) {
              const { x, y } = shouldScrollRestore;
              window.scrollTo(x, y);
              shouldScrollRestore = false;
            }
        }, 10);
          });
    
          Router.beforePopState(() => {
            const [x, y] = cachedScrollPositions.pop();
            shouldScrollRestore = { x, y };
    
            return true;
          });
        }
}

    render() {
        const {Component, pageProps} = this.props;
        return <Component {...pageProps} />
      }
}

export default MyApp;
