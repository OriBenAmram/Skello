// CMPS
import { MembersModalContent } from './MembersModalContent.jsx'
import { LabelsModalContent } from './LabelsModalContent.jsx'
import { CheckListModalContent } from './CheckListModalContent.jsx'
import { AttachmentModalContent } from "./AttachmentModalContent.jsx";
import { TodoOptions } from './TodoOptions.jsx';
import { EditAttachmentModalContent } from './EditAttachmentModalContent.jsx';
import { CoverModalContent } from './CoverModalContent.jsx'
import { DatesModalContent } from './DatesModalContent.jsx'


// export function DynamicActionModal({ toggleModal, type, pos, task, group, board, event, position = 'fixed', posXAddition = 0, posYAddition = 0, onRemoveTodo, editTitle, attachmentTitle, todoId, isOnDetails = true }) {
export function DynamicActionModal({ toggleModal, type, task, isDetails = false, group, board, event, posXAddition = 0, posYAddition = 0, onRemoveTodo, editTitle, attachmentTitle, todoId, isOnDetails = true }) {

    console.log('isDetails:', isDetails);

    console.log('modalType', type)
    console.log(event)


    const getContentForDisplay = () => {
        console.log('baba')
        switch (type) {
            case 'members':
                return <MembersModalContent />
            case 'labels':
                return <LabelsModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
            case 'checklist':
                return <CheckListModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
            case 'attachment':
                return <AttachmentModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
            case 'todoOptions':
                return <TodoOptions toggleModal={toggleModal} onRemoveTodo={onRemoveTodo} todoId={todoId} />
            case 'editAttachment':
                console.log('im here!')
                return <EditAttachmentModalContent editTitle={editTitle} attachmentTitle={attachmentTitle} toggleModal={toggleModal} />
            case 'cover':
                return <CoverModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
            case 'dates':
                return <DatesModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
        }
    }

    const getModalPositionStyle = () => {
        const { top, left, height } = event.target.getBoundingClientRect();
        if ((type === 'dates' || type === 'labels' || type === 'cover') && isDetails) {
            return { top: top / 2, left: left + posXAddition }
        }
        return { top: top + height, left: left }
    }

    if (!event) return <></>
    console.log('check')
    return (
        <section className='dynamic-action-modal' style={getModalPositionStyle()} >
            {getContentForDisplay()}
        </section>
    )
}
