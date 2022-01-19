
import { AiOutlineCreditCard } from "react-icons/ai";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// const [board, setBoard] = useState(null);  

export function TaskDetails(props) {
    const dispatch = useDispatch();
    const [task, setTask] = useState(null);


    const { boardId, groupId, taskId } = props.match.params;
    console.log('params:', boardId, groupId, taskId);



    // Find curr task move //
    const currBoard = useSelector(state => state.boardModule.board);
    const currGroup = currBoard?.groups.find(group => group.id === groupId);
    const currTask = currGroup.tasks.find(task => task.id === taskId);
    console.log('currTask:', currTask);
    setTask(currTask)

    // console.log('board:', board);

    // const task = board.task.find(task => task.id === taskId);
    // console.log('task:', task);

    // useEffect(async () => {
    //     if (!id) this.props.history.push('/workspace');
    //     else {
    //         try {
    //             const board = await dispatch(loadBoard(id));
    //             if (!board) props.history.push('/workspace');
    //             else setBoard(board);
    //         } catch (err) {
    //             console.log('cant load board', err);
    //         }
    //     }
    // }, []);



    return (
        <section className='task-details-page'>


            <div className="task-details-modal">
                {/* Cover */}
                <section className='details-cover'>

                </section>
                {/* Details-header */}
                <section className='details-header'>
                    <AiOutlineCreditCard className='header-icon' />
                    <textarea>good job!</textarea>
                    <div className="header-sub-title">
                        <span>daniel </span>
                    </div>
                </section>

                <section className='main-content'>
                    {/* Main-Col */}
                    <section className='main-col'>
                        {/* Description */}
                        <div className='description'>
                            <span>app description ma ma</span>
                        </div>
                        {/* Activities */}
                        <div className='activities'>

                        </div>
                    </section>

                    {/* Side-Bar */}
                    <section className='side-bar'>
                        <section className='suggested'>

                        </section>
                        <section className='add-to-card'>

                        </section>
                        <section className='actions'>
                        </section>
                    </section>

                </section>

            </div>
        </section>
    )
}