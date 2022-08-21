import { Task } from "./pages/Task";
import { Member } from "./pages/Member";

export const routes = [
    {
        path: '/member',
        component: Member
    },
    {
        path: '/',
        component: Task
    },
]