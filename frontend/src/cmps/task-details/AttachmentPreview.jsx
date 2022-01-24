import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';


import { updateTaskTest } from '../../store/board/board.action'

import { utilService } from "../../services/util.service";

import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'


export function AttachmentPreview({ task, attachment, board }) {
    const dispatch = useDispatch()
    const [attachmentTitle, setAttachmentTitle] = useState(attachment.name)
    const [modal, setModal] = useState({ isModalOpen: false, pos: null, type: null });


    console.log(task, 'task!')

    function onDeleteAttachment() {
        const { id } = attachment;
        const taskToUpdate = { ...task, attachments: task.attachments.filter(attachment => attachment.id !== id) }
        dispatch(updateTaskTest(board, taskToUpdate))
    }
    const toggleModal = ({ event, type }) => {
        console.log('event:', event);

        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }

        setModal({ isModalOpen: true, pos: { clientY: event.clientY, clientX: event.clientX }, type })
    }

    const editTitle = (name) => {
        const { id } = attachment;
        const attachmentForUpdate = { ...attachment, name }
        const taskToUpdate = { ...task, attachments: task.attachments.map(attachment => attachment.id !== id ? attachment : attachmentForUpdate) }
        dispatch(updateTaskTest(board, taskToUpdate))
    }

    return (
        <React.Fragment>
            <div className="attachment-preview-container" >
                <a className="attachment-preview-img"
                    style={{ backgroundImage: `url(${attachment.url})` }}
                    href={attachment.url}
                    target={"_blank"}
                    title={"hero.jpg"}
                ></a>
                <p className="attachment-details">
                    <span className="attachment-name">{attachment.name + '.jpg'}</span>
                    <div className="actions-container">
                        <span>{utilService.getTimeDiff(attachment.createdAt)}</span>
                        <span> - </span>
                        <span className="action-btn" onClick={onDeleteAttachment}  >Delete</span>
                        <span> - </span>
                        <span className="action-btn" onClick={(event) => toggleModal({ event, type: 'editAttachment' })}>Edit</span>

                    </div>
                </p>
                {modal.isModalOpen && <DynamicActionModal editTitle={editTitle} attachmentTitle={attachmentTitle} toggleModal={toggleModal} type={modal.type} posYAddition={350} pos={modal.pos} />}
            </div>
        </React.Fragment>
    )
}