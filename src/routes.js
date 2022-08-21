import { Task } from "./pages/Task";
import { Member } from "./pages/Member";

export const routes = [
    {
        path: '/member',
        element: Member,
        title: 'Members'
    },
    {
        path: '/',
        element: Task,
        title: 'Tasks'
    },
]