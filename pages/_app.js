import React from 'react';
import '../styles/globals.scss';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import initialState from '../initialState';

const store = configureStore(initialState);


function MyApp({ Component, pageProps }) {
  
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp;