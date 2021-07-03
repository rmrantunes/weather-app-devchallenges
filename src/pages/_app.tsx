import { Provider as ReactReduxProvider } from "react-redux";
import { store } from "src/store";
import "src/core/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ReactReduxProvider store={store}>
      <Component {...pageProps} />
    </ReactReduxProvider>
  );
}

export default MyApp;
