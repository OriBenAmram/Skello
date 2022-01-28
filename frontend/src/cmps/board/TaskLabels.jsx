export function TaskLabels({labelIds, boardLabels, areLabelsShown, setLabelsShown}) {
  const onLabelClick = ev => {
    ev.preventDefault();
    setLabelsShown(!areLabelsShown);
  };

  return (
    <div className="task-labels-container flex">
      {labelIds.map((labelId, index) => {
        const label = boardLabels.find(label => label.id === labelId);
        if (label) {
          return (
            <div
              className={`label flex ${areLabelsShown ? 'open' : ''}`}
              style={{background: label.color}}
              key={index}
              onClick={ev => {
                if (areLabelsShown) onLabelClick(ev);
              }}>
              {areLabelsShown && <span>{label.title}</span>}
            </div>
          );
        } else return null;
      })}
    </div>
  );
}
