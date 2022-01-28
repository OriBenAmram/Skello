import React, {useState} from 'react';
import {Droppable} from 'react-beautiful-dnd';

// Cmps
import {GroupPreview} from './GroupPreview.jsx';
import {AddNewGroup} from './AddNewGroup.jsx';

export function GroupList({board, toggleQuickCardEditor}) {
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
              toggleQuickCardEditor={toggleQuickCardEditor}
            />
          ))}
          {provided.placeholder}
          <AddNewGroup boardId={board._id} />
        </section>
      )}
    </Droppable>
  );
}
