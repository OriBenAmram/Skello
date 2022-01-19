import React from 'react';
import {GroupPreview} from './GroupPreview.jsx';

export function GroupList({board}) {
  return (
    <section className="group-list-container">
      {board.groups.map(group => (
        <GroupPreview key={group.id} group={group} tasks={group.tasks} />
      ))}
    </section>
  );
}
