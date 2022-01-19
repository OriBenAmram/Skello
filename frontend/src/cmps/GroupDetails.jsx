import React from "react";

export function GroupDetails({ groups }) {


  return (
    <div className="group-details">
      <HeaderTitle />
      <GroupActions />
      <TaskList />

    </div>
  );
}
