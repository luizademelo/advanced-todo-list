import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import React from "react";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MenuIcon from "@mui/icons-material/Menu";

export const TaskList = ({ tasks, user }) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task._id} sx={{ bgcolor: "gray" }}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary={task.name} secondary={user.username} />
            <ListItemIcon sx={{justifyContent: 'end'}}>
                <MenuIcon />
            </ListItemIcon>
        </ListItem>
      ))}
    </List>
  );
};
