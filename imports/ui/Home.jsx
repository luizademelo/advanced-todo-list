import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { TasksCollection } from "../db/TasksCollection";
import { useTracker } from "meteor/react-meteor-data";

export const Home = ({ user }) => {
  const navigate = useNavigate();

  const { totalTasks, inProgressTasks, completedTasks } = useTracker(() => {
    const handler = Meteor.subscribe("tasks");

    const totalTasks = TasksCollection.find({}).count();
    const inProgressTasks = TasksCollection.find({
      status: "Em Andamento",
    }).count();
    const completedTasks = TasksCollection.find({
      status: "Concluída",
    }).count();
    return { totalTasks, inProgressTasks, completedTasks };
  });

  const handleViewTasks = () => {
    navigate("/tasks");
  };

  return (
    <div className="cards">
      <Card>
        <CardContent>
            <Typography>Tarefas Cadastradas:</Typography>
            <Typography>{totalTasks}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
            <Typography>Tarefas em andamento:</Typography>
            <Typography>{inProgressTasks}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
            <Typography>Tarefas Concluídas:</Typography>
            <Typography>{completedTasks}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardActions>
            <Button onClick={handleViewTasks}>Visualizar Tarefas</Button>
        </CardActions>
      </Card>
    </div>
  );
};
