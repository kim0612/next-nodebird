import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import 'antd/dist/antd.css';

const App = ({Component, pageProps}) => {
  return(
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NextBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}; 

export default App;