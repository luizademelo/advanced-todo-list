import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const ConfigTask = ({ task }) => {
  return (
    <div className="config-task-menu">
      <div className="task-form">
        <TextField variant="standard" label="Nome"></TextField>
        <TextField variant="standard" label="Descrição"></TextField>
        <TextField variant="standard" label="Data"></TextField>
      </div>
      <div className="task-form-buttons">
        <div>
          <Button id="form-button" variant="contained">
            Cancelar
          </Button>
        </div>
        <div>
          <Button id="form-button" variant="contained">
            Salvar
          </Button>
        </div>
      </div>
    </div>
  );
};
