import { Button, FormControlLabel, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {Meteor} from 'meteor/meteor'; 
import Checkbox from '@mui/material/Checkbox';

export const EditTask = () => {
  const location = useLocation();
  const task = location.state?.task;
  console.log(task); 
  const navigate = useNavigate();

  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [isPersonal, setIsPersonal] = useState(Boolean(task.isPersonal));  

  const handleUpdate = (e) => {
    e.preventDefault(); 

    Meteor.call('tasks.update', task._id, name, description, task.status, isPersonal); 
    navigate('/tasks'); 
  }

  const handleCancel = () => {
    navigate('/tasks');
  }

  const handleCheckbox = (event) => {
    setIsPersonal(event.target.checked); 
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

        <FormControlLabel 
          label="É uma tarefa pessoal"
          control={<Checkbox checked={isPersonal} onChange={handleCheckbox} />}
        />
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
