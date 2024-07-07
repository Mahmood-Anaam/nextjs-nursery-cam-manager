'use client';

import React, { useState, useEffect } from 'react';
import CustomAppBar from './components/AppBar';
import CustomDrawer from './components/Drawer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './utils/theme';
import './styles/globals.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 240;

const RootLayout = ({ children }) => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(!isMobile);

  useEffect(() => {
    setDrawerOpen(!isMobile);
  }, [isMobile]);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Nursery Vision Management</title>
        </head>
        <body>
          <div style={{ display: 'flex' }}>
            <CustomAppBar handleDrawerToggle={handleDrawerToggle} />
            <CustomDrawer open={drawerOpen} handleDrawerToggle={handleDrawerToggle} />
            <main style={{ flexGrow: 1, padding: '16px', marginLeft: isMobile ? 0 : drawerOpen ? `${drawerWidth}px` : 0, marginTop: '64px' }}>
              {children}
            </main>
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
};

export default RootLayout;
