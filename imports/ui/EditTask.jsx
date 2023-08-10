import React, {useEffect} from 'react';
import { useNavigate, useLocation} from 'react-router-dom';

export const EditTask = () => {

    const location = useLocation(); 
    const task = location.state?.task; 

    // const navigate = useNavigate(); 
    // if(!task){
    //     navigate('/'); 
    // }

    console.log('editando tarefa', task); 

    return (
        <h1>Editar tarefa</h1>
    ); 
}