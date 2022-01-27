import { useRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';

// CMPS
import { ProfileModalContent } from './ProfileModalContent.jsx'
import { AddMemberModalContent } from './AddMemberModalContent.jsx'
import { OtherMemberModalContent } from './OtherMemberModalContent.jsx'

export function DynamicBoardActionModal({ isModalOpen, member, onToggleModal, type, event, posXAddition = 0, posYAddition = 0 }) {
    const dispatch = useDispatch();

    // const wrapperRef = useRef(null)
    // useEffect(() => {
    //     document.addEventListener("mousedown", handleClickOutside, true);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside, false);
    //     };
    // }, []);

    const handleClickOutside = async (ev) => {
        // dispatch(toggleModal({ event: ev, type: 'profile' }))
        // if (isModalOpen && wrapperRef.current) {
        //     console.log('from handle click outside')
        //     await onToggleModal({ev, type: 'profile'})
        // }
    }

    const getContentForDisplay = () => {
        switch (type) {
            case 'profile':
                return <ProfileModalContent onToggleModal={onToggleModal} posXAddition={posXAddition} type={type} />
            case 'addMemberToBoard':
                return <AddMemberModalContent onToggleModal={onToggleModal} posXAddition={posXAddition} type={type} />
            case 'otherMemberModal':
                return <OtherMemberModalContent member={member} onToggleModal={onToggleModal} posXAddition={posXAddition} type={type} />
        }
    }
    const getModalPositionStyle = () => {
        const { top, left, height } = event.target.getBoundingClientRect();
        if(type === 'otherMemberModal') return { top: top + height + posYAddition, left: left + posXAddition, border: 'none' }
        return { top: top + height + posYAddition, left: left + posXAddition }
    }
    if (!event) return <></>
    return (
        <section className='dynamic-action-modal' style={getModalPositionStyle()}>
            {getContentForDisplay()}
        </section>
    )
}