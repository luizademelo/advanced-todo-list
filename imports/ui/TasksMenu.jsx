import React from 'react'; 
import {Meteor} from 'meteor/meteor'; 


const logout = () => Meteor.logout(); 


export const TasksMenu = ({user}) => {

    
    return (
        <div className='tasks-menu'>

            <div className='user' onClick={logout}>{user.username}</div>
        </div>
    )
}