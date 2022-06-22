import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar'

import StartPage from './views/StartPage';
import Accounts from './views/Accounts';
import AccountDetails from './views/AccountDetails';
import Branchoffices from './views/Branchoffices';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import CheckAuthPage from './views/CheckAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<StartPage/>}/>
          <Route path = "/konto" element = {<CheckAuthPage page={<Accounts/>}/>}/>
          <Route path = "/konto/:id" element = {<CheckAuthPage page={<AccountDetails/>}/>}/>
          <Route path = "/filialen" element = {<Branchoffices/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);