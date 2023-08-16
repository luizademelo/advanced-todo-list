import React, { Fragment, useState } from "react";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

export const DrawerMenu = () => {

  const navigate = useNavigate(); 

  const handleDrawerClick = (text) => {
    if(text == 'Home')
      navigate('/home')
    if(text == 'Perfil')
      navigate('/userProfile'); 
  }

  const list = (anchor) => (
    <Box
      sx={{width: 200}}
    >
      <List>
        {['Home', 'Perfil'].map((text) => (
          <ListItem key={text} onClick={() => handleDrawerClick(text)}>
            <ListItemButton>
              <ListItemIcon>
                {text == 'Home' ? <HomeIcon /> : <PersonIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>  
        ))}
      </List>
    </Box>
  )

  const [state, setState] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if(event.type == 'keydown' && (event.key == 'Tab' || event.key == 'Shift')){
      return; 
    }

    setState(open); 
  }

  const anchor = 'left'; 

  return (
    <div>
      <Fragment>
        <Button onClick={toggleDrawer(anchor, true)}>Menu</Button>
        <Drawer
          anchor={anchor}
          open={state}
          onClose={toggleDrawer(anchor, false)}
          ModalProps={{
            keepMounted: true
          }}
        >
        {list(anchor)}
        </Drawer>
      </Fragment>
    </div>
  );
};
