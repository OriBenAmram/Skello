export function TaskLabels({labelIds, boardLabels}) {
  return (
    <div className="task-labels-container flex">
      {labelIds.map((labelId, index) => {
        const label = boardLabels.find(label => label.id === labelId);
        if (label) {
          return (
            <div className="label flex justify-center" style={{background: label.color}} key={index}></div>
          );
        } else return null;
      })}
    </div>
  );
}
