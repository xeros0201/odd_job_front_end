import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store, persistor} from "./redux/store"
import { Route, Routes } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AccountVerify from './components/hanleToken/account_verify'
import Profile from './components/profile';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
     <BrowserRouter>
     <Routes>
      
    <Route path='/' element={ <App />}>
      <Route index element={<Home></Home>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='register' element={<Register></Register>}></Route>

      <Route path='profile' element={<Profile></Profile>}></Route>
      <Route path='account_verify' element={<AccountVerify></AccountVerify>} ></Route>
    </Route>
    </Routes>
   
         </BrowserRouter>
    </PersistGate>
    </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
