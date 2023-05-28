import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Watch from './components/Watch';
import Main from './components/Main';

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
  children:[{
    path:"/",
    element:<Main/>
  },
{
  path:"/video/:id",
  element:<Watch/>
}
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Provider store={store}>
    <RouterProvider router={router}>
    <App/>
    </RouterProvider>
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
