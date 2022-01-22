import {TaskChecklistPreview} from './TaskChecklistPreview.jsx';

export function TaskChecklists({boardId, groupId, task}) {
  if (!task.checklists?.length) return <></>;

  return task.checklists.map(checklist => {
    return (
      <TaskChecklistPreview
        key={checklist.id}
        boardId={boardId}
        groupId={groupId}
        checklist={checklist}
        task={task}
      />
    );
  });
}
