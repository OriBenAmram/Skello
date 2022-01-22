import { useState } from "react";



// CMPS
import { MembersModalContent } from './MembersModalContent.jsx'
import { LabelsModalContent } from './LabelsModalContent.jsx'
import { EditLabelModal } from './EditLabelModal.jsx'
import { CheckListModalContent } from './CheckListModalContent.jsx'
import { AttachmentModalContent } from "./AttachmentModalContent.jsx";

export function DynamicActionModal({ toggleModal, type, pos, task, group, board, onSetModalType }) {

    const [modalContent, setModalContent] = useState(null);
    const [modalHeader, setModalHeader] = useState(null);


    // Switch if that decide if
    const getContentForDisplay = () => {
        switch (type) {
            case 'members':
                return <MembersModalContent />
            case 'labels':
                return <LabelsModalContent toggleModal={toggleModal} onSetModalType={onSetModalType} task={task} group={group} board={board} />
            // case 'labels-to-add':
            //     return <AddLabelModal task={task} group={group} board={board} />
            // case 'labels-to-edit':
            //     return <EditLabelModal task={task} group={group} board={board} />
            case 'checklist':
                return <CheckListModalContent />
            case 'attachment':
                return <AttachmentModalContent task={task} group={group} board={board} />
        }
    }

    const getPositionByType = () => {
        const { clientX, clientY } = pos
        switch (type) {
            case 'labels':
                return { clientY: clientY - 300, clientX: 770 }

            default:
                return { clientY, clientX: 732 }
        }
    }

    const modalPosition = getPositionByType()


    return (
        // <section className='dynamic-action-modal' style={{ top: `${pos.clientY}px`, left: `${pos.clientX}px` }} >
        <section className='dynamic-action-modal' style={{ top: `${modalPosition.clientY}px`, left: `${modalPosition.clientX}px` }} >
            {getContentForDisplay()}
            {/* <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content'/></button>
                {type.charAt(0).toUpperCase() + type.slice(1)}
            </section>
            <section className='modal-content'>
                {getContentForDisplay()}
            </section> */}
        </section>
    );
}
