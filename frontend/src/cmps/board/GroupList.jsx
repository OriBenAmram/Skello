import React from 'react';
import {Droppable} from 'react-beautiful-dnd';
import {DynamicAddAction} from './DynamicAddAction.jsx';
import {GroupPreview} from './GroupPreview.jsx';

export function GroupList({board}) {
  return (
    <Droppable droppableId={'all-groups'} type="group" direction="horizontal">
      {provided => (
        <section className="group-list-container flex" {...provided.droppableProps} ref={provided.innerRef}>
          {board.groups.map((group, index) => (
            <GroupPreview key={group.id} boardId={board._id} group={group} id={group.id} index={index} />
          ))}
          <DynamicAddAction isList boardId={board._id} />
          {provided.placeholder}
        </section>
      )}
    </Droppable>
  );
}
