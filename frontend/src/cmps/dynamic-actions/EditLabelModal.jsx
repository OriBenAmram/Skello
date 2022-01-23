import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Services
import { updateTask } from '../../store/board/board.action.js';

// ICONS
import { BiPencil } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";

export function EditLabelModal({ board, group, task }) {
    const dispatch = useDispatch();
    const [modalType, setModalType] = useState('labels');

    // const [modalContent, setModalContent] = useState({ isSearch: true });
    const onClickLabel = (labelId) => {
        if (!task.labelIds.includes(labelId)) {
            const newLabelIds = [...task.labelIds, labelId]
            const taskToUpdate = { ...task, labelIds: newLabelIds }
            dispatch(updateTask(board._id, group.id, task.id, taskToUpdate));
        } else {
            const newLabelIds = task.labelIds.filter(currLabelId => {
                return currLabelId !== labelId
            })
            const taskToUpdate = { ...task, labelIds: newLabelIds }
            dispatch(updateTask(board._id, group.id, task.id, taskToUpdate));
        }
    }

    const onChangeModal = (actionType, label = null) => {

    }

    return (
        <section className='labels-modal-content'>
            {modalType === 'labels' && <div>
                <input placeholder={`Search Labels...`} type="text" className='modal-main-input' autoFocus />
                <div className='modal-title'>
                    <h4>Change label</h4>
                </div>
                <section className='modal-items-to-edit'>
                    {board.labels.map(label => {
                        return <div key={label.id} className='label-container'>
                            <button className='edit-label-btn'><BiPencil onClick={() => {
                                onChangeModal('edit', label)
                            }} /></button>
                            <div style={{ backgroundColor: label.color, hover: `box-shadow: -8px 0 ${label.color}` }} className='label-box' onClick={() => {
                                onClickLabel(label.id)
                            }}>{label.title}
                                {/* <BsCheckLg className='checked-label-icon'/> */}
                                {task.labelIds.includes(label.id) && <BsCheckLg className='checked-label-icon' />}
                            </div>
                        </div>
                    })}
                </section>
                <div className='edit-submit-option'>
                    <button className='details-primary-btn new-label-btn' onClick={() => {
                        onChangeModal('add')
                    }}>Create a new label</button>
                </div>
            </div>}
        </section>
    );
}
