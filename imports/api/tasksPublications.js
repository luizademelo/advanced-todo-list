import {Meteor} from 'meteor/meteor'; 
import { TasksCollection } from '../db/TasksCollection';

Meteor.publish('tasks', function publishTasks(){
    return TasksCollection.find({$or: [{userId: this.userId} , {isPersonal: false}]}); 
})

Meteor.publish('notFinishedTasks', function publishTasks(){
    return TasksCollection.find({$or: [{userId: this.userId, status: {$ne: 'Concluída'}}, {isPersonal: false, status: {$ne: 'Concluída'}}]}); 
})

Meteor.publish('textFilteredTasks', function(text){
    const search = {name: {$regex: text}, 
                    $or: [
                        {userId: this.userId}, 
                        {isPersonal: false}
                    ],
                   }; 

    return TasksCollection.find(search); 
})