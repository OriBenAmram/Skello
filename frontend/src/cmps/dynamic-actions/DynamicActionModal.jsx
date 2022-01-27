import { useRef, useEffect, useState } from "react"
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
import { SpeechToTextModalContent } from './SpeechToTextMoadlContent.jsx';
import { CreateBoardContent } from './CreateBoardContent.jsx';
export function DynamicActionModal({ toggleModal, type, task, isDetails = false, group, board, event, posXAddition = 0, posYAddition = 0, onRemoveTodo, editTitle, attachmentTitle, todoId, isOnDetails = true }) {
    const wrapperRef = useRef(null)
    console.log('ref:', wrapperRef);
    console.log('ref:', wrapperRef.current);
    const handleClickOutside = (ev) => {
        console.log('Event outside is', ev)
    }
    // useEffect(() => {
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [ref]);
    console.log('we are in!')
    const getContentForDisplay = () => {
        switch (type) {
            case 'members':
                return <MembersModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
            case 'labels':
                return <LabelsModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
            case 'checklist':
                return <CheckListModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
            case 'attachment':
                return <AttachmentModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
            case 'todoOptions':
                return <TodoOptions toggleModal={toggleModal} onRemoveTodo={onRemoveTodo} todoId={todoId} />
            case 'editAttachment':
                return <EditAttachmentModalContent editTitle={editTitle} attachmentTitle={attachmentTitle} toggleModal={toggleModal} />
            case 'cover':
                return <CoverModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
            case 'dates':
                return <DatesModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
            case 'stt':
                return <SpeechToTextModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
            case 'profile':
                return <ProfileModalContent toggleModal={toggleModal} posXAddition={posXAddition} type={type} />
            case 'createBoard':
                return <CreateBoardContent toggleModal={toggleModal} ask={task} group={group} board={board} type={type} />
        }
    }
    const getModalPositionStyle = () => {
        const { top, left, height } = event.target.getBoundingClientRect();
        if ((type === 'dates' || type === 'labels' || type === 'cover') && isDetails) {
            return { top: top / 2, left: left + posXAddition }
        }
        return { top: top + height + posYAddition, left: left + posXAddition }
    }
    if (!event) return <></>
    return (
        <section className='dynamic-action-modal' style={getModalPositionStyle()} ref={wrapperRef} >
            {getContentForDisplay()}
        </section>
    )
}