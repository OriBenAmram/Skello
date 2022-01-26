import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export function PopoverSideMenu({isSideBarOpen, toggleSideMenu}) {
  return (
    <section className="popover-side-menu" style={isSideBarOpen ? {right: '0px'} : {right: '-400px'}}>
      <div className="popover-header flex align-center">
        <button
          onClick={() => {
            toggleSideMenu();
          }}>
          close
        </button>
        <span>menu</span>
      </div>
    </section>
  );
}
