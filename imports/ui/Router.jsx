import React from "react";
import { Meteor } from "meteor/meteor";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { TasksMenu } from "./TasksMenu";
import { Task } from "./TaskList";
import { LoginForm } from "./LoginForm";
import { useTracker } from "meteor/react-meteor-data";
import { AddTask } from "./AddTask";

export const Router = () => {
  const user = useTracker(() => Meteor.user());
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/tasks" element={<TasksMenu user={user}/>} />
        <Route path="/addTask" element={<AddTask user={user}/>} />
      </Routes>
    </BrowserRouter>
  );
};
