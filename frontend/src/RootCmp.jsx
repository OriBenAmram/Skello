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
import { DynamicBoardActionModal } from './cmps/dynamic-actions/DynamicBoardActionModal.jsx'
// Action
import { toggleSideMenu, toggleModal } from './store/app/app.action.js'


export function RootCmp() {
  const dispatch = useDispatch();

  const isSideBarOpen = useSelector(state => state.appModule.isSideBarOpen);
  const popupModal = useSelector(state => state.appModule.popupModal);

  const onToggleSideMenu = () => {
    dispatch(toggleSideMenu())
  }

  const onToggleModal = ({ event, type = null }) => {
    dispatch(toggleModal({ event, type }))
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
      {(popupModal.isModalOpen) &&
        <DynamicBoardActionModal
          extraMembers={popupModal.extraMembers}
          task={popupModal.task}
          groupId={popupModal.groupId}
          isListening={popupModal.isListening}
          boardTitle={popupModal.boardTitle}
          member={popupModal.member}
          onToggleModal={onToggleModal}
          isModalOpen={popupModal.isModalOpen}
          event={popupModal.event}
          type={popupModal.type}
          posXAddition={popupModal.posXAddition}
          posYAddition={popupModal.posYAddition}

        />}
    </div >
  );

}

export default RootCmp;
