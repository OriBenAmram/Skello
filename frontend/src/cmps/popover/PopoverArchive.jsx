import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Cmps
import { TaskPreview } from '../board/TaskPreview'

// Icons
import { IoIosArrowBack } from 'react-icons/io';
import { MdClose } from 'react-icons/md';


export function PopoverArchive({ toggleSideMenu, setPopoverContent }) {

    const board = useSelector(state => state.boardModule.board);
    console.log("🚀 ~ board", board)
    const dispatch = useDispatch();


    return (
        <div className="popover-archive">
            {/* Color section */}
            <div> < div className="popover-header flex align-center" >
                <button className='back-btn'
                    onClick={() => { setPopoverContent('main') }}>
                    <IoIosArrowBack />
                </button>
                <button className="primary-close-btn">
                    <MdClose className='primary-menu-close-btn'
                        onClick={() => { toggleSideMenu() }} />
                </button>
                <span>Archive</span>
                <hr className='bottom-hr' />
            </div>
                <div className="sidemenu-main-content">
                    <ul className="clean-list">
                        {board.archive.map((obj) => (
                            <li key={obj.task.id}>
                                <pre>{JSON.stringify(obj, null, 2)}</pre>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

}

