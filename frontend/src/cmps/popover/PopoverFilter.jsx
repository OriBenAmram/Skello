import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

import { IoIosArrowBack } from 'react-icons/io';
// import { IoCheckbox } from "react-icons/io5";
// import { MdCheckBoxOutlineBlank, MdMoreHoriz } from "react-icons/md";
import { PopoverFilterUser } from './PopoverFilterUser';
import { PopoverFilterLabels } from './PopoverFilterLabels';
import { setFilter } from '../../store/board/board.action';


export function PopoverFilter({ toggleSideMenu, setPopoverContent }) {

    const board = useSelector(state => state.boardModule.board);
    const dispatch = useDispatch();
    console.log('board:', board);

    const [filterBy, setFilterBy] = useState({ members: [], labels: [], txt: '' })
    // const [checkedUserField, setCheckedUserField] = useState(false)


    useEffect(() => {
        dispatch(setFilter(filterBy))
    }, [filterBy]);




    return (
        <div>
            {/* Color section */}
            <div> < div className="popover-header flex align-center" >
                <button className='back-btn' onClick={() => {
                    setPopoverContent('main')
                }}><IoIosArrowBack /></button>
                <button className='primary-close-btn'
                    onClick={() => {
                        toggleSideMenu();
                        setPopoverContent('main')
                    }}>
                    x
                </button>
                <span>Filter</span>
                <hr className='bottom-hr' />
            </div >
                <section className='sidemenu-main-content filter-container'>
                    <p class="sub-title">Keyword</p>
                    <div className="search-container">
                        <input type="text"
                            placeholder="Enter a keyword…"
                            onChange={(ev) => setFilterBy({ ...filterBy, txt: ev.target.value })}
                            value={filterBy.txt}
                        />
                    </div>
                    <p className="sub-info-title">Search cards, members, labels, and more.</p>

                    <div>
                        <p className="sub-title">Members</p>
                    </div>

                    <ul className="clean-list">
                        {board.members.map(member => <PopoverFilterUser member={member} setFilterBy={setFilterBy} filterBy={filterBy} />
                        )}
                    </ul>

                    <hr />

                    <div>
                        <p className="sub-title">Labels</p>
                    </div>

                    {board && <ul className="labels-filter-list clean-list">
                        {board.labels.map(label => <PopoverFilterLabels label={label} setFilterBy={setFilterBy} filterBy={filterBy} />)}
                    </ul>}
                </section>
            </div>
        </div>
    );

}