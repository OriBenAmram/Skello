import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

import {DynamicAddAction} from './DynamicAddAction';
import {TaskList} from './TaskList';
import {GroupPreviewTitle} from './GroupPreviewTitle';

export function GroupPreview({group, boardId, index}) {
  return (
    <Draggable draggableId={group.id} index={index}>
      {provided => (
        <article
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="group-preview">
          {/* TITLE */}
          <GroupPreviewTitle group={group} />

          {/* BODY-MAIN */}
          <div className="group-preview-main">
            <TaskList groupId={group.id} boardId={boardId} tasks={group.tasks} />
          </div>

          {/* FOOTER */}
          <DynamicAddAction groupId={group.id} boardId={boardId} />
        </article>
      )}
    </Draggable>
  );
}
