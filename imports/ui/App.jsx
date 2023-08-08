import React from "react";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LoginForm } from "./LoginForm";
import { useTracker } from "meteor/react-meteor-data";
import { TasksMenu } from "./TasksMenu";

export const App = () => {

  const user = useTracker(() => Meteor.user()); 

  return (
    <div className="main">
      { 
        user ? <TasksMenu user={user}/>
        : <LoginForm />
      }
    </div>
  );
};
