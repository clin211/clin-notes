if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/docs/sw.js', { scope: '/docs/' })})}