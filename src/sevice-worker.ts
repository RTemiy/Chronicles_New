if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/Chronicles_New/service-worker.js')
      .then((registration) => {
        /* console.log('SW registered: ', registration) */
      })
      .catch((registrationError) => {
        /* console.log('SW registration failed: ', registrationError) */
      })
  })
}
