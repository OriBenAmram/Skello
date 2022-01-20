import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// CPMS
import { TaskCover } from '../cmps/task-details/TaskCover.jsx';
import { TaskHeader } from '../cmps/task-details/TaskHeader.jsx';
import { TaskDescription } from '../cmps/task-details/TaskDescription.jsx';
import { TaskChecklist } from '../cmps/task-details/TaskChecklist.jsx';
import { TaskActivities } from '../cmps/task-details/TaskActivities.jsx';
import { TaskSideBar } from '../cmps/task-details/TaskSideBar.jsx';
import { Loader } from '../cmps/Loader.jsx';

// const [board, setBoard] = useState(null);

export function TaskDetails(props) {
    const dispatch = useDispatch();
    const [group, setGroup] = useState(null);
    const [task, setTask] = useState(null);
    const board = useSelector(state => state.boardModule.board);

    useEffect(async () => {
        const { boardId, groupId, taskId } = props.match.params;
        const currGroup = board?.groups.find(group => group.id === groupId);
        const currTask = currGroup?.tasks?.find(task => task.id === taskId);
        console.log('currTask:', currTask);
        setTask(currTask);
    }, []);

    const onCloseModal = () => {
        props.history.push(`/board/${board._id}`)
    }


    if (!task) return <Loader />;
    return (
        <section className="task-details-page">
            <div className="task-details-modal">
                <button className="close-modal-btn" onClick={() => {
                    onCloseModal()
                }}>X</button>
                {/* Cover */}
                <TaskCover />
                {/* Details-header */}
                <TaskHeader title={task.title} />

                <section className="main-content">
                    {/* Main-Col */}
                    <section className="main-col">
                        {/* Description */}
                        <TaskDescription description={task.description} />

                        {/* CheckList */}
                        <TaskChecklist />
                        {/* {task.checklists?.length && <TaskChecklist />} */}

                        {/* Activities */}
                        <TaskActivities />
                    </section>

                    {/* Side-Bar */}
                    <TaskSideBar />
                </section>
            </div>
        </section>
    );
}
