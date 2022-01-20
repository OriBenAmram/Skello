import React from 'react';
import {ActionButton} from './ActionButton.jsx';
import {GroupPreview} from './GroupPreview.jsx';

export function GroupList({board}) {
  return (
    <section className="group-list-container flex">
      {board.groups.map(group => (
        <GroupPreview key={group.id} boardId={board._id} group={group} />
      ))}
      <ActionButton isList boardId={board._id} />
    </section>
  );
}
