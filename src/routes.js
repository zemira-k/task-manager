import { Task } from "./pages/Task";
import { Member } from "./pages/Member";
import { Overview } from "./pages/Overview";

export const routes = [
    {
        path: '/member',
        element: <Member />,
        title: 'Members'
    },
    {
        path: '/',
        element: <Task />,
        title: 'Tasks'
    },
    {
        path: '/overview',
        element: <Overview />,
        title: 'Overview'
    },
]