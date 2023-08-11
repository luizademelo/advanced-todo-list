import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { Button, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

export const SignUpForm = () => {
 
  const navigate = useNavigate(); 

  const [name, setName] = useState("");
  const [password, setPassword] = useState(""); 
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [sex, setSex] = useState("");
  const [company, setCompany] = useState("");

  // TODO
  // adicionar foto

  const handleSubmit = (e) => {
    e.preventDefault();
    Accounts.createUser({
        username: name, 
        password: password,
        email: email,
        birth: birth, 
        sex: sex,
        company: company
    })

    navigate('/'); 
  }

  return (
      <div className="signup-form">
        <Typography sx={{alignSelf: 'center'}}>Cadastro de usuário</Typography>
        <div>
          <TextField
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
            <TextField
                label="Email"
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>
        <div>
            <TextField
                label="Senha"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>
        <div>
            <TextField
                label="Data de Nascimento"
                type="date"
                variant="outlined"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                InputLabelProps={{shrink: true}}
            />
        </div>
        <div>
            <TextField 
                label='Sexo'
                select
                value={sex}
                onChange={(e) => setSex(e.target.value)}  
                sx={{width: '60%'}}           
            >
                <MenuItem value={'F'}>Feminino</MenuItem>
                <MenuItem value={'M'}>Masculino</MenuItem>
            </TextField>
        </div>
        <div>
            <TextField
                label='Empresa'
                value={company}
                onChange={(e) => setCompany(e.target.value)}

            />
        </div>
        <Button variant="contained" onClick={handleSubmit}>Cadastrar</Button>
      </div>
  );
};
