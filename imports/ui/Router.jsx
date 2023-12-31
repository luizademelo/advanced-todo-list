import React from "react";
import { Meteor } from "meteor/meteor";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { TasksMenu } from "./TasksMenu";
import { useTracker } from "meteor/react-meteor-data";
import { AddTask } from "./AddTask";
import {App} from './App'
import { EditTask } from "./EditTask";
import { SignUpForm } from "./SignUpForm";
import { Home } from "./Home";
import { UserProfile } from "./UserProfile";
import { Error404 } from "./Error404";


export const Router = () => {
  const user = useTracker(() => Meteor.user());
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/home" element={<Home user={user}/>} />
        <Route path="/tasks" element={<TasksMenu user={user}/>} />
        <Route path="/addTask" element={<AddTask user={user}/>} />
        <Route path="/editTask" Component={EditTask} />
        <Route path="/userProfile" element={<UserProfile user={user}/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};
