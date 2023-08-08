import React from "react";
import { BrowserRouter, Switch, Routes, Route  } from "react-router-dom";
import {App} from "./App";
import { TasksMenu } from "./TasksMenu";
import { LoginForm } from "./LoginForm";

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={App} />
            <Route path="/tasks" Component={TasksMenu} />
        </Routes>
    </BrowserRouter>
); 