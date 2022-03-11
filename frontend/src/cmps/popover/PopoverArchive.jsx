import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Cmps
import { ArchiveTaskPreview } from '../board/ArchiveTaskPreview';

// Icons
import { IoIosArrowBack } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

export function PopoverArchive({ toggleSideMenu, setPopoverContent }) {
    const board = useSelector(state => state.boardModule.board);
    return (
        <div className="popover-archive">

            <div className="popover-header flex align-center">
                <button
                    className="back-btn"
                    onClick={() => {
                        setPopoverContent('main');
                    }}>
                    <IoIosArrowBack />
                </button>
                <button className="primary-close-btn">
                    <MdClose
                        className="primary-menu-close-btn"
                        onClick={() => {
                            toggleSideMenu();
                        }}
                    />
                </button>
                <span>Archive</span>
                <hr className="bottom-hr" />
            </div>
            <div className="sidemenu-main-content">
                <ul className="clean-list flex column">
                    {board?.archive.map(archiveItem => (
                        <li key={archiveItem.task.id}>
                            <ArchiveTaskPreview task={archiveItem.task} groupId={archiveItem.groupId} />
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}
