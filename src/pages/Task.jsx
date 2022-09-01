import { useState } from 'react';
import { TaskTable } from '../cmps/TaskTable';
import { taskService } from '../services/taskService';
import { AddTask } from '../cmps/AddTask';

export const Task = () => {
  const [tasks, setTasks] = useState(taskService.query());
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function onUpdateTask(taskToUpdate) {
    taskService.update(taskToUpdate);
    setTasks(prevTasks =>
      prevTasks.map(task => {
        if (task._id === taskToUpdate._id) return taskToUpdate;
        return task;
      })
    );
  }

  function onAddTask(taskToAdd) {
    taskService.add(taskToAdd);
    setTasks(prevTasks => [...prevTasks, taskToAdd]);
  }

  if (!tasks) return <div>loading..</div>;
  return (
    <section className="task-page main-page pad-1">
      <section className="actions left flex space-between align-center gap-1 mar-t-56">
        <div className="left flex align-center gap-1">
          <button
            className="tasks-add-button fs20 lh-35 br-10"
            onClick={() => setTaskToUpdate(taskService.getEmptyTask())}
          >
            Add new task +
          </button>
          <button className="tasks-filter-btn flex align-center justify-center br-50">
            <div className="filter-icon" />
            filter
          </button>
          <button className="tasks-sort-btn flex align-center justify-center br-50">
            <div className="sort-icon" />
            sort
          </button>
        </div>
        <span>
          Showing <span className="bold">{tasks.length} tasks</span>
        </span>
      </section>
      <TaskTable
        tasks={tasks}
        updateTaskFn={onUpdateTask}
        setTaskToUpdate={setTaskToUpdate}
      />
      {!!taskToUpdate && (
        <AddTask
          task={taskToUpdate}
          addTaskFn={onAddTask}
          updateTaskFn={onUpdateTask}
          closeModalFn={() => setTaskToUpdate(null)}
        />
      )}
    </section>
  );
};
