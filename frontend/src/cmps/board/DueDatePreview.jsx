

import { useState } from 'react';
import { IoTimeOutline, IoCheckbox } from 'react-icons/io5';
import { GrCheckboxSelected } from 'react-icons/gr';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { useDispatch } from 'react-redux';


import { utilService } from '../../services/util.service';
import { updateTask } from '../../store/board/board.action';

export function DueDatePreview({ dueDate, task, boardId, groupId }) {

  const [isHover, setHover] = useState(false);
  const dispatch = useDispatch();

  const onToggleDone = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();
    console.log('isDone');
    task.isDone = !task.isDone;
    dispatch(updateTask(boardId, groupId, task.id, task))
  }


  const getDueStatus = () => {
    if (task.isDone) return { txt: 'COMPLETE', className: 'complete' };
    else if (Date.now() > dueDate) {
      return { txt: 'OVERDUE', className: 'over-due' };
    } else {
      const timeDiff = dueDate - Date.now();
      if (timeDiff < 90000000) return { txt: 'DUE SOON', className: 'due-soon' };
    }
  };
  if (!getDueStatus()) return <></>;
  return (
    <div className={`badge due-date flex align-center ${getDueStatus().className}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="badge-icon">
        {!isHover ? <IoTimeOutline /> : task.isDone ? <GrCheckboxSelected className="" onClick={(ev) => onToggleDone(ev)} /> : <MdCheckBoxOutlineBlank onClick={(ev) => onToggleDone(ev)} />}

      </div>
      <span className="due-date-str">{new Date(dueDate).toLocaleDateString('en-US', {
        month: "short",
        day: "numeric",
      })}</span>
    </div>
  );
}
