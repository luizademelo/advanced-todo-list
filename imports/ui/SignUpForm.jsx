import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Accounts } from "meteor/accounts-base";
import { Button, Input, InputLabel, MenuItem, TextField, Typography } from "@mui/material";

export const SignUpForm = () => {
 
  const navigate = useNavigate(); 

  const [name, setName] = useState("");
  const [password, setPassword] = useState(""); 
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [sex, setSex] = useState("");
  const [company, setCompany] = useState("");
  const [photo, setPhoto] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();
    Accounts.createUser({
        username: name, 
        password: password,
        email: email,
        profile: {
            birth: birth, 
            sex: sex,
            company: company,
            photo: photo
        }
    })

    navigate('/'); 
  }

  const handleFileSubmit = (event) => {
    const file = event.target.files[0]; 
    
    const reader = new FileReader(); 
    reader.onload = (e) => {
        setPhoto(e.target.result); 
    }; 

    reader.readAsDataURL(file); 
    
  }

  return (
      <div className="signup-form">
        <Typography variant="h6">Cadastrando usuário</Typography>

          <TextField
            label="Nome"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            sx={{width: '75%'}}
          />

            <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{width: '75%'}}
            />

            <TextField
                label="Senha"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{width: '75%'}}
            />

            <TextField
                label="Data de Nascimento"
                type="date"
                variant="outlined"
                value={birth}
                onChange={(e) => setBirth(e.target.value)}
                InputLabelProps={{shrink: true}}
                sx={{width: '75%'}}
            />

            <TextField 
                label='Sexo'
                select
                value={sex}
                onChange={(e) => setSex(e.target.value)}  
                sx={{width: '75%'}}
            >
                <MenuItem value={'F'}>Feminino</MenuItem>
                <MenuItem value={'M'}>Masculino</MenuItem>
            </TextField>

            <TextField
                label='Empresa'
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                sx={{width: '75%'}}
            />

            <InputLabel>Foto de Perfil</InputLabel>
            <Input 
                type="file" 
                onChange={handleFileSubmit}
                sx={{width: '75%'}}
                />
        
        <Button variant="contained" onClick={handleSubmit}>Cadastrar</Button>
      </div>
  );
};
