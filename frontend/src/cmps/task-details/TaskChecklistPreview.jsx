import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCheck2Square } from "react-icons/bs";
import { IoCheckbox } from "react-icons/io5";
import { AiOutlineMore } from "react-icons/ai";
import { MdCheckBoxOutlineBlank } from "react-icons/md";



export function TaskChecklistPreview({ checklist, checklist: { title, id, } }) {
    const [isAddingItem, setAddingItem] = useState(false);
    const [checklistData, setChecklistData] = useState(checklist)


    function handleChange({ target }) {
        const { name, value } = target
        setChecklistData({ ...checklistData, [name]: value })
    }

    function saveChecklist() {
        console.log(checklistData)
    }

    function onToggleTodo(todoId) {
        console.log(todoId)

    }

    const elTodos = () => {
        return checklistData.todos.map(todo => {
            return <div key={todo.id}>
                {(todo.isDone) ? <MdCheckBoxOutlineBlank onClick={() => onToggleTodo(todo.id)} /> : <IoCheckbox onClick={() => onToggleTodo(todo.id)} />}
                {todo.title}
                {<AiOutlineMore className='more-icon' />}
            </div>
        })
    }

    return (
        <div className='checklist-container'>
            <div className='title-container'>
                <BsCheck2Square className='primary-icon main-content-icon' />
                <textarea name='title' onChange={(event) => handleChange(event)} defaultValue={title} ></textarea>
                {/* <button className="details-primary-btn">Delete</button> */}
                <div>
                    <button style={{ backgroundColor: "red" }} onClick={() => saveChecklist()} >save</button>
                </div>
            </div>
            <div className='progress-bar' >
            </div>
            <section className='check-list-todos'>
                {elTodos()}
            </section>
            {!isAddingItem && <button className='details-primary-btn add-item-btn' onClick={() => {
                setAddingItem(true)
            }}>Add an Item</button>}
            {isAddingItem && <section className='adding-item-section'>
                <textarea autoFocus onBlur={() => {
                    setAddingItem(false)
                }}></textarea>
                <div className='add-item-controllers'>
                    <button>Add</button>
                    <button>X</button>
                </div>
            </section>}
            {/* <div className='text-area-container'>
    <textarea defaultValue="" className='input-activity-box comment-general-box' placeholder="Write a comment...">
    </textarea>
    <button className='save-btn'>Add</button>
</div> */}
        </div>
    );
}