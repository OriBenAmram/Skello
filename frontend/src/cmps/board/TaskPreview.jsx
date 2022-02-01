import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

// Icons
import { GrTextAlignFull } from 'react-icons/gr';
import { IoMdCheckboxOutline } from 'react-icons/io';
import attachmentIcon from '../../assets/imgs/attachmentIcon.svg';
import editIcon from '../../assets/imgs/editIcon.svg';
import commentIcon from '../../assets/imgs/commentIcon.svg';

// Blind-Mode
import redBlindColorSign from '../../assets/imgs/blind-color/red.svg';
import purpleBlindColorSign from '../../assets/imgs/blind-color/purple.svg';
import yellowBlindColorSign from '../../assets/imgs/blind-color/yellow.svg';
import greenBlindColorSign from '../../assets/imgs/blind-color/green.svg';
import blueBlindColorSign from '../../assets/imgs/blind-color/blue.svg';
import buggerBlindColorSign from '../../assets/imgs/blind-color/bugger-green.svg';
import darkBlindColorSign from '../../assets/imgs/blind-color/dark-navy.svg';
import lightBlueBlindColorSign from '../../assets/imgs/blind-color/light-blue.svg';
import orangeBlindColorSign from '../../assets/imgs/blind-color/orange.svg';
import pinkBlindColorSign from '../../assets/imgs/blind-color/pink.svg';
// CMPS
import { TaskLabels } from './TaskLabels';
import { DueDatePreview } from './DueDatePreview';

// Action
import { toggleModal } from '../../store/app/app.action';

export function TaskPreview(props) {
  const isBlindMode = useSelector(state => state.appModule.isBlindMode);
  const { task, boardId, groupId, index, boardLabels, areLabelsShown, setLabelsShown, toggleQuickCardEditor } =
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

  const { isCover, isTextDarkMode = true } = task.style;
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.appModule.popupModal.isModalOpen)

  const [isBadges, setIsBadges] = useState(false)

  useEffect(() => {
    if (dueDate || description?.length > 0 || comments?.length > 0 ||
      attachments?.length > 0 || checklists?.length > 0 || task.members?.length > 0) {
      setIsBadges(true)
    }

  }, [])

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
        if (isBlindMode) return { backgroundColor: task.style.backgroundColor, paddingLeft: '25px' };
        return { backgroundColor: task.style.backgroundColor };
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

  // Other Member Modal
  const onMemberClick = (event, member) => {
    dispatch(toggleModal({ event, type: 'taskProfileMemberModal', member, isShown: !isModalOpen, task, groupId }));
  }

  // Title style by cover
  const getTitleStyleByCover = () => {
    if (isCover) {
      if (task.style.backgroundImage?.url) {
        return { fontSize: '16px', fontWeight: '500' };
      } else {
        if (task.style.backgroundColor === '#344563')
          return { fontSize: '16px', fontWeight: '500', color: 'white' };
        return { fontSize: '16px', fontWeight: '500' };
      }
    }
    // return {fontSize: '16px', fontWeight: '500'};
  };

  const getUpperPreviewBackground = () => {
    if (isCover) return { height: '0px' };
    if (task.style.backgroundImage.url) {
      // Has an image
      return { background: `url(${task.style.backgroundImage.url}) center center / cover`, height: '160px' };
    } else if (task.style.backgroundColor) {
      // Doesnt have an imageborder-top-left-radius
      return { backgroundColor: task.style.backgroundColor, height: '32px' };
    }
  };

  const getPreviewClass = () => {
    if (task.style.isCover && task.style.backgroundImage?.url) {
      return 'full-cover-mode';
    }
    return '';
  };

  const getAvatarBackground = member => {
    return { background: `url(${member.imgUrl}) center center / cover` };
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

  const getColorBlindSignByColor = (color) => {
    if (!color) return
    switch (color) {
      // red
      case '#ed5a46':
        return redBlindColorSign
      // purple
      case '#c377e0':
        return purpleBlindColorSign
      // yellow
      case '#f2d600':
        return yellowBlindColorSign
      // green
      case '#61bd4f':
        return greenBlindColorSign
      // blue
      case '#0079bf':
        return blueBlindColorSign
      // bugger
      case '#51e898':
        return buggerBlindColorSign
      // dark-navy
      case '#344563':
        return darkBlindColorSign
      // light-blue
      case '#00c2e0':
        return lightBlueBlindColorSign
      // orange
      case '#ff9f1a':
        return orangeBlindColorSign
      // pink
      case '#ff78cb':
        return pinkBlindColorSign

      default:
        return redBlindColorSign
    }
  }

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
            {isBlindMode && <div>
              <img className='blind-color-sign-expended-svg' src={getColorBlindSignByColor(task.style.backgroundColor)} />
              <img className='blind-color-sign-expended-svg' style={{ top: '16px' }} src={getColorBlindSignByColor(task.style.backgroundColor)} />
            </div>}

            <section style={getPreviewStyle()} className={`task-preview ${getPreviewClass()} `}>
              {isBlindMode && isCover && <div>
                <img className='blind-color-sign-expended-svg' style={{ top: '4px' }} src={getColorBlindSignByColor(task.style.backgroundColor)} />
                <img className='blind-color-sign-expended-svg' style={{ top: '20px' }} src={getColorBlindSignByColor(task.style.backgroundColor)} />
                <img className='blind-color-sign-expended-svg' style={{ top: '36px' }} src={getColorBlindSignByColor(task.style.backgroundColor)} />
              </div>}
              {/* IMG */}
              {attachments?.length > 0 && !task.style.backgroundImage.url && !isCover && (
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
                className={`task-title ${isTextDarkMode ? 'bright-text-mode' : 'dark-text-mode'}`}
                style={getTitleStyleByCover()}>
                <div className="full-cover-mode-upper-gradient"></div>
                <div className={`title-container ${(isBadges && !isCover) ? 'expend' : ''}`}>
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
                      className={`badge checklists flex justify-center align-center ${todos === finishedTodos && todos ? 'all-done' : ''
                        }`}>
                      <div className="badge-icon">
                        <IoMdCheckboxOutline className="svg-icon" style={{ filter: 'none' }} />
                      </div>
                      <div className="badge-txt"> {getCheckListsInfo()}</div>
                    </div>
                  )}
                </div>

                {/* MEMBERS */}
                {!isCover && task.members?.length > 0 && (
                  <div className="badges-members flex justify-flex-end">
                    {task.members.map((member, index) => (
                      <div style={getAvatarBackground(member)} className="member-avatar" key={index} onClick={(ev) => {
                        ev.preventDefault()
                        onMemberClick(ev, member)
                      }}></div>
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
