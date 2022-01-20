import {DynamicAddAction} from './DynamicAddAction';
import {TaskList} from './TaskList';

export function GroupPreview({group, boardId}) {
  return (
    <article className="group-preview">
      <h3>{group.title}</h3>
      <TaskList groupId={group.id} boardId={boardId} tasks={group.tasks} />
      <DynamicAddAction groupId={group.id} boardId={boardId} />
    </article>
  );
}
