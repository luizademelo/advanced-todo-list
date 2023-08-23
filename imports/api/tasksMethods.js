import {Meteor} from 'meteor/meteor'; 
import {check} from 'meteor/check'; 
import { TasksCollection } from '../db/TasksCollection';


Meteor.methods({
    'tasks.insert'(name, description, isPersonal, username, date){
        check(name, String); 
        check(isPersonal, Boolean); 

        if(!this.userId){
            throw new Meteor.Error('Not Authorized'); 
        }

        TasksCollection.insert({
            name,
            description,
            status: 'Cadastrada', 
            date,
            createdAt: new Date(),
            userId: this.userId,
            username, 
            isPersonal
        })
    }, 

    'tasks.remove'(taskId){
        if(!this.userId){
            throw new Meteor.Error('Not Authorized');   
        }

        TasksCollection.remove(taskId); 
    },

    'tasks.update'(taskId, name, description, status, isPersonal){
        check(taskId, String); 
        check(name, String); 
        check(description, String); 

        if(!this.userId){
            throw new Meteor.Error('Not Authorized')
        }

        TasksCollection.update(taskId, {
            $set: {
                name,
                description,
                status,
                isPersonal
            }
        }); 
    }


})