import { List, ListItem, ListItemText, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const TaskList = ({ tasks, user }) => { 

  const [anchorEl, setAnchorEl] = useState(null); 
  const open = Boolean(anchorEl); 
 
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget); 
  }

  const handleClose = () => {
    setAnchorEl(null); 
  }

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task._id} sx={{ bgcolor: "gray" }}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={task.name} secondary={user.username} />
            <ListItemIcon onClick={handleOpen} sx={{justifyContent: 'end'}}>
                <MoreVertIcon sx={{cursor: 'pointer'}}/>
            </ListItemIcon>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem>Editar</MenuItem>
                <MenuItem>Remover</MenuItem>
            </Menu>
        </ListItem>
      ))}
    </List>
  );
};
