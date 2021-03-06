import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import wrapper from '../store/configureStore';

import "react-image-gallery/styles/css/image-gallery.css";
import 'antd/dist/antd.css';
import '../styles/global.scss';
import '../styles/index.scss';

const App = ({Component, pageProps}) => {
  return(
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}; 

export default wrapper.withRedux(App);