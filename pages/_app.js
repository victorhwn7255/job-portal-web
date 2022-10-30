import Script from "next/script";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <Toaster position="top-center" />

      <Script
        src="https://kit.fontawesome.com/354b3dfe93.js"
        crossOrigin="anonymous"
      />
    </ThemeProvider>
  );
}

export default MyApp;
