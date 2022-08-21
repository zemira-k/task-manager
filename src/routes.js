import { Task } from "./pages/Task";
import { Members } from "./pages/Members";

export const routes = [
  {
    path: "/member",
    component: Members,
  },
  {
    path: "/",
    component: Task,
  },
];
