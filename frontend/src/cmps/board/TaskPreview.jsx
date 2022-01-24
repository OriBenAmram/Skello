import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

// CMPS
import { TaskLabels } from './TaskLabels';

export function TaskPreview(props) {
  const { task, boardId, groupId, index, boardLabels, areLabelsShown, setLabelsShown } = props;
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
  } = task;

  const [previewBackgroundColor, setPreviewColor] = useState(null);
  const [previewBackgroundImage, setPreviewImage] = useState(null);

  const { isCover } = task.style

  useEffect(() => {

    setPreviewImage(task.style.backgroundImage)
    setPreviewColor(task.style.backgroundColor)

  }, [task]);

  const getPreviewStyle = () => {
    // Cover !
    if (isCover) {
      if (previewBackgroundImage?.url) {
        // Has an image
        console.log('Returning a picture - previewBackgroundImage.url', previewBackgroundImage.url)
        return { background: `url(${previewBackgroundImage.url}) center center / cover`, height: '160px' }
      } else {
        // Doesnt have an image
        return { backgroundColor: previewBackgroundColor }
      }

      // Not Cover - Half!
    } else {

      if (previewBackgroundImage?.url) {
        // Has an image
        return { backgroundColor: 'white', padding: '6px 8px 2px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }
      } else {
        // Doesnt have an imageborder-top-left-radius
        return { backgroundColor: 'white', padding: '6px 8px 2px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }
      }
    }
  }

  // Title style by cover
  const getTitleStyleByCover = () => {
    if (isCover) return { fontSize: '16px', fontWeight: '500' }
    // return { backgroundColor: 'green' }
  }

  const getUpperPreviewBackground = () => {
    console.log('task:', task);

    if (previewBackgroundImage?.url) {
      // Has an image
      return { background: `url(${previewBackgroundImage.url}) center center / cover`, height: '160px' }
    } else {
      // Doesnt have an imageborder-top-left-radius
      console.log('previewBackgroundColor:', previewBackgroundColor);
      return { backgroundColor: previewBackgroundColor }
    }

  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <Link to={`/board/${boardId}/${groupId}/${task.id}`}>
          <div className='task-preview-wrapper'>
            {(!isCover) && <section className='upper-preview-background' style={getUpperPreviewBackground()} >
              {/* {(!isCover && !previewBackgroundColor) && <section className='upper-preview-background' style={getUpperPreviewBackground()} > */}

            </section>}

            <section
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              style={getPreviewStyle()}
              className="task-preview">


              {/* IMG */}
              {attachments?.length > 0 && !isCover && (
                <img
                  src={attachments[0].url}
                  style={{
                    backgroundColor: 'white',
                    borderRadius: '3px',
                    objectFit: 'cover',
                    maxHeight: 240,
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
              <div className="task-title" style={getTitleStyleByCover()}>
                <p>{title}</p>
              </div>
            </section>
          </div>

        </Link>
      )}
    </Draggable>
  );
}
