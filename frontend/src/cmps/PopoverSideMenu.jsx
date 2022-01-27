import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function PopoverSideMenu({ isSideBarOpen, toggleSideMenu }) {
  return (
    <section className="popover-side-menu" style={isSideBarOpen ? { right: '0px' } : { right: '-400px' }}>
      {/* Header */}
      <div className="popover-header flex align-center">
        <button className='primary-close-btn'
          onClick={() => {
            toggleSideMenu();
          }}>
          x
        </button>
        <span>Menu</span>
        <hr className='bottom-hr' />
      </div>
      <section className='sidemenu-main-content'>
      {/* Upper Options */}
        <section className='upper-sidemenu-options'>
          <button className='primary-link-btn'>Filter cards</button>
        </section>
        <section className='background-teaser-section'>

        </section>
        <section className='activity-section'>

        </section>
      </section>
    </section>
  );
}
