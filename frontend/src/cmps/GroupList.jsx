import React from "react";

export function GroupList({groups}) {
 

  return (
    <>
            {groups.map((group, idx) => (
              <div key={group.id}>
                <GroupDetails
                  group={group}
                  boardId={boardId}
                  boardLabels={boardLabels}
                //   index={idx}
                  id={group.id}
                />
              </div>))}
      
    </>
  );
}
