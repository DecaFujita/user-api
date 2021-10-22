import React from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';
import Header from './components/layout/header';
import Main from './components/layout/main';
// import Sidebar from './components/layout/sidebar';
import theme from './theme';
// import { AuthProvider } from './hooks/useAuth';

import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom'; 
// import { NotificationContainer } from 'react-notifications';


function App() {

  // const user = JSON.parse(localStorage.getItem('bwf-user'));

  return (
    <ThemeProvider theme={theme}>
      {/* <AuthProvider user={user}> */}
        <div className="App">
          <BrowserRouter>
            <Header />
            <Main />
          </BrowserRouter>
        </div>
        {/* <NotificationContainer /> */}
      {/* </AuthProvider> */}
    </ThemeProvider>
  );
}

export default App;
