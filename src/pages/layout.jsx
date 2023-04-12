import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header, Sidebar } from '../components';
import { useRef } from 'react';

const RootLayout = () => {
  const wrapperRef = useRef(null);
  
  return (
    <>
      <Header />
      <div ref={wrapperRef} style={{ display: 'flex' }}>
        <Sidebar baseRef={wrapperRef} />
        <Container>
          <main style={{ flexGrow: 1, padding: '24px' }}>
            <Outlet />
          </main>
        </Container>
      </div>
    </>
  );
};

export default RootLayout;