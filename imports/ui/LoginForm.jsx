import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password);
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
      </div>
    </div>
  );
};
