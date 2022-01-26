import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {GrClose} from 'react-icons/gr';

// Actions
import {addChecklist} from '../../store/board/board.action';

export function CheckListModalContent({board, group, task, toggleModal}) {
  const [checklistTitle, setChecklistTitle] = useState('checklist');
  const [isEditingTitle, setEditingTitle] = useState(false);
  const dispatch = useDispatch();

  const onAddChecklist = ev => {
    ev.preventDefault();
    toggleModal(ev);
    // close modal after add
    dispatch(addChecklist(checklistTitle, group.id, board, task.id, `Added checklist`));
  };

  return (
    <section className="checklist-modal">
      <section className="modal-header">
        <button className="simple-close-btn" onClick={toggleModal}>
          <GrClose className="btn-content" />
        </button>
        Add checklist
      </section>
      <div className="pop-over-content">
        {!isEditingTitle && <section></section>}
        <form>
          <label className="title-checklist">Title</label>
          <input
            className="checklist-sub-title"
            type="text"
            value={checklistTitle}
            data-default={checklistTitle}
            onChange={ev => setChecklistTitle(ev.target.value)}
          />
          <input className="add-button" type="submit" value="Add" onClick={ev => onAddChecklist(ev)} />
        </form>
      </div>
    </section>
  );
}
