import { IoTimeOutline } from 'react-icons/io5';

export function DueDatePreview({ dueDate, isDone, taskId, groupId, task }) {


  const getDueStatus = () => {
    console.log('dueDate:', dueDate);
    console.log('task.isDone:', task.isDone);

    if (task.isDone) return { txt: 'COMPLETE', className: 'complete' };
    else if (Date.now() > dueDate) {
      return { txt: 'OVERDUE', className: 'over-due' };
    }
    else {
      console.log('im here!');
      const timeDiff = dueDate - Date.now();
      if (timeDiff < 90000000) return { txt: 'DUE SOON', className: 'due-soon' }
    }

  }

  if (!getDueStatus()) return <></>
  return (
    <div className={`badge due-date flex align-center ${getDueStatus().className}`}>
      <div className="badge-icon">
        <IoTimeOutline />
      </div>
      <span className="due-date-str">28 Jan</span>
    </div>
  );
}
