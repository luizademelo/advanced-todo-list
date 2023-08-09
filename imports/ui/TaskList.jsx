import {List, ListItem, ListItemText } from '@mui/material';
import React from 'react'; 


export const TaskList = ({tasks}) => {
    console.log('task list:', tasks);
    return (
        <List>
        {
            tasks.map((task) => (
                <ListItem key={task._id}>
                    <ListItemText primary={task.name} secondary={task.description}/>
                </ListItem>
            ))

        }
        </List>
        )

    
}
