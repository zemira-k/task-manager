import { Task } from "./pages/Task";
import { Contact } from "./pages/Contact";

export const routes = [
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/',
        component: Task
    },
]