import React from "react";
import { Meteor } from "meteor/meteor";
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { TasksMenu } from "./TasksMenu";
import { Task } from "./Task";
import { LoginForm } from "./LoginForm";
import { useTracker } from "meteor/react-meteor-data";
import { ConfigTask } from "./ConfigTask";

export const Router = () => {
  const user = useTracker(() => Meteor.user());
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/task" element={<Task />} />
        <Route path="/tasks" element={<TasksMenu user={user}/>} />
        <Route path="configTask" element={<ConfigTask />} />
      </Routes>
    </BrowserRouter>
  );
};
