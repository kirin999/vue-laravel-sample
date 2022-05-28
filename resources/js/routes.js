import { createRouter, createWebHistory } from "vue-router";
import TaskListComponent from "./components/TaskListComponent";
import TaskShowComponent from "./components/TaskShowComponent";

const routes = [
  {
    path: '/tasks',
    name: 'task.list',
    component: TaskListComponent
  },
  {
    path: '/tasks/:taskId',
    name: 'task.show',
    component: TaskShowComponent,
    props: true
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;