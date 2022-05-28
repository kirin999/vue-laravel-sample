import { createRouter, createWebHistory } from "vue-router";
import TaskListComponent from "./components/TaskListComponent";

const routes = [
  {
    path: '/tasks',
    name: 'task.list',
    component: TaskListComponent
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;