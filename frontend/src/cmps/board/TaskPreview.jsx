import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

// CMPS
import { TaskLabels } from './TaskLabels';

export function TaskPreview(props) {
  const { task, boardId, groupId, index, boardLabels, areLabelsShown, setLabelsShown } = props;
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
  console.log('🚀 ~ file: TaskPreview.jsx ~ line 22 ~ TaskPreview ~ task', task);
  console.log('boardLabels:', boardLabels);


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
            {style?.backgroundImage && (
              <img
                // src={style.backgroundImage}
                src="https://images.unsplash.com/photo-1642628658566-1db49cadf78c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '3px',
                  objectFit: 'cover',
                  maxHeight: 240,
                  marginBottom: 5,
                }}
              />
            )}

            {/* LABELS */}
            {labelIds?.length > 0 && <TaskLabels areLabelsShown={areLabelsShown} setLabelsShown={setLabelsShown} labelIds={labelIds} boardLabels={boardLabels} />}

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
