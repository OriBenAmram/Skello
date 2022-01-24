// CMPS
import { MembersModalContent } from './MembersModalContent.jsx'
import { LabelsModalContent } from './LabelsModalContent.jsx'
import { CheckListModalContent } from './CheckListModalContent.jsx'
import { AttachmentModalContent } from "./AttachmentModalContent.jsx";
import { TodoOptions } from './TodoOptions.jsx';
import { EditAttachmentModalContent } from './EditAttachmentModalContent.jsx';

export function DynamicActionModal({ toggleModal, type, pos, task, group, board, onRemoveTodo, todoId, posYAddition, editTitle, attachmentTitle }) {


    console.log('type:', type);

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
        }
    }

    const getPositionByType = () => {
        const { clientX, clientY } = pos
        switch (type) {
            case 'labels':
                return { clientY: clientY - 300, clientX: 770 }
            // case 'todoOptions':
            //     return { clientY, clientX: 650 }
            default:
                return { clientY, clientX: 732 }
        }
    }

    const modalPosition = getPositionByType()


    return (
        <section className='dynamic-action-modal' style={{ top: `${modalPosition.clientY}px`, left: `${modalPosition.clientX}px` }} >
            {getContentForDisplay()}
        </section>
    )
}
