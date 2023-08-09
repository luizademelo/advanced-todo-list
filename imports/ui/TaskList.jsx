import {List, ListItem, ListItemText } from '@mui/material';
import React from 'react'; 


export const TaskList = ({tasks}) => {
    return (
        <List>
        {
            tasks.map((task) => (
                <ListItem disablePadding>
                    <ListItemText primary={task.name} secondary={task.description}/>
                </ListItem>
            ))

        }
        </List>
        )
}
