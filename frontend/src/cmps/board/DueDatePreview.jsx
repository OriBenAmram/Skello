import {IoTimeOutline} from 'react-icons/io5';

export function DueDatePreview({dueDate, task}) {
  const getDueStatus = () => {
    if (task.isDone) return {txt: 'COMPLETE', className: 'complete'};
    else if (Date.now() > dueDate) {
      return {txt: 'OVERDUE', className: 'over-due'};
    } else {
      const timeDiff = dueDate - Date.now();
      if (timeDiff < 90000000) return {txt: 'DUE SOON', className: 'due-soon'};
    }
  };
  return null;
  if (!getDueStatus()) return <></>;
  return (
    <div className={`badge due-date flex align-center ${getDueStatus().className}`}>
      <div className="badge-icon">
        <IoTimeOutline />
      </div>
      <span className="due-date-str">28 Jan</span>
    </div>
  );
}
