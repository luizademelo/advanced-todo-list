import { List } from "@mui/material";
import React, { useState, useEffect } from "react";
import {Meteor} from 'meteor/meteor'
import { Task } from "./Task";

export const TaskList = ({ tasks, user }) => { 

  return (
    <List className="tasks-menu">
      {tasks.map((task) => (
          <Task key={task._id} task={task} user={user} />
      ))}
    </List>
  );
};