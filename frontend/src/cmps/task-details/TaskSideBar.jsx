import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// Icons
import { AiOutlineTags, AiOutlineMinus, AiOutlineCheckSquare, AiOutlineFieldTime, AiOutlineCopy } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { BsPersonPlus, BsArrowRight, BsArchive, BsSquareHalf } from "react-icons/bs";
import { MdOutlineAttachment } from "react-icons/md";
import { IoMdRefresh } from "react-icons/io";


// Cmps
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal.jsx'

// Action
import { onSaveBoard } from '../../store/board/board.action';


export function TaskSideBar({ task, group, board }) {
    const dispatch = useDispatch()
    const history = useHistory();
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
        // Finding the task and splicing it.
        const groupIdx = board.groups.findIndex(currGroup => currGroup.id === group.id)
        const taskToUpdateIdx = board.groups[groupIdx].tasks.findIndex(currTask => currTask.id === task.id)

        board.groups[groupIdx].tasks.splice(taskToUpdateIdx, 1, taskToUpdate)
        if (!isMemberInBoard(user._id)) board.members.push(user)
        dispatch(onSaveBoard(board))
    }

    const isMemberInBoard = (id) => {
        return board?.members.some(member => {
            return member._id === id;
        });
    };

    const onToggleArchive = () => {
        task.archiveAt = (task.archiveAt) ? null : Date.now();

        if (task.archiveAt) {
            board.archive.push({ task, groupId: group.id });
        } else {
            board.archive = board.archive.filter(archiveItem => archiveItem.task.id !== task.id);
        }
        dispatch(onSaveBoard(board));

    }

    const onRemoveTask = () => {
        // Remove task from group
        const groupIdx = board.groups.findIndex(currGroup => currGroup.id === group.id);
        const taskIdx = board.groups[groupIdx].tasks.findIndex(currTask => currTask.id === task.id);
        board.groups[groupIdx].tasks.splice(taskIdx, 1);

        // Remove task from archive
        board.archive = board.archive.filter((archiveItem) => archiveItem.task.id !== task.id);
        dispatch(onSaveBoard(board));

        // Change url back to board
        history.push(`/board/${board._id}`)
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

                </div>

                <div className="middle-button-section sidebar-primary-btns-container">
                    <button className="button-link" onClick={(event) => {
                        toggleModal({ event, type: 'dates' })
                    }} > <AiOutlineFieldTime />Dates</button>
                    <button className="button-link" onClick={(event) => {
                        toggleModal({ event, type: 'attachment' })
                    }} > <MdOutlineAttachment />Attachment</button>

                    <button className="button-link cover-sidebar-btn" onClick={(event) => {
                        toggleModal({ event, type: 'cover' })
                    }} > <BsSquareHalf style={{ transform: `rotate(270deg)`, height: '10px' }} />Cover</button>
                </div>

                {modal.isModalOpen &&
                    <DynamicActionModal
                        isMove={modal.isMove}
                        isDetails={true}
                        task={task}
                        group={group}
                        board={board}
                        toggleModal={toggleModal}
                        type={modal.type}
                        event={modal.event} />}
            </section>
            <section className='actions'>
                <h3 className="side-bar-title sidebar-primary-btns-container">Actions</h3>

                <button className="button-link"
                    onClick={(event) => {
                        toggleModal({ event, type: 'copy', isMove: true })
                    }}>
                    <BsArrowRight />
                    Move
                </button>

                <button className="button-link"
                    onClick={(event) => {
                        toggleModal({ event, type: 'copy' })
                    }}>
                    <AiOutlineCopy />
                    Copy
                </button>


                {/* Task not in archive -> Archive btn */}
                {!task.archiveAt && (
                    <button className="button-link archive-main-btn" onClick={onToggleArchive}>
                        <BsArchive />
                            Archive
                    </button>
                )}

                {/* Task in archive -> Send to board btn */}
                {task.archiveAt &&
                    (<button className="button-link" onClick={onToggleArchive}>
                        <IoMdRefresh className='rotate-back' />
                        Send to board
                    </button>)}

                {/* Task in archive -> delete btn */}
                {task.archiveAt &&
                    (<button className="button-link delete" onClick={onRemoveTask}>
                        <AiOutlineMinus />
                        Delete
                    </button>)}
            </section>
        </section>
    );
}