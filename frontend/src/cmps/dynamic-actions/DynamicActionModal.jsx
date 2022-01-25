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

    console.log(event.target.getBoundingClientRect())

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
            case 'dates':
                return <DatesModalContent toggleModal={toggleModal} task={task} group={group} board={board} />
        }
    }

    // const getYPosByType = () => {
    //     let { clientX, clientY } = event

    //     switch (type) {
    //         case 'labels':
    //             const labelModalPos = (isOnDetails) ? -200 : 0
    //             return labelModalPos
    //         case 'cover':
    //             const coverModalPos = (isOnDetails) ? -200 : 0
    //             return coverModalPos
    //         default:
    //             return clientY - 330
    //     }
    // }

    const getModalPositionStyle = () => {
        const { top, left, height } = event.target.getBoundingClientRect();
        console.log('top,left:', top, left);

        // const { clientX, clientY } = event
        // if (position === 'absolute') {
        //     return { position, left: 0, top: getYPosByType() }
        // }
        if ((type === 'dates' || type === 'labels') && isDetails) {
            return { top: top / 2, left: left + posXAddition }
        }
        return { top: top + height, left: left + posXAddition }
    }

    if (!event) return <></>
    return (
        <section className='dynamic-action-modal' style={getModalPositionStyle()} >
            {/* <section className='dynamic-action-modal' style={{ position, top: event?.nativeEvent.pageY, left: event?.nativeEvent.pageX}} > */}
            {getContentForDisplay()}
        </section>
    )
}
