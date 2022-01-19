import React from "react";
import { GroupPreview } from "./board/GroupPreview.jsx";

export function GroupList({ board }) {
  console.log('board - grouplist', board);
  
  return (
    <section className='group-list-container'>
        {board.groups.map(group => <GroupPreview  group={group}/>)}
    </section>
  )
}
