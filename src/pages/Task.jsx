import { useState } from 'react';
import { taskService } from '../services/taskService';

export const Task = () => {
  const [tasks, setTasks] = useState(taskService.query());
  return <section className="task-page"></section>;
};
