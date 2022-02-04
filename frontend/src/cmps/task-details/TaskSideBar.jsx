import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

// Icons
import { AiOutlineTags, AiOutlineCheckSquare, AiOutlineFieldTime, AiOutlineCopy } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BsPersonPlus, BsArrowRight, BsArchive, BsSquareHalf } from "react-icons/bs";
import { MdOutlineAttachment } from "react-icons/md";
import { BiMicrophone } from "react-icons/bi";

// Cmps
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'

// Action
import { updateTask } from '../../store/board/board.action';

export function TaskSideBar({ task, group, board }) {
    const dispatch = useDispatch()
    const user = useSelector(state => state.userModule.loggedinUser);
    const [modal, setModal] = useState({ isModalOpen: false, type: null, event: null });

    const toggleModal = ({ event, type, isMove = false }) => {
        if (modal.isModalOpen) {
            setModal({ ...modal, isModalOpen: false })
            return
        }
        setModal({ isModalOpen: true, type, event, isMove })
    }

    const isLoggedInUserInTask = () => {
        if (!task.members.length) return false
        return task.members.find(member => member._id === user?._id) ? true : false
    }

    const joinTask = () => {
        const taskToUpdate = { ...task };
        delete user.password
        taskToUpdate.members.push(user)
        const activityTxt = `joined to task ${task.title}`;
        dispatch(updateTask(board._id, group.id, task.id, taskToUpdate, activityTxt));
    }

    return (
        <section className='side-bar'>
            {!isLoggedInUserInTask() && (
                <section className='add-to-card suggested'>
                    <h3 className="side-bar-title">suggested</h3>
                    <button className="button-link" onClick={joinTask} > <IoPersonOutline /> Join</button>
                </section>)}

            <section className='add-to-card'>
                <h3 className="side-bar-title">Add to card</h3>
                <div className="left-button-section sidebar-primary-btns-container">
                    <button className="button-link" onClick={(event) => {
                        toggleModal({ event, type: 'members' })
                    }} > <BsPersonPlus />Members</button>
                    <button className="button-link" onClick={(event) => {
                        toggleModal({ event, type: 'labels' })
                    }} > <AiOutlineTags />Labels</button>
                    <button className="button-link" onClick={(event) => {
                        toggleModal({ event, type: 'checklist' })
                    }} > <AiOutlineCheckSquare /> Checklist</button>
                    <button className="button-link archive-secondary-btn" onClick={(event) => {
                        toggleModal({ event, type: 'checklist' })
                    }} > <BsArchive /> Archive</button>
                </div>
                <div className="middle-button-section sidebar-primary-btns-container">
                    <button className="button-link" onClick={(event) => {
                        toggleModal({ event, type: 'dates' })
                    }} > <AiOutlineFieldTime />Dates</button>
                    <button className="button-link" onClick={(event) => {
                        toggleModal({ event, type: 'attachment' })
                    }} > <MdOutlineAttachment />Attachment</button>
                    <button className="button-link" onClick={(event) => {
                        toggleModal({ event, type: 'stt' })
                    }} > <BiMicrophone />Speech To Text</button>
                    <button className="button-link cover-sidebar-btn" onClick={(event) => {
                        toggleModal({ event, type: 'cover' })
                    }} > <BsSquareHalf style={{ transform: `rotate(270deg)`, height: '10px' }} />Cover</button>
                </div>
                {modal.isModalOpen && <DynamicActionModal isMove={modal.isMove} isDetails={true} task={task} group={group} board={board} toggleModal={toggleModal} type={modal.type} event={modal.event} />}
            </section>
            <section className='actions'>
                <h3 className="side-bar-title sidebar-primary-btns-container">Actions</h3>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'copy', isMove: true })
                }} > <BsArrowRight /> Move</button>
                <button className="button-link" onClick={(event) => {
                    toggleModal({ event, type: 'copy' })
                }}> <AiOutlineCopy />Copy</button>
                <button className="button-link archive-main-btn"> <BsArchive /> Archive</button>
            </section>
        </section>
    );
}