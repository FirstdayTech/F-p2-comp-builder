import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header, Sidebar } from '../components';

const RootLayout = () => {  
  return (
    <>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Container>
          <main style={{ flexGrow: 1, paddingX: '24px' }}>
            <Outlet />
          </main>
        </Container>
      </div>
    </>
  );
};

export default RootLayout;