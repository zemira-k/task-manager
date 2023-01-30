import { Task } from './pages/Task';
import { Member } from './pages/Member';
import { Overview } from './pages/Overview';

export const routes = [
  {
    path: '/member',
    element: <Member />,
    title: 'Members',
  },
  {
    path: '/task',
    element: <Task />,
    title: 'Tasks',
  },
  {
    path: 'https://zemira-k.github.io/task-manager/',
    element: <Overview />,
    title: 'Overview',
  },
];
