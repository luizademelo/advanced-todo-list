import { Meteor } from "meteor/meteor";
import { TasksCollection } from "../db/TasksCollection";

const sortFilter = { sort: { createdAt: -1 } };

Meteor.publish("tasks", function publishTasks() {
  const search = { $or: [{ userId: this.userId }, { isPersonal: false }] };

  return TasksCollection.find(search, sortFilter);
});

Meteor.publish("notFinishedTasks", function publishTasks() {
  const search = {
    $or: [
      { userId: this.userId, status: { $ne: "Concluída" } },
      { isPersonal: false, status: { $ne: "Concluída" } },
    ],
  };

  return TasksCollection.find(search, sortFilter);
});

Meteor.publish("textFilteredTasks", function (text) {
  const search = {
    name: { $regex: text },
    $or: [{ userId: this.userId }, { isPersonal: false }],
  };

  return TasksCollection.find(search, sortFilter);
});
