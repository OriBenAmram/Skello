import { HomePage } from './pages/HomePage.jsx';
import { Workspace } from './pages/Workspace.jsx';
import { BoardApp } from './pages/BoardApp.jsx';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/workspace',
    component: Workspace,
  },
  {
    path: '/board/:id',
    component: BoardApp,
  },
];

export default routes;
