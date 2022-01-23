import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCheck2Square } from "react-icons/bs";
import { updateTask, addNewTodo } from '../../store/board/board.action.js';

import { TaskTodoList } from './TaskTodoList.jsx'
import { TaskChecklistProgressbar } from './TaskChecklistProgressbar.jsx';

export function TaskChecklistPreview({ board, boardId, groupId, task, checklist, checklist: { title, id, } }) {
    const [isAddingItem, setAddingItem] = useState(false);
    const [isEditingTitle, setEditingTitle] = useState(false);
    const [checklistData, setChecklistData] = useState(checklist)
    const [isTextAreaOpen, toggleTextArea] = useState(false);
    const [newTodoTitle, setNewTodoTitle] = useState(null)
    const [editedChecklist, setEditedChecklist] = useState(null)


    const dispatch = useDispatch()

    function handleChange({ target }) {
        const { name, value } = target
        setChecklistData({ ...checklistData, [name]: value })
    }

    function onRemoveTodo(todoId) {
        const checklistId = checklist.id;
        const updatedChecklist = { ...checklist, todos: checklist.todos.filter(todo => todo.id !== todoId) }
        const taskToUpdate = {
            ...task,
            checklists: task.checklists.map(checklist => (checklist.id !== checklistId ? checklist : updatedChecklist))
        }

        onUpdateTask(taskToUpdate);
    }
    function onToggleTodo(todoId) {
        const todoIdx = checklist.todos.findIndex(todo => todo.id === todoId);
        checklistData.todos[todoIdx].isDone = !checklist.todos[todoIdx].isDone
        setChecklistData({ ...checklistData })
    }
    function onSaveTodo(ev, todoId, updatedTodo) {
        // ev.stopPropagation();
        // ev.preventDefault();
        console.log('onSaveTodo!');
        const checklistId = checklist.id;
        const updatedChecklist = { ...checklist, todos: checklist.todos.map(todo => todo.id === todoId ? updatedTodo : todo) }
        const taskToUpdate = {
            ...task,
            checklists: task.checklists.map(checklist => (checklist.id !== checklistId ? checklist : updatedChecklist))
        }
        onUpdateTask(taskToUpdate);
    }

    const onDeleteChecklist = (checklistId) => {
        task.checklists = task.checklists.filter(checklist => (checklist.id !== checklistId));
        onUpdateTask(task)
    }

    function saveChecklist(checklistId) {
        task.checklists = task.checklists.map(checklist => (checklist.id === checklistId ? checklistData : checklist));
        onUpdateTask(task)
    }

    function onUpdateTask(task) {
        dispatch(updateTask(boardId, groupId, task.id, task))
    }

    function onClickTitle(checklist) {
        console.log('checklist:', checklist);
        setEditingTitle(true)
    }

    function onBlurTextArea(ev) {
        console.log('Blur')
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

                        <h3 onClick={() => {
                            onClickTitle(checklist)
                        }}>{checklist.title}</h3>

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
                        onBlur={(ev) => {
                            console.log('blur')
                            onBlurTextArea(ev)
                        }}
                        className='basic-textarea'
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
                {/* <textarea className='checklist-title-textarea' name='title' onChange={(event) => handleChange(event)} defaultValue={title} ></textarea>

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
                        autoFocus
                        value={newTodoTitle}
                        onChange={(ev) => setNewTodoTitle(ev.target.value)}
                        placeholder='Add an item'
                    // onBlur={() => {
                    //     setAddingItem(false)
                    // }
                    // }
                    ></textarea>
                    <div className='add-item-controllers'>
                        <button className='secondary-btn' onClick={(ev) => {
                            // ev.preventDefault()
                            console.log('baba', newTodoTitle)
                            if (!newTodoTitle) return
                            dispatch(addNewTodo(board, groupId, task.id, checklist.id, newTodoTitle))
                            setNewTodoTitle('')
                        }}>
                            Add</button>

                        <button className='primary-blose-btn'>X</button>
                    </div>
                </section>}
            </div>
        </React.Fragment>
    );
}

{/* <textarea
    value={currTodo.title} className={`todo-item  ${(todo.isDone) ? 'checked' : ''}`}
    onChange={(ev) => setCurrTodo({ title: ev.target.value })}
    onClick={(ev) => onToggleTextArea(ev, true)}  >
    
</textarea> */}
{/* <AiOutlineDelete className="delete-icon" onClick={() => onRemoveTodo(todo.id)} /> */ }
{/* Editing */ }
