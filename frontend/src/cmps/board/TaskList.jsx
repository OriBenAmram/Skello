import {TaskPreview} from './TaskPreview';
import {Droppable} from 'react-beautiful-dnd';

export function TaskList({tasks, groupId, boardId, boardLabels, areLabelsShown, setLabelsShown}) {
  return (
    <Droppable droppableId={groupId}>
      {provided => (
        <section {...provided.droppableProps} ref={provided.innerRef} className="task-list-container">
          {tasks.map((task, index) => (
            <TaskPreview
              key={task.id}
              boardId={boardId}
              groupId={groupId}
              task={task}
              index={index}
              boardLabels={boardLabels}
              areLabelsShown={areLabelsShown}
              setLabelsShown={setLabelsShown}
            />
          ))}
          {provided.placeholder}
        </section>
      )}
    </Droppable>
  );
}
