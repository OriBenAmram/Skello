import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// CPMS
import {TaskCover} from '../cmps/task-details/TaskCover.jsx';
import {TaskHeader} from '../cmps/task-details/TaskHeader.jsx';
import {TaskDescription} from '../cmps/task-details/TaskDescription.jsx';
import {TaskActivities} from '../cmps/task-details/TaskActivities.jsx';
import {TaskSideBar} from '../cmps/task-details/TaskSideBar.jsx';
import {Loader} from '../cmps/Loader.jsx';

// const [board, setBoard] = useState(null);

export function TaskDetails(props) {
  const dispatch = useDispatch();
  const [task, setTask] = useState(null);
  const currBoard = useSelector(state => state.boardModule.board);

  useEffect(async () => {
    const {boardId, groupId, taskId} = props.match.params;
    console.log('params:', boardId, groupId, taskId);
    const currGroup = currBoard?.groups.find(group => group.id === groupId);
    const currTask = currGroup?.tasks?.find(task => task.id === taskId);
    console.log('currTask:', currTask);
    setTask(currTask);
  }, []);

  if (!task) return <Loader />;
  return (
    <section className="task-details-page">
      <div className="task-details-modal">
        {/* Cover */}
        <TaskCover />
        {/* Details-header */}
        <TaskHeader title={task.title} />

        <section className="main-content">
          {/* Main-Col */}
          <section className="main-col">
            {/* Description */}
            <TaskDescription description={task.description} />

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
