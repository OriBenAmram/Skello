import { HomePage } from './pages/HomePage.jsx';
import { Workspace } from './pages/Workspace.jsx';
import { BoardPage } from './pages/BoardPage.jsx';

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
    component: BoardPage,
  },
];

export default routes;
