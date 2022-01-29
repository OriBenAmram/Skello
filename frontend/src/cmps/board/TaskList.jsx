import { Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';

// Cmps
import { TaskPreview } from './TaskPreview';

export function TaskList({ tasks, groupId, boardId, boardLabels, areLabelsShown, setLabelsShown }) {


  const filterBy = useSelector(state => state.boardModule.filterBy)


  // function getFilteredTask() {
  //   const { txt, labels, members } = filterBy
  //   let filteredTasks = tasks;
  //   console.log('tasks@@@@@@@:', tasks)

  //   if (filterBy.txt) {
  //     filteredTasks = tasks.filter(task => task.title.toLowerCase() !== txt.toLowerCase())
  //     console.log('filteredTasks:', filteredTasks);
  //   }

  //   return filteredTasks;
  // }



  return (
    <Droppable droppableId={groupId}>
      {provided => (
        <section {...provided.droppableProps} ref={provided.innerRef} className="task-list-container">
          {tasks.map((task, index) => (
            <TaskPreview
              key={task.id}
              boardId={boardId}
              groupId={groupId}
              task={task}
              index={index}
              boardLabels={boardLabels}
              areLabelsShown={areLabelsShown}
              setLabelsShown={setLabelsShown}
            />
          ))}
          {provided.placeholder}
        </section>
      )}
    </Droppable>
  );
}
