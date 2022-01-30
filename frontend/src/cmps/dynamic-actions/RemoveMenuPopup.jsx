
import { GrClose } from "react-icons/gr";

export function RemoveMenuPopup({ toggleModal, onRemoveTodo, onRemoveGroup, groupId, todoId }) {





    return (
        <section className="todo-options-modal">
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                Item Actions
            </section>
            <button className="delete-btn" onClick={(ev) => {
                (onRemoveGroup) ? onRemoveGroup(groupId) : onRemoveTodo(todoId)

                toggleModal(ev)
            }
            }>Delete</button>
        </section>
    )
}