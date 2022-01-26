import React from 'react';
import { Switch, Route } from 'react-router-dom';


// Routes
import routes from './routes.js';

// Cmps
import { AppHeader } from './cmps/AppHeader';
import { PopoverSideMenu } from './cmps/PopoverSideMenu.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './cmps/Loader';


// Action
import { toggleSideMenu } from './store/app/app.action.js'


export function RootCmp() {

  const isModalOpen = useSelector(state => state.appModule.isModalOpen);
  const dispatch = useDispatch();

  const onToggleSideMenu = () => {
    dispatch(toggleSideMenu())
  }

  return (
    <div className='root-cmp'>
      <AppHeader />
      <main>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} component={route.component} path={route.path} />
          ))}
        </Switch>
      </main>

      <PopoverSideMenu toggleSideMenu={onToggleSideMenu} isModalOpen={isModalOpen} />
    </div >
  );

}

export default RootCmp;
