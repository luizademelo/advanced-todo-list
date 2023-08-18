import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {Meteor} from 'meteor/meteor'; 

export const EditTask = () => {
  const location = useLocation();
  const task = location.state?.task;

  const navigate = useNavigate();

  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    Meteor.call('tasks.update', task._id, name, description, task.status); 
    navigate('/tasks'); 
  }

  const handleCancel = () => {
    navigate('/tasks');
  }

  return (
    <div className="edit-task-menu">
      <Typography>Editando tarefa: {task.name}</Typography>
      <div className="task-form">
        <TextField
          variant="standard"
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextField>
        <TextField
          variant="standard"
          label="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></TextField>
      </div>
      <div className="task-form-buttons">
        <div>
          <Button id="form-button" variant="contained" onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
        <div>
          <Button id="form-button" variant="contained" onClick={handleUpdate}>
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
};
