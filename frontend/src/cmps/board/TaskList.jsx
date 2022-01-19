import {TaskPreview} from './TaskPreview';

export function TaskList({tasks, groupId, boardId}) {
  return (
    <section className="task-list-container">
      {tasks.map(task => (
        <TaskPreview key={task.id} boardId={boardId} groupId={groupId} task={task} />
      ))}
    </section>
  );
}
