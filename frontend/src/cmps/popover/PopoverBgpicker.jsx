import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'

// services
import { boardService } from '../../services/board.service';

// cmps
import { onSaveBoard } from '../../store/board/board.action';

export function PopoverBgPicker({ isSideBarOpen, toggleSideMenu, popoverContent, setPopoverContent }) {

    const [searchTxt, setSearchTxt] = useState('')
    const [imgs, setImgs] = useState([]);
    const dispatch = useDispatch()
    const board = useSelector(state => state.boardModule.board);

    useEffect(() => {
        getUnsplashImgs()
    }, [searchTxt]);

    const getUnsplashImgs = async () => {
        const unsplashImgs = await boardService.queryImages(searchTxt);
        setImgs(unsplashImgs)
    }

    const gColors = [
        'rgb(210, 144, 52)',
        ' rgb(0, 121, 191)',
        'rgb(176, 70, 50)',
        ' rgb(81, 152, 57)',
        'rgb(205, 90, 145)',
        'rgb(137, 96, 158)',
        'rgb(0, 174, 204)',
        'rgb(75, 191, 107)',
        'rgb(131, 140, 145)'

    ]


    const onSaveBg = (background, isImg = false) => {
        board.style = (isImg) ? { background: `url(${background})` } : { background };
        dispatch(onSaveBoard(board))
    }

    return (
        <div>
            {/* Color section */}
            {(popoverContent === 'color') && <div> < div className="popover-header flex align-center" >
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
                <span>Colors</span>
                <hr className='bottom-hr' />
            </div >
                <section className='sidemenu-main-content bg-picker'>
                    <div className="bg-options-container">
                        {gColors.map((color, idx) =>

                            <div className="bg-preview"
                                onClick={() => onSaveBg(color)}
                                key={idx} style={{ background: `${color} center center / cover` }}>

                            </div>)}
                    </div>
                </section></div>}


            {/* unsplash section */}

            {(popoverContent === 'image') && <div> < div className="popover-header flex align-center" >
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
                <span>Photos by Unsplash</span>
                <hr className='bottom-hr' />
            </div >
                <section className='sidemenu-main-content bg-picker'>
                    <div className="search-imgs">
                        <input
                            type="text"
                            placeholder="Photos"
                            value={searchTxt}
                            onChange={(ev) => setSearchTxt(ev.target.value)}
                        />
                        <AiOutlineSearch className="search-icon" />
                    </div>
                    {((imgs?.length)) ? <div>
                        <div className="bg-options-container">
                            {imgs.map((img, idx) =>

                                <div className="bg-preview"
                                    onClick={() => onSaveBg(img.urls.regular, true)}
                                    key={idx} style={{ background: `url(${img.urls.small}) center center / cover` }}>

                                </div>)}
                        </div>
                    </div> : <div class="no-results">Sorry, your search didn't return any results. Please try again!</div>}
                </section></div>}
        </div>
    );

}