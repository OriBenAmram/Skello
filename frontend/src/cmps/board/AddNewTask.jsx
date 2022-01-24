import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {GrAdd, GrClose} from 'react-icons/gr';
import {BallTriangle} from 'react-loader-spinner';

// Action
import {addTask} from '../../store/board/board.action';

export function AddNewTask({boardId, groupId, toggleIsBodyRender, isForm}) {
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    setIsFormOpen(isForm);
  }, []);

  const onAddTask = async () => {
    if (!title) return;
    await dispatch(addTask(title, groupId, boardId));
    cleanForm();
    // toggleForm();
    // toggleIsBodyRender();
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
        <div className={'add-task-open'}>
          <textarea
            autoFocus
            placeholder="Enter a title for this card..."
            onChange={ev => setTitle(ev.target.value)}
            value={title}
            // onBlur={() => {
            //   this.toggleForm();
            //   this.cleanForm();
            // }}
          ></textarea>
          <div className="task-btns flex align-center">
            {/* ADD */}
            <button onClick={onAddTask} className="task-btn save-task">
              Add Card
            </button>

            {/* CLOSE */}
            <button
              onClick={() => {
                toggleForm();
                cleanForm();
                toggleIsBodyRender();
              }}
              className="task-btn close-task">
              <GrClose />
            </button>
          </div>
        </div>
      ) : (
        <div
          className={'add-task-container flex'}
          onClick={() => {
            toggleIsBodyRender();
            toggleForm();
          }}>
          <GrAdd className="icon" />
          <p>Add a card</p>
        </div>
      )}
    </React.Fragment>
  );
}
