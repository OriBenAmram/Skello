import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import { updateTask, onSaveBoard } from '../../store/board/board.action.js';

// ICONS
import { IoIosArrowBack } from "react-icons/io";
import { BiPencil } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { GrClose } from "react-icons/gr";


export function LabelsModalContent({ board, group, task, toggleModal }) {
    const dispatch = useDispatch();
    const [modalType, setModalType] = useState({ header: 'Labels', type: 'labels' });
    const [selectedLabel, setSelectedLabel] = useState(null);
    const [addEditInputText, setAddEditText] = useState(null);
    const [searchLabelText, setSearchLabel] = useState(null);

    // Toggle labels on main labels modal
    const onClickLabel = (labelId) => {
        if (!task.labelIds?.includes(labelId)) {
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

    // 
    const onChangeModal = (type, label = null) => {
        if (label) setSelectedLabel(label)
        switch (type) {
            case 'labels':
                setModalType({ header: 'Labels', type: 'labels' })
                break
            case 'edit':
                setModalType({ header: 'Change label', type: 'edit' })
                break
            case 'add':
                setModalType({ header: 'Create label', type: 'add' })
                break
        }
    }

    const gLabels = [
        // green
        {
            id: "l101",
            // title: "ori",
            color: "#61bd4f"
        },
        //yellow
        {
            id: "l102",
            // title: "ori",
            color: '#f2d600'
        },
        // orange
        {
            id: "l103",
            // title: "ori",
            color: "#ff9f1a"
        },
        // red
        {
            id: "l104",
            // title: "ori",
            color: "#ed5a46"
        },
        // pruple
        {
            id: "l105",
            // title: "ori",
            color: "#c377e0"
        },
        // blue
        {
            id: "l106",
            // title: "ori",
            color: "#0079bf"
        },
        // light blue
        {
            id: "l107",
            // title: "ori",
            color: "#00c2e0"
        },
        // light green
        {
            id: "l108",
            // title: "ori",
            color: "#51e898"
        },
        // pink
        {
            id: "l109",
            // title: "ori",
            color: "#ff78cb"
        },
        // dark navy
        {
            id: "l110",
            // title: "ori",
            color: "#344563"
        }
    ]

    const onLabelSave = (ev) => {
        ev.preventDefault();
        const labelToSave = {
            id: selectedLabel.id,
            title: addEditInputText,
            color: selectedLabel.color
        }
        const boardLabelIdx = board.labels.findIndex(boardLabel => {
            return boardLabel.id === labelToSave.id
        })
        if (boardLabelIdx !== -1) {
            // edit
            board.labels.splice([boardLabelIdx], 1, labelToSave);
            dispatch(onSaveBoard(board));
        } else {
            // add
            const newLabelIds = [...task.labelIds, labelToSave.id]
            const updatedTask = { ...task, labelIds: newLabelIds }
            const groupIdx = board.groups.findIndex(currGroup => group.id === currGroup.id);
            const taskIdx = board.groups[groupIdx].tasks.findIndex(currTask => task.id === currTask.id);
            board.groups[groupIdx].tasks.splice(taskIdx, 1, updatedTask);
            board.labels.push(labelToSave)
            dispatch(onSaveBoard(board));
        }
        setModalType({ header: 'Labels', type: 'labels' })
    }

    const onLabelDelete = (ev) => {
        ev.preventDefault();
        // removing the task label id
        const newLabelIds = task.labelIds.filter(labelId => labelId !== selectedLabel.id)
        const updatedTask = { ...task, labelIds: newLabelIds }
        const groupIdx = board.groups.findIndex(currGroup => group.id === currGroup.id);
        const taskIdx = board.groups[groupIdx].tasks.findIndex(currTask => task.id === currTask.id);
        board.groups[groupIdx].tasks.splice(taskIdx, 1, updatedTask);
        // deleting the label from the board
        board.labels = board.labels.filter(label => label.id !== selectedLabel.id)
        dispatch(onSaveBoard(board));
        setModalType({ header: 'Labels', type: 'labels' })
    }

    const handleAddEditChange = (ev) => {
        setAddEditText(ev.target.value)
    }

    const getBoardLabelsForDisplay = () => { 
        if (searchLabelText) {
            return board.labels.filter(label => {
                return label.title?.includes(searchLabelText)
            })
        }
        return board.labels
    }

    return (
        <div>
            <section className='modal-header'>
                <button className='simple-close-btn' onClick={toggleModal}><GrClose className='btn-content' /></button>
                {modalType.header}
            </section>
            <section className='modal-content'>
                <section className='labels-modal-content'>
                    {/* Only Labels */}
                    {modalType.type === 'labels' && <div>
                        <div className='modal-title'>
                                <input placeholder={`Search Labels...`} type="text" className='modal-main-input' onChange={(ev) => {
                                    setSearchLabel(ev.target.value)
                                }} autoFocus />
                            <h4>Labels</h4>
                        </div>
                        <section className='modal-items-to-edit'>
                            {getBoardLabelsForDisplay().map(label => {
                                return <div key={label.id} className='label-container'>
                                    <button className='edit-label-btn'><BiPencil onClick={() => {
                                        onChangeModal('edit', label)
                                    }} /></button>
                                    <div style={{ backgroundColor: label.color, hover: `box-shadow: -8px 0 ${label.color}` }} className='label-box' onClick={() => {
                                        onClickLabel(label.id)
                                    }}>{label.title}
                                        {task.labelIds?.includes(label.id) && <BsCheckLg className='checked-label-icon' />}
                                    </div>
                                </div>
                            })}
                        </section>
                        <div className='edit-submit-option'>
                            <button className='details-primary-link-btn new-label-btn' onClick={() => {
                                onChangeModal('add')
                            }}>Create a new label</button>
                        </div>
                    </div>}

                    {/* Add Edit */}
                    {modalType.type !== 'labels' && <div className='add-edit-modal'>
                        <button className='back-btn' onClick={() => {
                            onChangeModal('labels', null)
                        }}><IoIosArrowBack /></button>
                        <div className='modal-title'>
                            <h4>Name</h4>
                        </div>
                        <form onSubmit={(ev) => {
                            onLabelSave(ev)
                        }}>
                            <input type="text" className='modal-main-input' onChange={(ev) => {
                                handleAddEditChange(ev)
                            }} autoFocus />
                            <div className='modal-title'>
                                <h4>Select a color</h4>
                            </div>
                            <section className='color-grid-container'>
                                {gLabels.map(label => {
                                    return <div key={label.id} style={{ backgroundColor: label.color }} className='color-option' onClick={() => {
                                        setSelectedLabel(label)
                                    }}>
                                        {(label.id === selectedLabel?.id) ? <BsCheckLg style={{ right: '15px' }} className='checked-label-icon' /> : ''}
                                    </div>
                                })}
                            </section>
                            <div className='add-edit-options'>
                                <button className='secondary-btn' onClick={(ev) => {
                                    onLabelSave(ev)
                                }}>{(modalType.type === 'edit') ? 'Save' : 'Create'}</button>
                                {modalType.type === 'edit' && <button className='delete-primary-btn' onClick={(ev) => {
                                    onLabelDelete(ev)
                                }}>Delete</button>}
                            </div>
                        </form>
                    </div>}
                </section>
            </section>
        </div >

    );
}

{/* <section className='no-color-section'>
                            <div style={{ backgroundColor: '#b3bac5' }} className='color-option'></div>
                            <div className='no-color-selection-info'>
                            <p>No color</p>
                            <p>This won't show up on the front of cards.</p>
                            </div>
                        </section> */}