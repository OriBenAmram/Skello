import { useRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from "react-router-dom";

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

// Actions
import { toggleModal } from "../../store/app/app.action.js";


export function DynamicActionModal({ isModalOpen, type, isDetails = false, event, posXAddition = 0, posYAddition = 0, onRemoveTodo, editTitle, attachmentTitle, todoId }) {
    const dispatch = useDispatch();
    const location = useLocation()
    const params = useParams()

    // console.log(params)
    const modalRef = useRef(null)
    const [board, setBoard] = useState()
    const [group, setGroup] = useState()
    const [task, setTask] = useState()

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    const handleClickOutside = event => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            console.log('in handle click')
            dispatch(toggleModal({ event, type }))
        }
    };




    const getContentForDisplay = () => {
        switch (type) {
            case 'members':
                return <MembersModalContent task={task} group={group} board={board} />
            case 'labels':
                return <LabelsModalContent task={task} group={group} board={board} />
            case 'checklist':
                return <CheckListModalContent task={task} group={group} board={board} />
            case 'attachment':
                return <AttachmentModalContent task={task} group={group} board={board} />
            case 'todoOptions':
                return <TodoOptions onRemoveTodo={onRemoveTodo} todoId={todoId} />
            case 'editAttachment':
                return <EditAttachmentModalContent editTitle={editTitle} attachmentTitle={attachmentTitle} />
            case 'cover':
                return <CoverModalContent task={task} group={group} board={board} />
            case 'dates':
                return <DatesModalContent task={task} group={group} board={board} />
            case 'stt':
                return <SpeechToTextModalContent task={task} group={group} board={board} />
            case 'profile':
                return <ProfileModalContent posXAddition={posXAddition} type={type} />
            case 'createBoard':
                return <CreateBoardContent task={task} group={group} board={board} type={type} />
        }
    }

    const getModalPositionStyle = () => {
        const { top, left, height } = event.target.getBoundingClientRect();
        if ((type === 'dates' || type === 'labels' || type === 'cover') && isDetails) {
            return { top: top / 2, left: left + posXAddition }
        }
        return { top: top + height + posYAddition, left: left + posXAddition }
    }
    console.log('isModalOpen:', isModalOpen);

    if (!event) return <></>
    return (
        <section className='dynamic-action-modal' style={getModalPositionStyle()} ref={modalRef} >
            {getContentForDisplay()}
        </section>
    )
}
