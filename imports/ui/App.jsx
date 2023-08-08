import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import {Meteor} from 'meteor/meteor'
import { useTracker } from "meteor/react-meteor-data";
import { useNavigate } from "react-router-dom";
import { TasksMenu } from "./TasksMenu";

export const App = () => {

  const user = useTracker(() => Meteor.user()); 
  const navigate = useNavigate(); 

  return (
    <div className="main">
    {
      user ? navigate('/tasks') : 
        <LoginForm />
    }
    </div>
  );
};
