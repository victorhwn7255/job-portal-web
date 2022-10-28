import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />

      <Script src="https://kit.fontawesome.com/354b3dfe93.js" crossOrigin="anonymous" />
    </ThemeProvider>
  )
}

export default MyApp
