import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Footer} from './components/Footer'


const theme = createTheme({
  palette: {
    primary: {
      main: '#3777FF',
    },
    secondary: {
      main: '#f4f4f9',

    },
  },
});

function App() {
  const [categories] = useState([
    {
      name: 'about',
      description: 'Bio'
    },
    {
      name: 'contact',
      description: 'Send an email'
    },
    {
      name: 'portfolio',
      description: 'Projects',
    },
    
    { name: 'resume', 
    description: 'Professional Resume' },
    ]);

  const [currentCategory, setCurrentCategory] = useState(categories.find( (cat) => {
      return '#'+cat.name === window.location.hash
  }));

  return (
    <ThemeProvider theme ={theme}>
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        
      ></Nav>
      <main>
      <Container maxWidth="md">
        {currentCategory.name === 'about' && (
          <About/>
        )}
        {currentCategory.name === 'contact' && (
          <ContactForm/>
        )}
        {currentCategory.name === 'portfolio' && (
          <Portfolio/>
        )}
        {currentCategory.name === 'resume' && (
          <Resume/>
        )
        }
        </Container>
      </main>
      <Footer/>
    </div>
    </ThemeProvider>
  );
}

export default App;
