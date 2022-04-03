import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <Container maxWidth="md">
      <Typography color='primary' variant="h4" sx={{paddingTop: 2}} component="div">Tiffany Sobczak</Typography>
      
      <nav>
      <Box sx={{ width: '100%' }}>
      <Tabs
        value={currentCategory}
        onChange={(event, newValue)=> {
          setCurrentCategory (newValue)
        }}
        textColor="primary"
        indicatorColor="primary"
      > 
      {categories.map((category)=> (
        <Tab href={'#'+category.name} value={category} label={category.name} />
      ))}
      </Tabs>
      </Box>
      </nav>
      </Container>
    </header>
  );
}

export default Nav;
