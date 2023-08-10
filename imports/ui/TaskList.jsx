import { List, ListItem, ListItemText, ListItemIcon, Menu, MenuItem } from "@mui/material";
import React, { useState, useEffect } from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate, Navigate } from "react-router-dom";
import {Meteor} from 'meteor/meteor'
import { Task } from "./Task";

export const TaskList = ({ tasks, user }) => { 




  return (
    <List>
      {tasks.map((task) => (
          <Task task={task} user={user} />
      ))}
    </List>
  );
};
