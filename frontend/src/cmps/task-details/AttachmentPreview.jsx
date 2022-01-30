import React, { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { BsSquareHalf } from "react-icons/bs";

import { updateTaskTest, updateTask } from '../../store/board/board.action'

import { utilService } from "../../services/util.service";

import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'


export function AttachmentPreview({ task, group, attachment, board }) {
    const dispatch = useDispatch()
    const [attachmentTitle, setAttachmentTitle] = useState(attachment.name)
    const [modal, setModal] = useState({ isModalOpen: false, type: null });

    function onDeleteAttachment() {
        const { id, name } = attachment;
        const taskToUpdate = { ...task, attachments: task.attachments.filter(attachment => attachment.id !== id) }
        const activityTxt = `deleted the ${name} attachment`
        dispatch(updateTask(board._id, group.id, task.id, taskToUpdate, activityTxt));
    }
    const toggleModal = ({ event, type }) => {
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }

        setModal({ isModalOpen: true, type, event })
    }

    const editTitle = (name) => {
        const { id } = attachment;
        const attachmentForUpdate = { ...attachment, name }
        const taskToUpdate = { ...task, attachments: task.attachments.map(attachment => attachment.id !== id ? attachment : attachmentForUpdate) }
        dispatch(updateTaskTest(board, taskToUpdate))
    }

    const toggleAttachmentCover = () => {
        if (attachment.url === task.style.backgroundImage.url) {
            const newTaskStyle = { ...task.style, backgroundImage: { title: '', url: null }, backgroundColor: null }
            const taskToUpdate = { ...task, style: newTaskStyle }
            dispatch(updateTask(board._id, group.id, task.id, taskToUpdate));
        } else {
            const { url, name } = attachment
            const newTaskStyle = { ...task.style, backgroundImage: { title: name, url }, backgroundColor: null }
            const taskToUpdate = { ...task, style: newTaskStyle }
            const activityTxt = `added the attachment ${name}`
            dispatch(updateTask(board._id, group.id, task.id, taskToUpdate, activityTxt));
        }
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
                <div className="attachment-details">
                    <span className="attachment-name">{attachment.name + '.jpg'}</span>
                    <div className="actions-container">
                        <span>{utilService.timeSince(attachment.createdAt)}</span>
                        <span> - </span>
                        <span className="action-btn" onClick={onDeleteAttachment}  >Delete</span>
                        <span> - </span>
                        <span className="action-btn" onClick={(event) => toggleModal({ event, type: 'editAttachment' })}>Edit</span>
                        <span> - </span>

                    </div>
                    <span className="action-btn" onClick={(event) => {
                        toggleAttachmentCover()
                    }}> <BsSquareHalf style={{ transform: `rotate(270deg)`, height: '10px' }} /> {(attachment.url === task.style.backgroundImage.url) ? 'Remove' : 'Make'} Cover</span>
                </div>
                {modal.isModalOpen && <DynamicActionModal editTitle={editTitle} attachmentTitle={attachmentTitle} toggleModal={toggleModal} type={modal.type} event={modal.event} />}
            </div>
        </React.Fragment>
    )
}