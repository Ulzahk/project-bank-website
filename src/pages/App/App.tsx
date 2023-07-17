import { AppProps } from 'next/app';
import Head from 'next/head';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Bank Name</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;