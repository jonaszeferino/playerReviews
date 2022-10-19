import MainContainer from "../components/MainContainer";
import { SessionProvider } from "next-auth/react";
import { AppProps} from 'next/app';
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return (
    <SessionProvider session={session}>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
    </SessionProvider>
  );
}

export default MyApp;
