import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Action
import { onSaveBoard } from '../../store/board/board.action.js';

export function GroupPreviewTitle({ board, group }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle(group.title)
}, [group.title])

  const handleChange = ({ target }) => {
    const title = target.value;
    setTitle(title);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    saveGroupTitle();
  };

  const saveGroupTitle = async () => {
    const groupIdx = board.groups.findIndex(currGroup => currGroup.id === group.id);
    // Same title - no change or title is empty
    if (board.groups[groupIdx].title === title || !title) return;
    board.groups[groupIdx].title = title;
    try {
      await dispatch(onSaveBoard(board));
    } catch (err) {
      console.log('Cant change group title', err);
    }
  };
  if (!title) return <></>
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="group-preview-title"
        value={title}
        onChange={handleChange}
        type="text"
        onBlur={saveGroupTitle}
      />
    </form>
  );
}
