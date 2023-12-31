import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";

export const Task = ({ task, user }) => {
  const [anchorElStatus, setAnchorElStatus] = useState(null);
  const openStatus = Boolean(anchorElStatus);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleEdit = () => {

    if(user._id != task.userId){
      alert('Você não é o usuário que criou a tarefa!');
    }else{
      navigate("/editTask", { state: { task } });
    }
  };

  const handleRemove = () => {
    if(user._id != task.userId){
      alert('Você não é o usuário que criou a tarefa!'); 
    }else{
      Meteor.call("tasks.remove", task._id);
    }
  };

  const handleOpenStatus = (event) => {
    setAnchorElStatus(event.currentTarget);
  };

  const handleCloseStatus = () => {
    setAnchorElStatus(null);
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusChange = (status) => {

    if(user._id != task.userId){
      alert('Você não é o criador da tarefa!')
    }else{
      Meteor.call("tasks.update", task._id, task.name, task.description, status)
    }
    
    handleCloseStatus();
  }

  return (
    <ListItem key={task._id} >

      <ListItemIcon onClick={handleOpenStatus}>
        <AssignmentIcon sx={{cursor: 'pointer', color: '#2196f3'}}/>
      </ListItemIcon>

      <Menu anchorEl={anchorElStatus} open={openStatus} onClose={handleCloseStatus}>
        <MenuItem 
          onClick={() => handleStatusChange('Cadastrada')}
        >Cadastrada</MenuItem>
        <MenuItem 
          onClick={() => handleStatusChange('Em Andamento')}
          disabled={task.status != 'Cadastrada'}
        >Em Andamento</MenuItem>
        <MenuItem 
          disabled={task.status != 'Em Andamento'}
          onClick={() => handleStatusChange('Concluída')}
        >Concluída</MenuItem>
      </Menu>

      <ListItemText
        primary={task.name}
        secondary={task.username}
        sx={{ marginLeft: "20px", overflow: "auto" }}
      />
      
      <ListItemIcon onClick={handleOpen} sx={{ justifyContent: "end" }}>
        <MoreVertIcon sx={{ cursor: "pointer" }} />
      </ListItemIcon>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleEdit}>Editar</MenuItem>
        <MenuItem onClick={handleRemove}>Remover</MenuItem>
      </Menu>

    </ListItem>
  );
};