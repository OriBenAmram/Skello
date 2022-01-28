import React, { useState, useEffect } from 'react';
// cmps
import { PopoverBgPicker } from './popover/PopoverBgpicker';
import { PopOverMainContent } from './popover/PopOverMainContent';


export function PopoverSideMenu({ isSideBarOpen, toggleSideMenu }) {
  const [isSearchOpen, setSearchState] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [popoverContent, setPopoverContent] = useState('main')

  console.log('popoverContent:', popoverContent);


  return (
    <section className="popover-side-menu" style={isSideBarOpen ? { right: '0px' } : { right: '-400px' }}>
      {(popoverContent === 'main') && <PopOverMainContent setSearchText={setSearchText} setSearchState={setSearchState} searchText={searchText} isSearchOpen={isSearchOpen} toggleSideMenu={toggleSideMenu} isSideBarOpen={isSideBarOpen} setPopoverContent={setPopoverContent} />}
      {(popoverContent === 'color' || popoverContent === 'image') &&
        < PopoverBgPicker popoverContent={popoverContent} isSideBarOpen={isSideBarOpen} toggleSideMenu={toggleSideMenu} />}

    </section>
  );
}
