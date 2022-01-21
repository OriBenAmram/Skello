import { useState } from "react";

import { GrClose } from "react-icons/gr";

// CMPS
import { MembersModalContent } from './MembersModalContent.jsx'
import { LabelsModalContent } from './LabelsModalContent.jsx'
import { CheckListModalContent } from './CheckListModalContent.jsx'

export function DynamicActionModal({ toggleModal, type, pos, task, group, board }) {

    const [modalContent, setModalContent] = useState({ isSearch: true });
    const [selectedLabel, setSelectedLabel] = useState(null);

    // Switch if that decide if
    const getContentForDisplay = () => {
        switch (type) {
            case 'members':
                return <MembersModalContent />
            case 'labels':
                return <LabelsModalContent task={task} group={group} board={board} />
            case 'labels-to-add':
                return <LabelsModalContent task={task} group={group} board={board} />
            case 'labels-to-edit':
                return <LabelsModalContent task={task} group={group} board={board} />
            case 'checklist':
                return <CheckListModalContent />
        }
    }

    const getPositionByType = () => {
        const { clientX, clientY } = pos
        console.log('clientY:', clientY);
        console.log('clientX:', clientX);
        switch (type) {
            case 'labels':
                return { clientY: clientY - 300, clientX: 770 }
            
            default:
                return { clientY, clientX: 732 }
        }
    }

    const modalPosition = getPositionByType()
    console.log('modalPosition:', modalPosition);


    return (
        // <section className='dynamic-action-modal' style={{ top: `${pos.clientY}px`, left: `${pos.clientX}px` }} >
        <section className='dynamic-action-modal' style={{ top: `${modalPosition.clientY}px`, left: `${modalPosition.clientX}px` }} >
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content'/></button>
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </section>
            <section className='modal-content'>
                {/* <input placeholder={`Search ${type}...`} type="text" className='modal-main-input' autoFocus /> */}
                {/* CONTENT */}
                {getContentForDisplay()}
            </section>
        </section>
    );
}
