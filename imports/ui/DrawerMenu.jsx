import React, { Fragment, useState } from "react";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';

export const DrawerMenu = () => {

  const list = (anchor) => (
    <Box
      sx={{width: 250}}
      // role="presentation"
    >
      <List>
        {['Home', 'Perfil'].map((text) => (
          <ListItem key={text}>
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

  const [state, setState] = useState({
    home: false,
    perfil: false
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if(event.type == 'keydown' && (event.key == 'Tab' || event.key == 'Shift')){
      return; 
    }

    setState({...state, [anchor]: open}); 
  }

  const anchor = 'Menu'; 

  return (
    <div>
      <Fragment>
        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
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
