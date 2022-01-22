import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onSaveBoard} from '../../store/board/board.action.js';

export function GroupPreviewTitle({group}) {
  const newGroup = {...group};
  const board = useSelector(state => state.boardModule.board);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(newGroup.title);

  const handleChange = ({target}) => {
    const title = target.value;
    setTitle(title);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    saveGroupTitle();
  };

  const saveGroupTitle = async () => {
    const newBoard = {...board};
    const groupIdx = newBoard.groups.findIndex(group => group.id === newGroup.id);
    // Same title - no change
    if (newBoard.groups[groupIdx].title === title) return;
    newBoard.groups[groupIdx].title = title;
    try {
      await dispatch(onSaveBoard(newBoard));
    } catch (err) {
      console.log('Cant change group title', err);
    }
  };

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
