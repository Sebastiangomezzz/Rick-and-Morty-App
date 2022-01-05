import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ReactQueryDevtools } from 'react-query/devtools';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
