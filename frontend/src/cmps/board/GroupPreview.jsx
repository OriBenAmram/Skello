import React, {useState, useEffect} from 'react';
import {Draggable} from 'react-beautiful-dnd';

// Cmps
import {TaskList} from './TaskList';
import {GroupPreviewTitle} from './GroupPreviewTitle';
import {AddNewTask} from './AddNewTask';

export function GroupPreview({group, boardId, index, boardLabels, areLabelsShown, setLabelsShown}) {
  const [isBodyRender, setIsBodyRender] = useState(false);

  const toggleIsBodyRender = () => {
    setIsBodyRender(isBodyRender => !isBodyRender);
  };

  return (
    <Draggable draggableId={group.id} index={index}>
      {provided => (
        <article
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="group-preview flex column">
          {/* TITLE */}
          <GroupPreviewTitle group={group} />

          {/* BODY-MAIN */}
          <div className="group-preview-main">
            <TaskList
              areLabelsShown={areLabelsShown}
              setLabelsShown={setLabelsShown}
              groupId={group.id}
              boardId={boardId}
              tasks={group.tasks}
              boardLabels={boardLabels}
            />
            {isBodyRender && (
              <AddNewTask
                groupId={group.id}
                boardId={boardId}
                toggleIsBodyRender={toggleIsBodyRender}
                isForm={true}
              />
            )}
          </div>

          {/* FOOTER */}
          {!isBodyRender && (
            <AddNewTask
              groupId={group.id}
              boardId={boardId}
              toggleIsBodyRender={toggleIsBodyRender}
              isForm={false}
            />
          )}
        </article>
      )}
    </Draggable>
  );
}
