import "../styles/styles.scss";
import { ThemeProvider } from "use-theme-switcher";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider themeStorageKey="port__theme">
      <div className='root-container'>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
export default MyApp;