import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Draggable} from 'react-beautiful-dnd';

// Icons
import {GrTextAlignFull} from 'react-icons/gr';
import {IoMdCheckboxOutline} from 'react-icons/io';
import attachmentIcon from '../../assets/imgs/attachmentIcon.svg';
import editIcon from '../../assets/imgs/editIcon.svg';
import commentIcon from '../../assets/imgs/commentIcon.svg';
// CMPS
import {TaskLabels} from './TaskLabels';
import {DueDatePreview} from './DueDatePreview';

export function TaskPreview(props) {
  const {task, boardId, groupId, index, boardLabels, areLabelsShown, setLabelsShown, toggleQuickCardEditor} =
    props;
  const {
    archiveAt,
    attachments,
    byMember,
    createdAt,
    description,
    dueDate,
    isDone,
    labelIds,
    members,
    style,
    title,
    checklists,
    comments,
  } = task;

  const {isCover, isTextDarkMode = true} = task.style;

  const getPreviewStyle = () => {
    // Cover !
    if (isCover) {
      if (task.style.backgroundImage.url) {
        // Has an image
        return {
          background: `url(${task.style.backgroundImage.url}) center center / cover`,
          width: '100%',
          minHeight: '180px',
        };
      } else {
        // Doesnt have an image
        return {backgroundColor: task.style.backgroundColor};
      }

      // Not Cover - Half!
    } else {
      if (task.style.backgroundImage.url) {
        // Has an image
        return {
          // backgroundColor: 'white',
          padding: '6px 8px 2px',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
        };
      } else {
        // Doesnt have an imageborder-top-left-radius
        return {
          // backgroundColor: 'white',
          padding: '6px 8px 2px',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
        };
      }
    }
  };

  // Title style by cover
  const getTitleStyleByCover = () => {
    if (isCover) {
      if (task.style.backgroundImage?.url) {
        return {fontSize: '16px', fontWeight: '500'};
      } else {
        if (task.style.backgroundColor === '#344563')
          return {fontSize: '16px', fontWeight: '500', color: 'white'};
        return {fontSize: '16px', fontWeight: '500'};
      }
    }
    // return {fontSize: '16px', fontWeight: '500'};
  };

  const getUpperPreviewBackground = () => {
    if (isCover) return {height: '0px'};
    if (task.style.backgroundImage.url) {
      // Has an image
      return {background: `url(${task.style.backgroundImage.url}) center center / cover`, height: '160px'};
    } else if (task.style.backgroundColor) {
      // Doesnt have an imageborder-top-left-radius
      return {backgroundColor: task.style.backgroundColor, height: '32px'};
    }
  };

  const getPreviewClass = () => {
    if (task.style.isCover && task.style.backgroundImage?.url) {
      return 'full-cover-mode';
    }
    return '';
  };

  const getAvatarBackground = member => {
    return {background: `url(${member.imgUrl}) center center / cover`};
  };

  // task checklist todo globals
  let todos;
  let finishedTodos;

  const getCheckListsInfo = () => {
    todos = 0;
    finishedTodos = 0;
    checklists.forEach(checklist => {
      todos += checklist.todos.length;
      checklist.todos.forEach(todo => {
        if (todo.isDone) finishedTodos++;
      });
    });
    if (!(finishedTodos / todos)) return;
    return `${finishedTodos}/${todos}`;
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <Link to={`/board/${boardId}/${groupId}/${task.id}`}>
          <div
            className="task-preview-wrapper"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <div
              className="edit-icon"
              onClick={event => {
                event.preventDefault();
                toggleQuickCardEditor(event, task, groupId);
              }}>
              <img src={editIcon} alt="" />
            </div>

            <section className="upper-preview-background" style={getUpperPreviewBackground()}></section>

            <section style={getPreviewStyle()} className={`task-preview ${getPreviewClass()}`}>
              {/* IMG */}
              {attachments?.length > 0 && !isCover && (
                <img
                  src={attachments[0].url}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    objectFit: 'cover',
                    maxHeight: '240px',
                    marginBottom: 5,
                  }}
                  alt="attachment"
                />
              )}

              {/* LABELS */}
              {labelIds?.length > 0 && !isCover && (
                <TaskLabels
                  areLabelsShown={areLabelsShown}
                  setLabelsShown={setLabelsShown}
                  labelIds={labelIds}
                  boardLabels={boardLabels}
                />
              )}

              {/* TITLE */}
              <div
                className={`task-title ${isTextDarkMode ? 'dark-text-mode' : 'bright-text-mode'}`}
                style={getTitleStyleByCover()}>
                <div className="full-cover-mode-upper-gradient"></div>
                <div className="title-container">
                  <p>{title}</p>
                </div>
              </div>

              {/* BADGES */}
              <div className="task-badges flex">
                <div className="badges-icons flex justify-center align-center">
                  {/* DUE DATE */}
                  {!isCover && dueDate && (
                    <div className="due-date-container">
                      <DueDatePreview dueDate={dueDate} task={task} />
                      {/* <DueDatePreview
                        dueDate={dueDate}
                        isDone={isDone}
                        taskId={task.id}
                        groupId={groupId}
                        task={task}
                      /> */}
                    </div>
                  )}
                  {/* DESCRIPTION */}
                  {!isCover && description?.length > 0 && (
                    <div className="badge description flex justify-center align-center">
                      <div className="badge-icon">
                        <GrTextAlignFull className="svg-icon" />
                      </div>
                    </div>
                  )}
                  {/* COMMENTS */}
                  {!isCover && comments?.length > 0 && (
                    <div className="badge comments flex justify-center align-center">
                      <div className="badge-icon">
                        <img className="svg-icon" src={commentIcon} alt="" />
                      </div>
                      <div className="badge-txt">{comments.length}</div>
                    </div>
                  )}

                  {/* ATTACHMENTS  */}
                  {!isCover && attachments?.length > 0 && (
                    <div className="badge attachments flex justify-center align-center">
                      <div className="badge-icon">
                        <img className="svg-icon" src={attachmentIcon} alt="" />
                      </div>
                      <div className="badge-txt">{attachments.length}</div>
                    </div>
                  )}

                  {/* CHECKLIST */}
                  {!isCover && checklists?.length > 0 && (
                    <div
                      className={`badge checklists flex justify-center align-center ${
                        todos === finishedTodos && todos ? 'all-done' : ''
                      }`}>
                      <div className="badge-icon">
                        <IoMdCheckboxOutline className="svg-icon" style={{filter: 'none'}} />
                      </div>
                      <div className="badge-txt"> {getCheckListsInfo()}</div>
                    </div>
                  )}
                </div>

                {/* MEMBERS */}
                {!isCover && task.members?.length > 0 && (
                  <div className="badges-members flex justify-flex-end">
                    {task.members.map((member, index) => (
                      <div style={getAvatarBackground(member)} className="member-avatar" key={index}></div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          </div>
        </Link>
      )}
    </Draggable>
  );
}
