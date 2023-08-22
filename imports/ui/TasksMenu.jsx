import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import {
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Paper,
  Switch,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import { TasksCollection } from "../db/TasksCollection";
import { DrawerMenu } from "./DrawerMenu";
import { TaskList } from "./TaskList";
import { useTracker } from "meteor/react-meteor-data";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import SearchIcon from "@mui/icons-material/Search";

const logout = () => {
  Meteor.logout();
  redirect("/");
};

export const TasksMenu = ({ user }) => {
  const navigate = useNavigate();

  const [showCompleted, setShowCompleted] = useState(false);
  const [searchText, setSearchText] = useState("");

  const tasks = useTracker(() =>
    useTracker(() => {
      const noDataAvailable = { tasks: [] };

      if (showCompleted) {
        const handler = Meteor.subscribe("tasks");
        return TasksCollection.find({}).fetch();
      } else if (searchText != "") {
        console.log(searchText);
        const handler = Meteor.subscribe("textFilteredTasks", searchText);
        return TasksCollection.find({}).fetch();
      } else {
        const handler = Meteor.subscribe("notFinishedTasks");
        return TasksCollection.find({}).fetch();
      }
    })
  );

  if (!user) {
    navigate("/");
    return;
  }

  const handleAddTask = (e) => {
    navigate("/addTask");
  };

  return (
    <div className="tasks-menu-container">
      <div className="tasks-menu-header">
        <Typography variant="h6" sx={{ marginLeft: "15px" }}>
          Tarefas cadastradas
        </Typography>
        <div className="user">
          <Typography
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              alignSelf: "flex-end",
              marginBottom: "10px",
            }}
            onClick={logout}
          >
            {user.username}
          </Typography>
          <img src={user.profile.photo} />
        </div>
      </div>

      <FormGroup>
        <FormControlLabel
          control={<Switch onClick={() => setShowCompleted(!showCompleted)} />}
          sx={{ marginLeft: "20px" }}
          label="Mostrar tarefas concluídas"
        />
      </FormGroup>
      
      <div className="search-field">
      <Paper sx={{ display: "flex", justifyContent: "center", width: "250px" }}>
        <InputBase
          placeholder="Pesquisar Tarefas"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Paper>
      </div>

      <TaskList tasks={tasks} user={user} />
      <div className="add-button">
        <AddCircleOutlineIcon
          sx={{ cursor: "pointer", width: "30px", height: "30px" }}
          onClick={handleAddTask}
        ></AddCircleOutlineIcon>
      </div>
      <DrawerMenu user={user} />
    </div>
  );
};
