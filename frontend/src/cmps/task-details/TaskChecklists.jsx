import { TaskChecklistPreview } from './TaskChecklistPreview.jsx';

export function TaskChecklists({ boardId, board, groupId, task }) {
  if (!task.checklists?.length) return <></>;

  return task.checklists.map(checklist => {
    return (
      <TaskChecklistPreview
        key={checklist.id}
        board={board}
        boardId={boardId}
        groupId={groupId}
        checklist={checklist}
        task={task}
      />
    );
  });
}
