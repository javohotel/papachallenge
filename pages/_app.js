import React from 'react';
import '../styles/globals.scss';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const initialState = {
  cart: []
};

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