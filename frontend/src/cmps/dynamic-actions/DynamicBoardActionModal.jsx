import { useRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';

// CMPS
import { MembersModalContent } from './MembersModalContent.jsx'
import { LabelsModalContent } from './LabelsModalContent.jsx'
import { CheckListModalContent } from './CheckListModalContent.jsx'
import { AttachmentModalContent } from "./AttachmentModalContent.jsx";
import { TodoOptions } from './TodoOptions.jsx';
import { EditAttachmentModalContent } from './EditAttachmentModalContent.jsx';
import { CoverModalContent } from './CoverModalContent.jsx'
import { DatesModalContent } from './DatesModalContent.jsx'
import { ProfileModalContent } from './ProfileModalContent.jsx'
import { AddMemberModalContent } from './AddMemberModalContent.jsx'
import { CreateBoardContent } from './CreateBoardContent.jsx';

// Actions
import { toggleModal } from '../../store/app/app.action.js'


export function DynamicBoardActionModal({ isModalOpen, onToggleModal, type, event, posXAddition = 0, posYAddition = 0 }) {
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
        }
    }
    const getModalPositionStyle = () => {
        const { top, left, height } = event.target.getBoundingClientRect();
        return { top: top + height + posYAddition, left: left + posXAddition }
    }
    if (!event) return <></>
    return (
        <section className='dynamic-action-modal' style={getModalPositionStyle()}>
            {getContentForDisplay()}
        </section>
    )
}