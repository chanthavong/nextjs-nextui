import { NextIntlProvider } from 'next-intl';
import NextApp from 'next/app';
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

const MyApp = ({ Component, messages, pageProps }) => {
  return (
    // 2. Use at the root of your app
    <NextIntlProvider messages={messages}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextIntlProvider>
  );
};

MyApp.getInitialProps = async function getInitialProps(context) {
  const { locale } = context.router;
  const messages = locale ? require(`../locales/${locale}.json`) : undefined;
  return {
    ...(await NextApp.getInitialProps(context)),
    messages,
  };
};

export default MyApp;
