import { List, ListItem, ListItemText, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate, Navigate } from "react-router-dom";
import {Meteor} from 'meteor/meteor'
export const Task = ({task, user}) => {

    const [anchorEl, setAnchorEl] = useState(null); 
    const open = Boolean(anchorEl); 
    
      const handleEdit = () => {
  
        console.log('handling edit: ', task); 
        // navigate('/editTask', {state: {task}}); 
      }
  
  
    const handleRemove = () => {
    }
    
    const handleOpen = (event) => {
      setAnchorEl(event.currentTarget); 
    }
  
    const handleClose = () => {
      setAnchorEl(null); 
    }

    return (
        <ListItem key={task._id} sx={{ bgcolor: "gray" }} >
        <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={task.name} secondary={user.username} />
            <ListItemIcon onClick={handleOpen} sx={{justifyContent: 'end'}}>
                <MoreVertIcon sx={{cursor: 'pointer'}} />
            </ListItemIcon>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleEdit}>Editar</MenuItem>
                <MenuItem onClick={() => console.log('current', currentTask)}>Remover</MenuItem>
            </Menu>

        </ListItem>
    )
}