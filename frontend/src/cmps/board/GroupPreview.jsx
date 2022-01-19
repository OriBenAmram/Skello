import {TaskList} from './TaskList';

export function GroupPreview({group, tasks}) {
  return (
    <article className="group-preview">
      <h3>{group.title}</h3>
      <TaskList tasks={tasks} />
    </article>
  );
}
