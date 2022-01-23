import React, {useState} from 'react';
import {Droppable} from 'react-beautiful-dnd';

// Cmps
import {DynamicAddAction} from './DynamicAddAction.jsx';
import {GroupPreview} from './GroupPreview.jsx';

export function GroupList({board}) {
  const [areLabelsShown, setLabelsShown] = useState(false);

  return (
    <Droppable droppableId={'all-groups'} type="group" direction="horizontal">
      {provided => (
        <section className="group-list-container flex" {...provided.droppableProps} ref={provided.innerRef}>
          {board.groups.map((group, index) => (
            <GroupPreview
              key={group.id}
              boardId={board._id}
              group={group}
              id={group.id}
              index={index}
              boardLabels={board.labels}
              board={board}
              areLabelsShown={areLabelsShown}
              setLabelsShown={setLabelsShown}
            />
          ))}
          {provided.placeholder}
          <DynamicAddAction isList boardId={board._id} isOpenForm={false} />
        </section>
      )}
    </Droppable>
  );
}
