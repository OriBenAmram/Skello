import React from 'react';
import { Switch, Route } from 'react-router-dom';


// Routes
import routes from './routes.js';

// Cmps
import { AppHeader } from './cmps/AppHeader';
import { PopoverSideMenu } from './cmps/PopoverSideMenu.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './cmps/Loader';
import { DynamicActionModal } from './cmps/dynamic-actions/DynamicActionModal.jsx'
// Action
import { toggleSideMenu, toggleModal } from './store/app/app.action.js'


export function RootCmp() {
  const dispatch = useDispatch();

  const isSideBarOpen = useSelector(state => state.appModule.isSideBarOpen);
  const popupModal = useSelector(state => state.appModule.popupModal);


  const onToggleSideMenu = () => {
    dispatch(toggleSideMenu())
  }

  const onToggleModal = () => {
    // dispatch(toggleModal())
    console.log('onToggleModal')
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

      <PopoverSideMenu toggleSideMenu={onToggleSideMenu} isSideBarOpen={isSideBarOpen} />
      {(popupModal.isModalOpen) && <DynamicActionModal event={popupModal.event} type={popupModal.type} posXAddition={popupModal.posXAddition} posYAddition={popupModal.posYAddition} toggleModal={onToggleModal} />}
    </div >
  );

}

export default RootCmp;
