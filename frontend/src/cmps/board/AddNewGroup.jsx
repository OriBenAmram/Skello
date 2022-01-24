import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {GrAdd, GrClose} from 'react-icons/gr';

// Action
import {addGroup} from '../../store/board/board.action';

export function AddNewGroup({boardId}) {
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState('');

  const onAddGroup = async () => {
    if (!title) return;
    await dispatch(addGroup(title, boardId));
    cleanForm();
    toggleForm();
  };

  const toggleForm = () => {
    setIsFormOpen(isFormOpen => !isFormOpen);
  };

  const cleanForm = () => {
    setTitle('');
  };

  return (
    <React.Fragment>
      {isFormOpen ? (
        <div className={'add-group-open'}>
          <input
            autoFocus
            placeholder="Enter list title..."
            onChange={ev => setTitle(ev.target.value)}
            value={title}
            // onBlur={() => {
            //   this.toggleForm();
            //   this.cleanForm();
            // }}
          ></input>
          <div className="group-btns flex align-center">
            {/* ADD BTN */}
            <button onClick={onAddGroup} className="group-btn save-group">
              Add list
            </button>

            {/* CLOSE BTN */}
            <button
              onClick={() => {
                toggleForm();
                cleanForm();
              }}
              className="group-btn close-group">
              <GrClose />
            </button>
          </div>
        </div>
      ) : (
        <div className={`add-group-container flex`} onClick={toggleForm}>
          <GrAdd className="icon" />
          <p>Add another list</p>
        </div>
      )}
    </React.Fragment>
  );
}
