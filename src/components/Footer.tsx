import React from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import logo from '../assets/logo.png';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SvgIcon from '@mui/material/SvgIcon';

const VkIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.97 14.86 14.94C13.86 14.08 13.49 13.88 13.27 13.88C12.88 13.88 12.75 14.04 12.75 14.55V15.93C12.75 16.41 12.6 16.55 11.76 16.55C10.32 16.55 8.81 15.5 7.8 13.52C5.84 10.05 5.33 8.16 5.33 7.77C5.33 7.63 5.42 7.5 5.66 7.5H7.12C7.5 7.5 7.63 7.66 7.79 8.08C8.5 10.07 9.56 11.64 10.03 11.64C10.25 11.64 10.38 11.5 10.38 10.95V9.11C10.33 8.21 10.03 8.07 10.03 7.79C10.03 7.63 10.12 7.5 10.35 7.5H12.69C12.97 7.5 13.09 7.66 13.09 7.97V10.22C13.09 10.57 13.25 10.71 13.3 10.71C13.5 10.71 13.72 10.57 14.1 10.2C15.32 8.77 16.25 7.13 16.25 7.13C16.32 7 16.45 6.86 16.73 6.86H18.19C18.5 6.86 18.61 7.03 18.5 7.3C18.38 7.57 17.44 9.13 16.43 10.58C16 11.19 15.75 11.5 15.75 11.71C15.75 11.86 15.83 12 16.09 12.27C16.39 12.59 17.03 13.23 17.5 13.78C18.11 14.5 18.58 15.1 18.71 15.5C18.84 15.89 18.7 16.27 18.15 16.27Z" fill="currentColor"/>
  </SvgIcon>
);

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        borderTop: '1px solid #F7F7FA',
        boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.05)',
        py: 3,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 },
          alignItems: 'center'
        }}>
          {/* Логотип */}
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'flex-start', sm: 'flex-start' },
            order: { xs: 2, sm: 1 }
          }}>
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

          {/* Соц. сети */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            flex: 1,
            justifyContent: 'center',
            order: { xs: 1, sm: 2 }
          }}>
            <IconButton 
              href="https://t.me/BIOCAD" 
              target="_blank"
              sx={{ 
                color: '#0C204D',
                '&:hover': { 
                  backgroundColor: '#0067BB',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  height: '40px',
                  width: '40px'
                }
              }}
            >
              <TelegramIcon />
            </IconButton>
            <IconButton 
              href="https://vk.com/biocad" 
              target="_blank"
              sx={{ 
                color: '#0C204D',
                '&:hover': { 
                  backgroundColor: '#0067BB',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  height: '40px',
                  width: '40px'
                }
              }}
            >
              <VkIcon />
            </IconButton>
            <IconButton 
              href="http://www.youtube.com/user/BIOCADcompany" 
              target="_blank"
              sx={{ 
                color: '#0C204D',
                '&:hover': { 
                  backgroundColor: '#0067BB',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  height: '40px',
                  width: '40px'
                }
              }}
            >
              <YouTubeIcon />
            </IconButton>
            <IconButton 
              href="https://www.linkedin.com/company/biocad" 
              target="_blank"
              sx={{ 
                color: '#0C204D',
                '&:hover': { 
                  backgroundColor: '#0067BB',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  height: '40px',
                  width: '40px'
                }
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>

          {/* Копирайт */}
          <Box sx={{ 
            flex: 1,
            display: 'flex',
            justifyContent: { xs: 'flex-end', sm: 'flex-end' },
            order: { xs: 3, sm: 3 }
          }}>
            <Typography sx={{ color: '#0C204D' }}>
              Copyright © 2001-2025
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 