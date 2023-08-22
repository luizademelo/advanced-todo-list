import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import {
  FormControlLabel,
  FormGroup,
  InputBase,
  Pagination,
  Paper,
  Stack,
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

const logout = () => {
  Meteor.logout();
  redirect("/");
};

export const TasksMenu = ({ user}) => {
  const navigate = useNavigate();

  const [showCompleted, setShowCompleted] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [skipPages, setSkipPages] = useState(0); 
  const [page, setPage] = useState(1); 

  const {tasks, tasksCount} = useTracker(() => {
    
    const noDataAvailable = { tasks: [] };
    let tasks,tasksCount;
    if (showCompleted) {
      const handler = Meteor.subscribe("tasks");
      tasks = TasksCollection.find({}, {skip: skipPages, limit: 4}).fetch();
      tasksCount = TasksCollection.find({}).count(); 
    } else if (searchText != "") {
      const handler = Meteor.subscribe("textFilteredTasks", searchText);
      tasks = TasksCollection.find({},{skip: skipPages,limit: 4}).fetch()
      tasksCount = TasksCollection.find({}).count(); 
    } else {
      const handler = Meteor.subscribe("notFinishedTasks");
      tasks = TasksCollection.find({},{skip: skipPages, limit: 4}).fetch()
      tasksCount = TasksCollection.find({}).count(); 
    }
    return {tasks, tasksCount}; 
  }); 

  console.log(tasks);

  if (!user) {
    navigate("/");
    return;
  }

  const handleAddTask = (e) => {
    navigate("/addTask");
  };

  const handlePageChange = (event, page) => {
    setSkipPages((page-1)*4); 
    console.log(page, skipPages); 
    setPage(page); 
  }

  return (
    <div className="tasks-menu-container">
      <div className="tasks-menu-header">

      <DrawerMenu user={user} />
      
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
    
      <div className="switch-completed">
        <FormGroup>
          <FormControlLabel
            control={<Switch onClick={() => setShowCompleted(!showCompleted)} />}
            label="Mostrar tarefas concluídas"
          />
        </FormGroup>
      </div>

      <div className="search-field">
      <Paper sx={{ display: "flex", justifyContent: "center", width: "250px" }}>
        <InputBase
          placeholder="Pesquisar Tarefas"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Paper>
      </div>

      <TaskList tasks={tasks} user={user} />
      
      <div className="pagination">
        <Stack spacing={2}>
          <Pagination 
            count={Math.ceil(tasksCount/4)} 
            page={page}
            onChange={handlePageChange}
            />
        </Stack>
      </div>

      <div className="add-button">
        <AddCircleOutlineIcon
          sx={{fontSize: '2.5rem'}}
          onClick={handleAddTask}
        ></AddCircleOutlineIcon>
      </div>
 
    </div>
  );
};
