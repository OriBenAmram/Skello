import { useState } from "react";

import { AiOutlineTags, AiOutlineCheckSquare, AiOutlineFieldTime, AiOutlineCopy } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BsPersonPlus, BsArrowRight, BsArchive } from "react-icons/bs";
import { MdOutlineAttachment } from "react-icons/md";

// CMPS
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'

export function TaskSideBar({ task, group, board }) {

    const [modal, setModal] = useState({ isModalOpen: false, pos: null, type: null });

    const toggleModal = ({ event, type }) => {
        // In case the modal is open somewhere
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }
        setModal({ isModalOpen: true, pos: { clientY: event.clientY, clientX: event.clientX }, type })
    }

    const onSetModalType = (modalType) => { 
        console.log('onSetModalType')
        console.log('change to modalType:', modalType);
        
    }

    return (
        <section className='side-bar'>
            <section className='add-to-card'>
                <h3>suggested</h3>
                <button className="button-link"> <IoPersonOutline /> Join</button>
            </section>

            <section className='add-to-card'>
                <h3>Add to card</h3>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'members' })
                }} > <BsPersonPlus /> Members</button>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'labels' })
                }} > <AiOutlineTags /> Labels</button>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'checklist' })
                }} > <AiOutlineCheckSquare />  Checklist</button>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'dates' })
                }} > <AiOutlineFieldTime /> Dates</button>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'attachment' })
                }} > <MdOutlineAttachment /> Attachment</button>
                {modal.isModalOpen && <DynamicActionModal onSetModalType={onSetModalType} task={task} group={group} board={board} toggleModal={toggleModal} type={modal.type} pos={modal.pos} />}
            </section>
            <section className='actions'>
                <h3>Actions</h3>
                <button className="button-link" > <BsArrowRight /> Move</button>
                <button className="button-link"> <AiOutlineCopy />Copy</button>
                <button className="button-link"> <BsArchive /> Archive</button>
            </section>
        </section>
    );
}
