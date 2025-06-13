import React from 'react';
import { Box, Container, Typography, Paper, TextField } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, py: 3, backgroundColor: '#FFFFFF' }}>
        <Container>
          <Paper
            elevation={2}
            sx={{
              maxWidth: 600,
              mx: 'auto',
              p: 1,
              mb: 2, 
              borderRadius: '16px',
              backgroundColor: '#0C204D'
            }}
          >
            <Box sx={{ textAlign: 'center' }}>
              <Typography 
                variant="h5" 
                component="h1" 
                gutterBottom
                sx={{ 
                  color: '#F1F3F4',
                  whiteSpace: 'pre-line',
                  textAlign: 'center'
                }}
              >
                {"Визуализации выравнивания\nаминокислотных последовательностей"}
              </Typography>
            </Box>
          </Paper>
          <Paper 
            elevation={2} 
            sx={{ 
              maxWidth: 600, 
              mx: 'auto', 
              p: { xs: 2, sm: 3, md: 4 },
              width: '100%',
              minHeight: '60vh',
              borderRadius: '16px',
              backgroundColor: '#F1F3F4',
              flex: 1,
              mb: 2
            }}
          >
            <Box component="section" sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 2, 
              alignItems: 'center',
              height: '100%'
            }}>
              <TextField
                variant="outlined"
                placeholder="Введите текст..."
                sx={{ 
                  width: { xs: '100%', sm: '300px' },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#FFFFFF'
                  }
                }}
              />
              <TextField
                variant="outlined"
                placeholder="Введите текст..."
                sx={{ 
                  width: { xs: '100%', sm: '300px' },
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: '#FFFFFF'
                  }
                }}
              />
            </Box>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default App; 