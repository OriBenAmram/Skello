import { useState } from "react";
import { AiOutlineTags, AiOutlineCheckSquare, AiOutlineFieldTime, AiOutlineCopy } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BsPersonPlus, BsArrowRight, BsArchive, BsSquareHalf } from "react-icons/bs";
import { MdOutlineAttachment } from "react-icons/md";
import { BiMicrophone } from "react-icons/bi";

import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'


export function TaskSideBar({ task, group, board }) {

    const [modal, setModal] = useState({ isModalOpen: false, type: null });

    const toggleModal = ({ event, type }) => {

        // In case the modal is open somewhere

        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }
        // setModal({ isModalOpen: true, pos: { clientY: event.clientY, clientX: event.clientX }, type , event})
        setModal({ isModalOpen: true, type, event })
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
                }} > <BsPersonPlus />Members</button>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'labels' })
                }} > <AiOutlineTags />Labels</button>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'checklist' })
                }} > <AiOutlineCheckSquare /> Checklist</button>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'dates' })
                }} > <AiOutlineFieldTime />Dates</button>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'attachment' })
                }} > <MdOutlineAttachment />Attachment</button>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'stt' })
                }} > <BiMicrophone />Speech To Text</button>
                {(!task.style.backgroundColor && !task.style.backgroundImage?.url) && <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'cover' })
                }} > <BsSquareHalf style={{ transform: `rotate(270deg)`, height: '10px' }} />Cover</button>}
                {modal.isModalOpen && <DynamicActionModal isDetails={true} task={task} group={group} board={board} toggleModal={toggleModal} type={modal.type} pos={modal.pos} position={'absolute'} event={modal.event} />}
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
