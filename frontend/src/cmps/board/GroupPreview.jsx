import {Draggable} from 'react-beautiful-dnd';

import {DynamicAddAction} from './DynamicAddAction';
import {TaskList} from './TaskList';

export function GroupPreview({group, boardId, index}) {
  return (
    <Draggable draggableId={group.id} index={index}>
      {provided => (
        <article
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="group-preview">
          <h3>{group.title}</h3>
          <TaskList groupId={group.id} boardId={boardId} tasks={group.tasks} />
          <DynamicAddAction groupId={group.id} boardId={boardId} />
        </article>
      )}
    </Draggable>
  );
}
