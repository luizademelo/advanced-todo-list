import {Meteor} from 'meteor/meteor'; 
import {check} from 'meteor/check'; 
import { TasksCollection } from '../db/TasksCollection';


Meteor.methods({
    'tasks.insert'(name, description){
        check(name, String); 

        if(!this.userId){
            throw new Meteor.Error('Not Authorized'); 
        }

        TasksCollection.insert({
            name,
            description,
            createdAt: new Date(),
            userId: this.userId,
        })
    }, 

    'tasks.remove'(taskId){
        if(!this.userId){
            throw new Meteor.Error('Not Authorized');   
        }

        TasksCollection.remove(taskId); 
    }
})