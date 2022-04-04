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
    <Box sx={{backgroundColor: '#380036'}} >
      <Container maxWidth="md">
      <Typography color='secondary' variant="h4" sx={{paddingTop: 2}} component="div">Tiffany Sobczak</Typography>
      
      <nav>
      <Box >
      <Tabs
      sx={{ color: 'white' }}
        value={currentCategory}
        onChange={(event, newValue)=> {
          setCurrentCategory (newValue)
        }}
        textColor="secondary"
        indicatorColor="secondary"
      > 
      {categories.map((category)=> (
        <Tab href={'#'+category.name} value={category} label={category.name} />
      ))}
      </Tabs>
      </Box>
      </nav>
      </Container>
    </Box>
  );
}

export default Nav;
