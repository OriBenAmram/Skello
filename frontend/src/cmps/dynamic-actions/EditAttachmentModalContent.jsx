import { useState } from "react"

import { GrClose } from "react-icons/gr";

export function EditAttachmentModalContent({ editTitle, attachmentTitle, toggleModal }) {

    const [title, setTitle] = useState(attachmentTitle)

    const onEditTitle = (ev) => {
        ev.preventDefault()
        console.log(title);
        editTitle(title)

    }
    return (
        <section className="edit-attachment--modal">
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                Edit attachment
            </section>

            <div className="pop-over-content">
                <form>
                    <label>Link name
                        <input
                            type="text"
                            value={title}
                            onChange={(ev) => setTitle(ev.target.value)}
                        />
                        <input type="submit" value={"update"} onClick={(ev) => onEditTitle(ev)} />
                    </label>
                </form>
            </div>
        </section>
    )
}