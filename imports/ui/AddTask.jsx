import React from "react";
import Button from "@mui/material/Button";

import Checkbox from '@mui/material/Checkbox';
import TextField from "@mui/material/TextField";
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {Meteor} from 'meteor/meteor'


export const AddTask = ({ user }) => {

  const navigate = useNavigate(); 

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(''); 
  const [isPersonal, setIsPersonal] = useState(false); 

  const handleInsert = e => {
    e.preventDefault(); 
    
    if(!name){
      return; 
    }

    Meteor.call('tasks.insert', name, description, isPersonal, user.username, date); 
    
    setName(''); 
    setDescription('');

    navigate('/tasks');
  }

  const handleCancel = () => {
    navigate('/tasks'); 
  }

  const handleCheckbox = (event) => {
    setIsPersonal(event.target.checked); 
  }

  return (
    <div className="config-task-menu">
      <div className="task-form">

        <TextField 
          variant="standard" 
          label="Nome"
          required
          onChange={(e) => setName(e.target.value)}
          ></TextField>

        <TextField 
          variant="standard" 
          label="Descrição"
          onChange={(e) => setDescription(e.target.value)}
          ></TextField>

        <TextField 
          variant="standard" 
          label="Data"
          type="date"
          onChange={(e) => setDate(e.target.value)}
          sx={{width: '100%'}}
          InputLabelProps={{shrink: true}}
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
          <Button id="form-button" variant="contained" onClick={handleInsert}>
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
};
