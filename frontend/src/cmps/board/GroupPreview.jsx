import React from 'react';
import {Draggable} from 'react-beautiful-dnd';

import {DynamicAddAction} from './DynamicAddAction';
import {TaskList} from './TaskList';
import {GroupPreviewTitle} from './GroupPreviewTitle';

export function GroupPreview({group, boardId, index, boardLabels, areLabelsShown, setLabelsShown}) {
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
            <TaskList areLabelsShown={areLabelsShown} setLabelsShown={setLabelsShown} groupId={group.id} boardId={boardId} tasks={group.tasks} boardLabels={boardLabels} />
          </div>

          {/* FOOTER */}
          <DynamicAddAction groupId={group.id} boardId={boardId} />
        </article>
      )}
    </Draggable>
  );
}
