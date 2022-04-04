import React, { useState } from 'react';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box'

export const Footer = ()=> (
    <footer>
        <Container maxWidth="md"> 
        <Box display='flex' justifyContent='center' >
          <IconButton size='large' color="primary" href="https://github.com/tiffsobczak" target='_blank' >
                    <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton size='large' color="primary" href="https://www.linkedin.com/in/tiffany-sobczak-9b2380121/" target='_blank' >
                    <LinkedInIcon fontSize='large' />
                </IconButton>
                <IconButton size='large' color="primary" href="https://www.instagram.com/tifftrains/" target='_blank' >
                    <InstagramIcon fontSize='large' />
                </IconButton>
         </Box>
        </Container>
      </footer>
)