import React from 'react';
import { AppBar, Toolbar, Box, Container, Button } from '@mui/material';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #F7F7FA',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
        color: '#0C204D'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <a 
              href="https://biocad.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <img 
                src={logo} 
                alt="BIOCAD Logo" 
                style={{ 
                  height: '20px',
                  width: 'auto'
                }} 
              />
            </a>
          </Box>
          <Button
            variant="contained"
            href="https://eng.biocad.ru/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#29C178',
              color: '#FFFFFF',
              '&:hover': {
                backgroundColor: '#0067BB'
              }
            }}
          >
            ENG
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header; 