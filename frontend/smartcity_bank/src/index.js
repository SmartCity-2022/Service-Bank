import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/NavBar'

import Accounts from './views/Accounts';
import AccountDetails from './views/AccountDetails';
import Transactions from './views/Transactions';
import NewTransaction from './views/NewTransaction';
import Branchoffices from './views/Branchoffices';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Accounts/>}/>
          <Route path = "/konto/:id" element = {<AccountDetails/>}/>
          <Route path = "/umsaetze" element = {<Transactions/>}/>
          <Route path = "/ueberweisung" element = {<NewTransaction/>}/>
          <Route path = "/filialen" element = {<Branchoffices/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);