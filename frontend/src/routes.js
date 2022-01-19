import { HomePage } from './pages/HomePage.jsx';
import { Workspace } from './pages/Workspace.jsx';
import { BoardApp } from './pages/BoardApp.jsx';
import { TaskDetails } from './pages/TaskDetails.jsx';
import { LoginSignup } from './pages/LoginSignup.jsx';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/login',
    component: LoginSignup,
  },
  {
    path: '/signup',
    component: LoginSignup,
  },
  {
    path: '/workspace',
    component: Workspace,
  },
  {
    path: '/board/:boardId/:groupId/:taskId',
    component: TaskDetails,
  },
  {
    path: '/board/:id',
    component: BoardApp,
  },
];

export default routes;
