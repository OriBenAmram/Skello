import {Link} from 'react-router-dom';
import {Draggable} from 'react-beautiful-dnd';

// CMPS
import {TaskLabels} from './TaskLabels';

export function TaskPreview(props) {
  const {task, boardId, groupId, index, boardLabels, areLabelsShown, setLabelsShown} = props;
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
            {/* IMG */}
            {attachments?.length > 0 && (
              <img
                src={attachments[0].url}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '3px',
                  objectFit: 'cover',
                  maxHeight: 240,
                  marginBottom: 5,
                }}
                alt="attachment"
              />
            )}

            {/* LABELS */}
            {labelIds?.length > 0 && (
              <TaskLabels
                areLabelsShown={areLabelsShown}
                setLabelsShown={setLabelsShown}
                labelIds={labelIds}
                boardLabels={boardLabels}
              />
            )}

            {/* TITLE */}
            <div className="task-title">
              <p>{title}</p>
            </div>
          </section>
        </Link>
      )}
    </Draggable>
  );
}
