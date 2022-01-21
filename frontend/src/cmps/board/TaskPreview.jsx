import {Link} from 'react-router-dom';
import {Draggable} from 'react-beautiful-dnd';

export function TaskPreview(props) {
  const {task, boardId, groupId, index} = props;
  const {
    archiveAt,
    attachments,
    byMember,
    createdAt,
    description,
    dueDate,
    isDone,
    labelIds,
    members,
    style,
    title,
  } = task;
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <Link to={`/board/${boardId}/${groupId}/${task.id}`}>
          <section
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="task-preview">
            <p>{title}</p>
          </section>
        </Link>
      )}
    </Draggable>
  );
}
