import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import { TasksCollection } from '../imports/db/TasksCollection';
import '../imports/api/tasksMethods'
import '../imports/api/tasksPublications'

const SEED_USERNAME = 'meteorite'; 
const SEED_PASSWORD = 'password'; 

Meteor.startup(() => {

  if(!Accounts.findUserByUsername(SEED_USERNAME)){
    Accounts.createUser({
      username: SEED_USERNAME, 
      password: SEED_PASSWORD
    }); 
  }
  
  const user = Accounts.findUserByUsername(SEED_USERNAME); 

});
