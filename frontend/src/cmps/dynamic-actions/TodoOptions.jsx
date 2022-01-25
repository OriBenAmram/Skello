
import { GrClose } from "react-icons/gr";

export function TodoOptions({ toggleModal, onRemoveTodo, todoId }) {





    return (
        <section className="todo-options-modal">
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                Item Actions
            </section>
            <button class="delete-btn" onClick={(ev) => {
                onRemoveTodo(todoId)
                toggleModal(ev)
            }
            }>Delete</button>
        </section>
    )
}