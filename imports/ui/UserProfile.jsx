import { Typography } from '@mui/material';
import React from 'react'; 
import {Meteor} from 'meteor/meteor'; 
import { TasksCollection } from '../db/TasksCollection';

export const UserProfile = ({user}) => {


    return (
    <div>
        <h1>Perfil de {user.username}</h1>
        <Typography>Email: {user.emails[0].address}</Typography>
    </div>
    );
}