import { BrowserRouter, Switch, Routes, Route  } from "react-router-dom";
import {App} from "./App";
import React from "react";

export const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={App}/>
        </Routes>
    </BrowserRouter>
); 