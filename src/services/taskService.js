import { storageService } from "./generalService/storageService"
export const taskService = {
    query,
    add,
    getById,
    remove,
    update,
    getEmptyTask
}

const entityType = "task";

function query(filter = null) {
    let tasks = storageService.query(entityType) || [];
    if (filter) tasks = _filter(tasks, filter);
    return tasks
}

function add(newTask) {
    newTask = storageService.post(entityType, newTask);
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
function update(updateTask) {
    updateTask = storageService.put(entityType, updateTask);
    return updateTask;
}

function getEmptyTask() {
    return {
        time: new Date(), // When does the task need to be done
        title: '',
        teams: [],
        members: [],
        createdAt: new Date(), // Task creation date
        status: 'todo', // todo/done
    }
}

// const filter1 = { done: true, priority: 2, time: new Date(), text: "goalkeeper" }
// const filter2 = { done: null, priority: 2, time: null, text: "goalkeeper" }
function _filter(tasks, filter) {

    let filterTasks = tasks.filter(task =>
    (
        (task.priority >= filter.priority) &&
        (task.title.include(filter.text) ||
            task.desc.include(filter.text))
    ));
    return filterTasks;
}

