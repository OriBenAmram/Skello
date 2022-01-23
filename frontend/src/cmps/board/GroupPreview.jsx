import React, {useState, useEffect} from 'react';
import {Draggable} from 'react-beautiful-dnd';

// Cmps
import {DynamicAddAction} from './DynamicAddAction';
import {TaskList} from './TaskList';
import {GroupPreviewTitle} from './GroupPreviewTitle';

export function GroupPreview({group, boardId, index, boardLabels, areLabelsShown, setLabelsShown}) {
  const [dynamicBodyAction, setDynamicBodyAction] = useState(false);

  const toggleDynamicBodyAction = () => {
    setDynamicBodyAction(dynamicBodyAction => !dynamicBodyAction);
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
            {dynamicBodyAction && (
              <DynamicAddAction
                groupId={group.id}
                boardId={boardId}
                toggleDynamicBodyAction={toggleDynamicBodyAction}
                dynamicBodyAction={dynamicBodyAction}
                isFormOpen={true}
              />
            )}
          </div>

          {/* FOOTER */}
          {!dynamicBodyAction && (
            <DynamicAddAction
              groupId={group.id}
              boardId={boardId}
              toggleDynamicBodyAction={toggleDynamicBodyAction}
              dynamicBodyAction={dynamicBodyAction}
              isFormOpen={false}
            />
          )}
        </article>
      )}
    </Draggable>
  );
}
