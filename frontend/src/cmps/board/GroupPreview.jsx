import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import { IoEllipsisHorizontal } from 'react-icons/io5';

// Cmps
import { TaskList } from './TaskList';
import { GroupPreviewTitle } from './GroupPreviewTitle';
import { AddNewTask } from './AddNewTask';
import { DynamicActionModal } from '../dynamic-actions/DynamicActionModal';

// Action
import { removeGroup } from '../../store/board/board.action';

export function GroupPreview({ group, boardId, board, index, boardLabels, areLabelsShown, setLabelsShown, toggleQuickCardEditor }) {

  const dispatch = useDispatch();
  const [isBodyRender, setIsBodyRender] = useState(false);

  const filterBy = useSelector(state => state.boardModule.filterBy);
  const [modal, setModal] = useState(false)

  const toggleIsBodyRender = () => {
    setIsBodyRender(isBodyRender => !isBodyRender);
  };

  const toggleModal = ({ event, type, isDeleteModal }) => {
    if (modal.isModalOpen) {

      setModal({ ...modal, isModalOpen: false })
      return
    }

    setModal({ isModalOpen: true, type, event, isDeleteModal })
  }

  const onRemoveGroup = (groupId) => {
    dispatch(removeGroup(groupId, boardId))
  }

  function getFilteredTask() {
    const { txt, labels, members } = filterBy
    let filteredTasks = group.tasks;

    if (txt) {
      filteredTasks = filteredTasks.filter(task => task.title.toLowerCase().includes(txt.toLowerCase()))
    }
    if (members?.length) {
      filteredTasks = filteredTasks.filter(task => task.members.some(entity => filterBy.members.includes(entity._id)))
    }
    if (labels?.length) {
      filteredTasks = filteredTasks.filter(task => task.labelIds.some(entity => filterBy.labels.includes(entity)))
    }

    return filteredTasks
  }

  return (
    <Draggable draggableId={group.id} index={index}>
      {provided => (
        <article
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="group-preview flex column">
          {/* TITLE */}
          <div className="group-preview-header flex justify-space-between align-center">
            <GroupPreviewTitle board={board} group={group} />
            <div
              className="header-more-options"
              onClick={(event) => toggleModal({ event, type: 'removeMenuPopup', isDeleteModal : true})}>
              <IoEllipsisHorizontal />
              {modal.isModalOpen && <DynamicActionModal isDeleteModal={modal.isDeleteModal} onRemoveGroup={onRemoveGroup} groupId={group.id} toggleModal={toggleModal} type={modal.type} event={modal.event} />}
            </div>
          </div>

          {/* BODY-MAIN */}
          <div className="group-preview-main">
            <TaskList
              areLabelsShown={areLabelsShown}
              setLabelsShown={setLabelsShown}
              groupId={group.id}
              boardId={boardId}
              tasks={getFilteredTask()}
              boardLabels={boardLabels}
              toggleQuickCardEditor={toggleQuickCardEditor}
            />
            {isBodyRender && (
              <AddNewTask
                groupId={group.id}
                boardId={boardId}
                toggleIsBodyRender={toggleIsBodyRender}
                isForm={true}
              />
            )}
          </div>

          {/* FOOTER */}
          {!isBodyRender && (
            <AddNewTask
              groupId={group.id}
              boardId={boardId}
              toggleIsBodyRender={toggleIsBodyRender}
              isForm={false}
            />
          )}
        </article>
      )}
    </Draggable>
  );
}
