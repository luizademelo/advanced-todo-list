import React from "react";
import { Meteor } from "meteor/meteor";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { TasksCollection } from "../db/TasksCollection";
import { DrawerMenu } from "./DrawerMenu";
import { TaskList } from "./TaskList";
import { useTracker } from "meteor/react-meteor-data";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const logout = () => {
  Meteor.logout();
  redirect("/");
};

export const TasksMenu = ({ user }) => {
  const navigate = useNavigate();

  const tasks = useTracker(() =>
    useTracker(() => {
      const handler = Meteor.subscribe("tasks");

      const tasks = TasksCollection.find({}).fetch();

      return tasks;
    })
  );

  if (!user) {
    navigate("/");
    return;
  }

  const handleAddTask = (e) => {
    navigate("/addTask");
  };

  console.log(user);

  return (
    <div>
        <Typography variant="h4">Tarefas cadastradas</Typography>
      <DrawerMenu user={user} />

    <div className="tasks-menu">
      <div>
        <div className="user" onClick={logout}>
          {user.username}
        </div>
        <TaskList tasks={tasks} user={user} />
      </div>
      <div className="add-button">
        <AddCircleOutlineIcon
          sx={{ cursor: "pointer", width: "30px", height: "30px" }}
          onClick={handleAddTask}
        ></AddCircleOutlineIcon>
      </div>
      <div className="user-photo">
          <img src={user.profile.photo} />
      </div>
    </div>
    </div>
  );
};
