// CMPS
import { MembersModalContent } from './MembersModalContent.jsx'
import { LabelsModalContent } from './LabelsModalContent.jsx'
import { CheckListModalContent } from './CheckListModalContent.jsx'
import { AttachmentModalContent } from "./AttachmentModalContent.jsx";
import { TodoOptions } from './TodoOptions.jsx';
import { EditAttachmentModalContent } from './EditAttachmentModalContent.jsx';
import { CoverModalContent } from './CoverModalContent.jsx'


export function DynamicActionModal({ toggleModal, type, pos, task, group, board, event, position = 'fixed', posXAddition = 0, posYAddition = 0, onRemoveTodo, editTitle, attachmentTitle, todoId, isOnDetails = true }) {

    const getContentForDisplay = () => {
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
                return <EditAttachmentModalContent editTitle={editTitle} attachmentTitle={attachmentTitle} toggleModal={toggleModal} />
            case 'cover':
                return <CoverModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
        }
    }

    const getYPosByType = () => {
        let { clientX, clientY } = pos

        switch (type) {
            case 'labels':
                const labelModalPos = (isOnDetails) ? -200 : 0
                return labelModalPos
            case 'cover':
                const coverModalPos = (isOnDetails) ? -200 : 0
                return coverModalPos
            default:
                return clientY - 330
        }
    }

    const getModalPositionStyle = () => {
        const { clientX, clientY } = event
        if (position === 'absolute') {
            return { position, left: 0, top: getYPosByType() }
        }
        return { position, top: clientY + posYAddition, left: clientX + posXAddition }
    }

    if (!event) return <></>
    return (
        <section className='dynamic-action-modal' style={getModalPositionStyle()} >
            {/* <section className='dynamic-action-modal' style={{ position, top: event?.nativeEvent.pageY, left: event?.nativeEvent.pageX}} > */}
            {getContentForDisplay()}
        </section>
    )
}
