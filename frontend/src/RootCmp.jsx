import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Cmps
import { AppHeader } from './cmps/AppHeader';
import { PopoverSideMenu } from './cmps/PopoverSideMenu.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './cmps/Loader';



// Routes
import routes from './routes.js';

export function RootCmp() {


  const board = useSelector(state => state.boardModule.board);
  console.log('board:', board);



  return (
    <div className='root-cmp' style={(board) && { background: `${board.style.background}  center center / cover` }}>
      <AppHeader />
      <main>
        <Switch>
          {routes.map(route => (
            <Route key={route.path} component={route.component} path={route.path} />
          ))}
        </Switch>
      </main>

      <PopoverSideMenu />
    </div >
  );

}

export default RootCmp;
