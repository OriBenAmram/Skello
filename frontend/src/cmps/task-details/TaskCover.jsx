import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSquareHalf } from "react-icons/bs";   

// CMPS
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'

export function TaskCover({ board, group, task }) {

    const dispatch = useDispatch();
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedImageUrl, setSelectedImageUrl] = useState(null);
    const [modal, setModal] = useState({ isModalOpen: false, pos: null, type: null });

    useEffect(() => {
        setBackground()
    }, [board, task]);

    
    const toggleModal = ({ event, type }) => {
        // In case the modal is open somewhere
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }
        setModal({ isModalOpen: true, pos: { clientY: event.clientY, clientX: event.clientX }, type , event})
    }


    const getImageColorByTitle = (title) => {
        switch (title) {
            case 'forest':
                return 'rgb(48 124 77)'
            case 'bird':
                return 'rgb(86 129 132)'
            case 'kayak':
                return 'rgb(147 117 97)'
            case 'sunset':
                return 'rgb(109 111 224)'
            case 'bonfire':
                return 'rgb(230 194 147)'
            case 'jerusalem':
                return 'rgb(15 93 167)'

            default:
                return '#212427'
        }
    }

    const setBackground = async () => {
        const { title, url } = task.style.backgroundImage
        if (url) {
            const imageModifiedColor = getImageColorByTitle(title)
            await setSelectedColor(imageModifiedColor)
            setSelectedImageUrl(url)
        }
        else {
            setSelectedImageUrl(null)
            setSelectedColor(task.style.backgroundColor)
        }
    }

    const getModifiedTextColor = () =>  {
        return { color: 'white' }
    }

    if (!selectedColor) return <></>

    return (
        <section className={`details-cover ${(selectedImageUrl) ? 'open' : ''}`} style={{ backgroundColor: `${selectedColor}` }}>
            {selectedImageUrl && <div className='image-container'>
                {/* <div style={{ background: `url(${selectedImageUrl}) center center / cover` }} className='image-preview'>
                </div> */}
                <img src={`${selectedImageUrl}`} className='image-preview' />
            </div>}
            {(task.style.backgroundColor || task.style.backgroundImage.url) && <button className='cover-btn' style={ getModifiedTextColor() } onClick={(event) => {
                toggleModal({ event, type: 'cover' })
            }}> <BsSquareHalf style={{ transform: `rotate(270deg)`, height: '10px' }} className='cover-icon'/> Cover</button>}
            {modal.isModalOpen && <DynamicActionModal task={task} group={group} board={board} isDetails={true} posYAddition={20} toggleModal={toggleModal} type={modal.type} event={modal.event} />}
        </section>
    );
}
