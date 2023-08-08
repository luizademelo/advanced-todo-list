import React from 'react'; 
import {Meteor} from 'meteor/meteor'; 
import { Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { redirect } from 'react-router-dom';



const logout = () => {
    Meteor.logout(); 
    redirect('/');  
}


export const TasksMenu = ({user}) => {
    
    const navigate = useNavigate(); 
    
    const handleConfigTask = (e) => {
        navigate('/configTask'); 
    }
    
    if(!user){
        navigate('/'); 
        return; 
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
        </div>
    )
}