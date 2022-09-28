import { createRouter, createWebHistory } from "vue-router";
import TaskListComponent from "./components/TaskListComponent";
import TaskCreateComponent from "./components/TaskCreateComponent";
import TaskShowComponent from "./components/TaskShowComponent";
import TaskEditComponent from "./components/TaskEditComponent";
import FruitsInformation from "./components/FruitsInformation";

const routes = [
  {
    path: '/',
    name: 'task.list',
    component: TaskListComponent
  },
  {
    path: '/tasks/create',
    name: 'task.create',
    component: TaskCreateComponent
  },
  {
    path: '/tasks/:taskId',
    name: 'task.show',
    component: TaskShowComponent,
    props: true
  },
  {
    path: '/tasks/:taskId/edit',
    name: 'task.edit',
    component: TaskEditComponent,
    props: true
  },
  {
    path: '/fruits_information',
    name: 'fruits.information',
    component: FruitsInformation,
    props: true
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;