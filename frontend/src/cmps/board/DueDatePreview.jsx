import {IoTimeOutline} from 'react-icons/io5';

export function DueDatePreview({dueDate, isDone, taskId, groupId}) {
  return (
    <div className="badge due-date flex">
      <div className="badge-icon">
        <IoTimeOutline />
      </div>
      <div>28 Jan</div>
    </div>
  );
}
