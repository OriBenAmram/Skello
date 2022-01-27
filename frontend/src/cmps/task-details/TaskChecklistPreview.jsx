import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsCheck2Square } from "react-icons/bs";


import { TaskTodoList } from './TaskTodoList.jsx'
import { TaskChecklistProgressbar } from './TaskChecklistProgressbar.jsx';

import { updateTask, addNewTodo } from '../../store/board/board.action.js';

export function TaskChecklistPreview({ board, boardId, groupId, task, checklist, checklist: { title, id, } }) {
    const [isAddingItem, setAddingItem] = useState(false);
    const [isEditingTitle, setEditingTitle] = useState(false);
    const [checklistData, setChecklistData] = useState(checklist);
    // const [isTextAreaOpen, toggleTextArea] = useState(false);
    const [newTodoTitle, setNewTodoTitle] = useState(null)
    // const [editedChecklist, setEditedChecklist] = useState(null)
    const dispatch = useDispatch()

    function handleChange({ target }) {
        const { name, value } = target
        setChecklistData({ ...checklistData, [name]: value })
    }

    function onRemoveTodo(todoId) {
        const { id } = checklist;
        const updatedChecklist = {
            ...checklist, todos: checklist.todos.filter(todo =>
                todo.id !== todoId)
        }
        const taskToUpdate = {
            ...task,
            checklists: task.checklists.map(checklist => (checklist.id !== id ?
                checklist : updatedChecklist))
        }

        onUpdateTask(taskToUpdate);
    }

    function onToggleTodo(ev, todoId) {
        ev.preventDefault()
        const { id } = checklist;
        const updatedChecklist = {
            ...checklist, todos: checklist.todos.map(todo =>
                todo.id !== todoId ? todo : { ...todo, isDone: !todo.isDone })
        }
        const taskToUpdate = {
            ...task,
            checklists: task.checklists.map(checklist => (checklist.id !== id ?
                checklist : updatedChecklist))
        }
        setChecklistData({ ...checklistData })
        // addActivity(taskToUpdate, txt)
        onUpdateTask(taskToUpdate)
    }


    function onSaveTodo(ev, todoId, updatedTodo) {
        const { id } = checklist;
        const updatedChecklist = {
            ...checklist, todos: checklist.todos.map(todo =>
                todo.id === todoId ? updatedTodo : todo)
        }
        const taskToUpdate = {
            ...task,
            checklists: task.checklists.map(checklist => (checklist.id !== id ? checklist :
                updatedChecklist))
        }
        onUpdateTask(taskToUpdate);
    }

    const onDeleteChecklist = (checklistId) => {
        task.checklists = task.checklists.filter(checklist =>
            (checklist.id !== checklistId));
        onUpdateTask(task, `removed the checklist ${checklist.title}`)
    }

    function saveChecklist(checklistId) {
        task.checklists = task.checklists.map(checklist =>
            (checklist.id === checklistId ? checklistData : checklist));
        onUpdateTask(task, `renamed ${checklistData.title} (from checklist)`)
    }

    function onUpdateTask(task, activityTxt) {
        //CR: fix to board instead boardId
        dispatch(updateTask(boardId, groupId, task.id, task, activityTxt))
    }



    function onBlurTextArea(ev) {
        ev.preventDefault();
        setEditingTitle(false)
    }


    return (
        <React.Fragment>

            <div className='checklist-container'>
                {/* Normal */}
                {!isEditingTitle && <section>
                    <div className='title-container'>
                        <BsCheck2Square className='primary-icon main-content-icon' />

                        <h3 onClick={() => setEditingTitle(true)}>
                            {checklist.title}
                        </h3>

                        <div className='btns-container'>
                            <button className="checklist-main-btn">Hide checked Items</button>
                            <button
                                className="checklist-main-btn delete-btn"
                                onClick={() => onDeleteChecklist(checklist.id)}
                            >Delete</button>
                        </div>
                    </div>
                </section>}

                {/* Editing */}
                {isEditingTitle && <section className='editing-section'>
                    <BsCheck2Square className='primary-icon main-content-icon' />
                    <textarea
                        name="title"
                        defaultValue={title}
                        onClick={(ev) => setEditingTitle(true)}
                        onBlur={(ev) => { onBlurTextArea(ev) }}
                        onChange={(ev) => handleChange(ev)}>
                    </textarea>
                    <section className='edit-checklist-controllers'>
                        <div>
                            <button
                                onClick={() => saveChecklist(checklist.id)}
                                className='save-btn'
                            >
                                Save
                            </button>
                            <button className="primary-close-btn">X</button>
                        </div>
                    </section>
                </section>
                }


                {/* PROGRESS-BAR */}
                <TaskChecklistProgressbar checklist={checklist} />
                {/* CHECKLIST-LIST */}
                <TaskTodoList
                    onSaveTodo={onSaveTodo}
                    onRemoveTodo={onRemoveTodo}
                    onToggleTodo={onToggleTodo}
                    checklist={checklist} />


                {/* ADD-AN-ITEM */}
                {!isAddingItem && <button className='details-primary-link-btn add-item-btn' onClick={() => {
                    setAddingItem(true)
                }}>Add an Item</button>}
                {isAddingItem && <section className='adding-item-section'>
                    <textarea
                        // autoFocus
                        value={newTodoTitle}
                        onChange={(ev) => setNewTodoTitle(ev.target.value)}
                        placeholder='Add an item'

                    ></textarea>
                    <div className='add-item-controllers'>
                        <button className='secondary-btn' onClick={(ev) => {
                            // ev.preventDefault()
                            if (!newTodoTitle) return
                            setAddingItem(false)
                            dispatch(addNewTodo(board, groupId, task.id, checklist.id, newTodoTitle))
                            setNewTodoTitle('')
                        }}>
                            Add</button>

                        <button className='primary-blose-btn' onClick={() => setAddingItem(false)} >X</button>
                    </div>
                </section>}
            </div>
        </React.Fragment>
    );
}


