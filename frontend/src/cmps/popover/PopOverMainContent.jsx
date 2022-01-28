import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdOutlinePhotoCameraBack } from 'react-icons/md';
import { AiOutlinePlus } from "react-icons/ai"
import colorTeaser from '../../assets/imgs/color-teaser-sidebar.jpg';
import imgsTeaser from '../../assets/imgs/imgs-teaser-sidebar.jpg';

// Cmps
import { ActivityContent } from './ActivityContent.jsx';

export function PopOverMainContent({ setPopoverContent, setSearchState, setSearchText, toggleSideMenu, isSideBarOpen, searchText, isSearchOpen }) {
    return (<div className='content-wrapper' >
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
            {/* BG */}
            <section className='background-teaser-section'>
                <div className="board-backgrounds-section-tile">

                    <div className="image-container" onClick={() => setPopoverContent('color')} >
                        <img src={colorTeaser} alt="" />
                        <div class="title">Colors</div>
                    </div>

                    <div className="image-container" onClick={() => setPopoverContent('image')}>
                        <img src={imgsTeaser} alt="" />
                        <div class="title">Photos</div>
                    </div>


                </div>

            </section>
            {/* <hr class="background-hr"></hr>
            <h2>Custom</h2>

            <div className="input-container">
                <AiOutlinePlus className="plus-icon" />
                <input type="file" className="upload-background" accept="image/*" />
            </div> */}
            {/* Activity */}
            <section className='activity-section'>
                <ActivityContent />
            </section>
        </section>
    </div>)
}