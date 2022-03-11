import { Droppable } from 'react-beautiful-dnd';
import React from 'react';

// Cmps
import { TaskPreview } from './TaskPreview';

export function TaskList({ tasks, groupId, boardId, boardLabels, areLabelsShown, setLabelsShown, toggleQuickCardEditor }) {

  return (
    <Droppable droppableId={groupId}>
      {provided => (
        <section {...provided.droppableProps} ref={provided.innerRef} className="task-list-container">
          {
            tasks.filter(task => !task.archiveAt).map((task, index) => {
              return (
                <TaskPreview
                  key={task.id}
                  boardId={boardId}
                  groupId={groupId}
                  task={task}
                  index={index}
                  boardLabels={boardLabels}
                  areLabelsShown={areLabelsShown}
                  setLabelsShown={setLabelsShown}
                  toggleQuickCardEditor={toggleQuickCardEditor}
                />
              )
            })
          }
          {/* {tasks.map((task, index) => {

            return (
              <TaskPreview
                key={task.id}
                boardId={boardId}
                groupId={groupId}
                task={task}
                index={index}
                boardLabels={boardLabels}
                areLabelsShown={areLabelsShown}
                setLabelsShown={setLabelsShown}
                toggleQuickCardEditor={toggleQuickCardEditor}
              />
            )
          })} */}
          {provided.placeholder}
        </section>
      )}
    </Droppable>
  );
}
