// pages/_app.js
import "../styles/global.css"; // The path to your global CSS file

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
