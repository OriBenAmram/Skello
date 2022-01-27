import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdOutlinePhotoCameraBack } from 'react-icons/md';

export function PopoverSideMenu({ isSideBarOpen, toggleSideMenu }) {
  const [isSearchOpen, setSearchState] = useState(false)
  const [searchText, setSearchText] = useState(null)

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
          <button className='primary-link-btn' onClick={() => {
            setSearchState(!isSearchOpen)
          }}>
            <HiOutlineSearch className='primary-icon' />
            Filter cards
          </button>
          <input autoFocus type="text" className={`primary-input filter-cards-input ${(isSearchOpen) ? 'open' : 'closed'}`} onChange={(ev) => {
            setSearchText(ev.target.value)
          }} />
          <button className='primary-link-btn'>
            <MdOutlinePhotoCameraBack className='primary-icon' />
            Change background
          </button>
        </section>
        <section className='background-teaser-section'>

        </section>
        <section className='activity-section'>

        </section>
      </section>
    </section>
  );
}
