import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { TasksCollection } from "../db/TasksCollection";
import { useTracker } from "meteor/react-meteor-data";

export const Home = ({ user }) => {
  const navigate = useNavigate();

  const { totalTasks, inProgressTasks, completedTasks } = useTracker(() => {
    const handler = Meteor.subscribe("tasks");

    const totalTasks = TasksCollection.find({ userId: user._id }).count();
    const inProgressTasks = TasksCollection.find({
      userId: user._id,
      status: "Em Andamento",
    }).count();
    const completedTasks = TasksCollection.find({
      userId: user._id,
      status: "Concluída",
    }).count();
    return { totalTasks, inProgressTasks, completedTasks };
  });

  const handleViewTasks = () => {
    navigate("/tasks");
  };

  return (
    <div>
      <h1>total de tarefas: {totalTasks}</h1>
      <h1>tarefas em andamento: {inProgressTasks} </h1>
      <h1>tarefas concluídas: {completedTasks} </h1>
      <Button onClick={handleViewTasks}>Visualizar tarefas</Button>
    </div>
  );
};
