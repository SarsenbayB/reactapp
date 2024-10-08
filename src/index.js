import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';

import App from './App';

// import './index.css';
import './style/main.css';
import './style/reset.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>
);

