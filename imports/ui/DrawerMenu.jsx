import React, { Fragment, useState } from "react";
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import TaskIcon from '@mui/icons-material/Task';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

export const DrawerMenu = ({user}) => {

  const iconList = [<HomeIcon />, <TaskIcon />, <PersonIcon />]; 

  const navigate = useNavigate(); 

  const handleDrawerClick = (text) => {
    setState(false); 
    if(text == 'Home')
      navigate('/home');
    if(text == 'Perfil')
      navigate('/userProfile'); 
    if(text == 'Ver Tarefas')
      navigate('/tasks'); 
  }

  const list = (anchor) => (
    <Box
      sx={{width: 230}}
    >
      <List>
        <ListItem>
          <ListItemIcon>
          <img src={user.profile.photo} />
          <ListItemText sx={{marginLeft: '10px'}} primary={user.username} secondary={user.emails[0].address}/>
          </ListItemIcon>
        </ListItem>
      </List>

      <List>
        {['Home', 'Ver Tarefas','Perfil'].map((text, index) => (
          <ListItem key={text} onClick={() => handleDrawerClick(text)}>
            <ListItemButton>
              <ListItemIcon>
                {iconList[index]}
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
      <Fragment>
        <Button startIcon={<MenuIcon />} onClick={toggleDrawer(anchor, true)}>Menu</Button>
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
  );
};
