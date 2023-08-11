import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [sex, setSex] = useState("");
  const [company, setCompany] = useState("");

  // TODO
  // adicionar foto

  return (
      <div className="signup-form">
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
      </div>
  );
};
