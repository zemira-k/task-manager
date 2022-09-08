import { storageService } from './generalService/storageService';
export const taskService = {
  query,
  add,
  getById,
  remove,
  update,
  getEmptyTask,
};

const entityType = 'task';

function query(filter = null) {
  let tasks = storageService.query(entityType) || [];
  if (filter) tasks = _filter(tasks, filter);
  return tasks;
}

function add(task) {
  const newTask = storageService.post(entityType, task);
  return newTask;
}

function getById(taskId) {
  const task = storageService.getById(entityType, taskId);
  return task;
}
function remove(taskId) {
  const newTasks = storageService.remove(entityType, taskId);
  return newTasks;
}
function update(taskToUpdate) {
  let updateTask = storageService.put(entityType, taskToUpdate);
  return updateTask;
}

function getEmptyTask() {
  // full hour - new Date().toTimeString().slice(0, 5)
  const currHour = new Date().getHours();
  return {
    time: { from: `${currHour}:00`, to: `${currHour + 1}:00` }, // When does the task need to be done
    title: '',
    teams: [{ _id: '', title: 'Cleaning', color: '' }],
    members: [],
    comments: 0,
    createdAt: new Date(), // Task creation date
    status: 'todo', // todo/done
  };
}

// const filter1 = { done: true, priority: 2, time: new Date(), text: "goalkeeper" }
// const filter2 = { done: null, priority: 2, time: null, text: "goalkeeper" }
function _filter(tasks, filter) {
  let filterTasks = tasks.filter(
    task =>
      (filter.priority && task.priority >= filter.priority) ||
      (filter.title && task.title === filter.text) ||
      (filter.desc && task.desc.include(filter.text)) ||
      (filter.status && task.status === filter.status)
  );
  return filterTasks;
}
