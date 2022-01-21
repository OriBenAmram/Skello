import { useState } from "react";

// CMPS
import { MembersModalContent } from './MembersModalContent.jsx'
import { LabelsModalContent } from './LabelsModalContent.jsx'
import { CheckListModalContent } from './CheckListModalContent.jsx'
export function DynamicActionModal({ toggleModal, type, pos, task, board }) {

    const [modalContent, setModalContent] = useState({ isSearch: true });

    // Switch if that decide if
    const getContentForDisplay = () => {
        switch (type) {
            case 'members':
                return <MembersModalContent />
            case 'labels':
                return <LabelsModalContent task={task} board={board} />
            case 'checklist':
                return <CheckListModalContent />
        }
    }

    const getPositionByType = () => {
        // switch (type) {
        //     case 'members':
        //         return {  }
        //     case 'labels':
        //         return <LabelsModalContent task={task} board={board} />
        //     case 'checklist':
        //         return <CheckListModalContent />
        // }
    }


    return (
        // <section className='dynamic-action-modal' style={{ top: `${pos.clientY}px`, left: `${pos.clientX}px` }} >
        <section className='dynamic-action-modal' style={{ top: `${pos.clientY}px`, left: `732px` }} >
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}>x</button>
                {type}
            </section>
            <section className='modal-content'>
                <input placeholder={`Search ${type}...`} type="text" className='modal-main-input' autoFocus />
                {/* CONTENT */}
                {getContentForDisplay()}
            </section>
        </section>
    );
}
