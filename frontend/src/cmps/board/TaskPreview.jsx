import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Draggable} from 'react-beautiful-dnd';
import {IoReorderFourOutline, IoAttachSharp, IoChatboxSharp} from 'react-icons/io5';
import {BsCheck2Square} from 'react-icons/bs';

// CMPS
import {TaskLabels} from './TaskLabels';
import {EditIcon} from '../EditIcon';
import {QuickCardEditor} from './QuickCardEditor';
import {DueDatePreview} from './DueDatePreview';

export function TaskPreview(props) {
  const {task, boardId, groupId, index, boardLabels, areLabelsShown, setLabelsShown} = props;
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
  } = task;

  // const [task.style.backgroundColor, setPreviewColor] = useState(null);
  // const [task.style.backgroundImage, setPreviewImage] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const {isCover, isTextDarkMode = true} = task.style;

  // useEffect(() => {
  //   setPreviewColor(task.style.backgroundColor);
  //   setPreviewImage(task.style.backgroundImage);
  // }, [task]);

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
    return `${finishedTodos}/${todos}`;
  };

  if (!isEdit) {
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
                onClick={ev => {
                  ev.preventDefault();
                  setIsEdit(isEdit => !isEdit);
                }}>
                <EditIcon />
              </div>

              {/* {!isCover && (
                <section className="upper-preview-background" style={getUpperPreviewBackground()}></section>
              )} */}
              <section className="upper-preview-background" style={getUpperPreviewBackground()}></section>

              <section style={getPreviewStyle()} className={`task-preview ${getPreviewClass()}`}>
                {/* <div className='inner-fade-wallpaper'></div> */}
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
                <div className="task-badges">
                  <div className="badges-icons flex">
                    {/* DUE DATE */}
                    {dueDate && (
                      <div>
                        <DueDatePreview
                          dueDate={dueDate}
                          isDone={isDone}
                          taskId={task.id}
                          groupId={groupId}
                        />
                      </div>
                    )}
                    {/* DESCRIPTION */}
                    {description?.length > 0 && (
                      <div className="badge description">
                        <div className="badge-icon">
                          <IoReorderFourOutline />
                        </div>
                      </div>
                    )}
                    {/* COMMENTS */}

                    {/* ATTACHMENTS  */}
                    {attachments?.length > 0 && (
                      <div className="badge attachments flex">
                        <div className="badge-icon">
                          <IoAttachSharp />
                        </div>
                        <div>{attachments.length}</div>
                      </div>
                    )}

                    {/* CHECKLIST */}
                    {checklists?.length > 0 && (
                      <div className="badge checklists flex">
                        <div className="badge-icon">
                          <BsCheck2Square />
                        </div>
                        <div> {getCheckListsInfo()}</div>
                      </div>
                    )}
                  </div>
                  <div className="badges-members"></div>
                </div>
              </section>
            </div>
          </Link>
        )}
      </Draggable>
    );
  } else {
    return (
      //Edit mode
      <div className={`screen-overlay ${isEdit ? 'covered' : ''}`}>
        <QuickCardEditor task={task} groupId={groupId} boardId={boardId} boardLabels={boardLabels} />
      </div>
    );
  }
}
