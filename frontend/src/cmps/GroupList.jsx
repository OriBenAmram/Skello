import React from "react";
import { GroupDetails } from "./GroupDetails.jsx";


export function GroupList({ groups }) {


  return (
    <>
      {groups.map((group, idx) => (
        <div key={group.id}>
          <GroupDetails

          />
        </div>))}

    </>
  );
}
