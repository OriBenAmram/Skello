import React from 'react';
import {GroupPreview} from './GroupPreview.jsx';

export function GroupList({board}) {
  console.log('🚀 ~ file: GroupList.jsx ~ line 5 ~ GroupList ~ board', board);
  return (
    <section className="group-list-container flex">
      {board.groups.map(group => (
        <GroupPreview key={group.id} boardId={board._id} group={group} />
      ))}
    </section>
  );
}
