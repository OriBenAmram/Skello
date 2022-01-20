import { Link } from 'react-router-dom';

export function TaskPreview(props) {
  const { task, boardId, groupId } = props;
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
    <Link to={`/board/${boardId}/${groupId}/${task.id}`}>
      <section className="task-preview">
        <p>{title}</p>
      </section>
    </Link >
  );
}
