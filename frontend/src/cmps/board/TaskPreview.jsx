export function TaskPreview(props) {
  const {task} = props;
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
  console.log('task', task);
  return (
    <section className="task-preview">
      <h4>{title}</h4>
    </section>
  );
}
