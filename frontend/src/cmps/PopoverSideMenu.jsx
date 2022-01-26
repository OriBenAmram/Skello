import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export function PopoverSideMenu({isModalOpen, toggleSideMenu}) {
  return (
    <section className="popover-side-menu" style={isModalOpen ? {right: '0px'} : {right: '-400px'}}>
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
