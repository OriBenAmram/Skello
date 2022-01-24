import React, {useState} from 'react';
import {Draggable} from 'react-beautiful-dnd';
import {IoEllipsisHorizontal} from 'react-icons/io5';

// Cmps
import {TaskList} from './TaskList';
import {GroupPreviewTitle} from './GroupPreviewTitle';
import {AddNewTask} from './AddNewTask';

// Action

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
          <div className="group-preview-header flex justify-space-between align-center">
            <GroupPreviewTitle group={group} />
            <div className="header-more-options">
              <IoEllipsisHorizontal />
            </div>
          </div>

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
