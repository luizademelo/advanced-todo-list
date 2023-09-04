import { Meteor } from "meteor/meteor";
import { TasksCollection } from "../db/TasksCollection";


Meteor.publish("tasks", function publishTasks(showCompleted, searchText) {
  const sortFilter = { sort: { createdAt: -1 } };
  
  const showCompletedFilter = showCompleted
    ? {}
    : { status: { $ne: "Concluída" } };

  const search = {
    $or: [{ userId: this.userId }, { isPersonal: false }],
    ...showCompletedFilter,
    name: {$regex: searchText}
  };

  return TasksCollection.find(search, sortFilter);
});

