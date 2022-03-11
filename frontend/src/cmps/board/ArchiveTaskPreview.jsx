
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Cmps
import { DueDatePreview } from './DueDatePreview';

// Icons
import { GrTextAlignFull } from 'react-icons/gr';
import { IoMdCheckboxOutline } from 'react-icons/io';
import attachmentIcon from '../../assets/imgs/attachmentIcon.svg';
import commentIcon from '../../assets/imgs/commentIcon.svg';



export function AcrhiveTaskPreview({ task, groupId }) {
    const board = useSelector(state => state.boardModule.board);
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

    const getPreviewStyle = () => {
        // Cover
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
                return { backgroundColor: task.style.backgroundColor };
            }

            // Not Cover - Half!
        } else {
            if (task.style.backgroundImage.url) {
                // Has an image
                return {
                    padding: '6px 8px 2px',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                };
            } else {
                return {
                    padding: '6px 8px 2px',
                    borderTopLeftRadius: '0px',
                    borderTopRightRadius: '0px',
                };
            }
        }
    };

    const getPreviewClass = () => {
        if (task.style.isCover && task.style.backgroundImage?.url) {
            return 'full-cover-mode';
        }
        return '';
    };

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

    const getAvatarBackground = member => {
        return { background: `url(${member.imgUrl}) center center / cover` };
    };

    return (
        <Link to={`/board/${board._id}/${groupId}/${task.id}`}>
            <div>
                <section className="upper-preview-background" style={getUpperPreviewBackground()}></section>
                <section style={getPreviewStyle()} className={`task-preview ${getPreviewClass()} `}>
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
                    <div className="task-labels-container flex">
                        {labelIds.map((labelId, index) => {
                            const label = board.labels.find(label => label.id === labelId);
                            if (label) {
                                return (
                                    <div
                                        className={`label flex`}
                                        style={{ background: label.color }}
                                        key={index}
                                    >
                                    </div>
                                );
                            } else return null;
                        })}
                    </div>

                    {/* TITLE */}
                    <div
                        className={`task-title ${isTextDarkMode ? 'bright-text-mode' : 'dark-text-mode'}`}
                        style={getTitleStyleByCover()}>
                        <div className="full-cover-mode-upper-gradient"></div>
                        <div className={`title-container`}>
                            <p>{title}</p>
                        </div>
                        {/* <div className={`title-container ${(isBadges && !isCover) ? 'expend' : ''}`}>
                        <p>{title}</p>
                    </div> */}
                    </div>

                    {/* BADGES */}
                    <div className="task-badges flex">
                        <div className="badges-icons flex justify-center align-center">
                            {/* DUE DATE */}
                            {!isCover && dueDate && (
                                <div className="due-date-container">
                                    <DueDatePreview
                                        dueDate={dueDate}
                                        task={task}
                                        boardId={board._id}
                                        groupId={groupId}
                                    />
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

                            {/* MEMBERS */}
                            {!isCover && task.members?.length > 0 && (
                                <div className="badges-members flex justify-flex-end">
                                    {task.members.map((member, index) => (
                                        <div style={getAvatarBackground(member)} className="member-avatar" key={index} >
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </Link>
    )
}