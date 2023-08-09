import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {TasksCollection} from '../db/TasksCollection'; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {Meteor} from 'meteor/meteor'


export const ConfigTask = ({ user }) => {

  const navigate = useNavigate(); 

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleInsert = e => {
    e.preventDefault(); 
    
    if(!name){
      return; 
    }


    Meteor.call('tasks.insert', name); 
    
    setName(''); 
    setDescription('');

    navigate('/tasks');

  }

  return (
    <div className="config-task-menu">
      <div className="task-form">
        <TextField 
          variant="standard" 
          label="Nome"
          onChange={(e) => setName(e.target.value)}
          ></TextField>
        <TextField 
          variant="standard" 
          label="Descrição"
          onChange={(e) => setDescription(e.target.value)}
          ></TextField>
        <TextField variant="standard" label="Data"></TextField>
      </div>
      <div className="task-form-buttons">
        <div>
          <Button id="form-button" variant="contained">
            Cancelar
          </Button>
        </div>
        <div>
          <Button id="form-button" variant="contained" onClick={handleInsert}>
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
};
