import {Meteor} from 'meteor/meteor'; 
import { TasksCollection } from '../db/TasksCollection';

Meteor.publish('tasks', function publishTasks(){
    return TasksCollection.find({$or: [{userId: this.userId} , {isPersonal: false}]}); 
})

Meteor.publish('notFinishedTasks', function publishTasks(){
    return TasksCollection.find({$or: [{userId: this.userId, status: {$ne: 'Concluída'}}, {isPersonal: false, status: {$ne: 'Concluída'}}]})
})