import {Meteor} from 'meteor/meteor'; 
import { TasksCollection } from '../db/TasksCollection';

Meteor.publish('tasks', function publishTasks(){
    return TasksCollection.find({$or: [{userId: this.userId} , {isPersonal: false}]}); 
})