import React from 'react'; 
import {Meteor} from 'meteor/meteor'; 
import { Button, List, Typography, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { TasksCollection } from '../db/TasksCollection';
import { TaskList } from './TaskList';
import { useTracker } from 'meteor/react-meteor-data'



const logout = () => {
    Meteor.logout(); 
    redirect('/');  
}


export const TasksMenu = ({user}) => {
    
    const navigate = useNavigate(); 
    
    const tasks = useTracker(() => useTracker(() => {
        const handler = Meteor.subscribe('tasks'); 

        const tasks = TasksCollection.find({}).fetch(); 

        return tasks; 
    }))


    console.log(tasks); 
    
    if(!user){
        navigate('/'); 
        return; 
    }

    const handleConfigTask = (e) => {
        navigate('/configTask'); 
    }
    


    return (
        <div className='tasks-menu'>
            <div >
                <Typography>Tarefas cadastradas</Typography>
                <div className='user' onClick={logout}>{user.username}</div>
            </div>
            <Button 
                variant='contained'
                sx={{borderRadius:'50%', width: '45px', height: '50px', fontSize:'30px'}}
                onClick={handleConfigTask}
                
                >+</Button>
            <div>
                <TaskList tasks={tasks} />
            </div>
        </div>
    )
}