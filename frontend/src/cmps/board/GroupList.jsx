import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import {DynamicAddAction} from './DynamicAddAction.jsx';
import {GroupPreview} from './GroupPreview.jsx';

export function GroupList({board}) {
  return (
    <Droppable droppableId={'all-groups'}>
      {provided => (
        <section className="group-list-container flex" {...provided.droppableProps} ref={provided.innerRef}>
          {board.groups.map(group => (
            <GroupPreview key={group.id} boardId={board._id} group={group} />
          ))}
          <DynamicAddAction isList boardId={board._id} />
        </section>
      )}
    </Droppable>
  );
}
