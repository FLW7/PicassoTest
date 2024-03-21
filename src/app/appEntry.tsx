import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@/app/index.css';
import { Provider } from 'react-redux';
import BaseLayout from './layouts/BaseLayout';
import { setupStore } from './providers/store/store';

const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
