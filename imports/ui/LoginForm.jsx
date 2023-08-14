import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, Typography } from "@mui/material";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password, (error) =>{
      if(error){
        if(error.reason == "User not found"){
          alert("Usuário não encontrado");
        }
      }else{
        navigate("/tasks");
      }
    });



  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/signup'); 
    
  };

  return (
    <div className="welcome">
      <Typography variant="body1">Bem vindo(a) à lista de tarefas!</Typography>
      <div className="login-form">
        <div>
          <TextField
            label="Usuário"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <TextField
            label="Senha"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>
        <Button variant="contained" onClick={handleSubmit}>
          Entrar
        </Button>
        <div>
          <Button
            onClick={handleSignUp}
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </div>
  );
};
