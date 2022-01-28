import React from 'react';
import {connect} from 'react-redux';

// Cmps
import {Loader} from '../Loader';
import {DueDatePreview} from './DueDatePreview';
import {TaskLabels} from './TaskLabels';

// Icons
import {GrTextAlignFull} from 'react-icons/gr';
import {IoMdCheckboxOutline} from 'react-icons/io';
import attachmentIcon from '../../assets/imgs/attachmentIcon.svg';
import commentIcon from '../../assets/imgs/commentIcon.svg';

// Action
import {updateTask} from '../../store/board/board.action';

class _QuickCardEditor extends React.Component {
  constructor() {
    super();
    this.todos = 0;
    this.finishedTodos = 0;
  }

  state = {
    task: null,
    taskTitle: '',
  };

  componentDidMount() {
    const {task, groupId} = this.props;
    this.setState({task, taskTitle: task.title});
  }

  handleChange = ({target}) => {
    const field = target.name;
    const value = target.value;
    this.setState(prevState => ({...prevState, [field]: value}));
  };

  handleFocus = event => {
    event.target.select();
  };

  onSave = event => {
    const {updateTask, board, groupId, task, toggleQuickCardEditor} = this.props;
    const taskToUpdate = {...this.state.task};
    taskToUpdate.title = this.state.taskTitle;
    updateTask(board._id, groupId, task.id, taskToUpdate);
    toggleQuickCardEditor(event, null, '');
  };

  getCheckListsInfo = () => {
    const {task} = this.state;
    this.todos = 0;
    this.finishedTodos = 0;
    task.checklists.forEach(checklist => {
      this.todos += checklist.todos.length;
      checklist.todos.forEach(todo => {
        if (todo.isDone) this.finishedTodos++;
      });
    });
    if (!this.finishedTodos / this.todos) return;
    return `${this.finishedTodos}/${this.todos}`;
  };

  getAvatarBackground = member => {
    return {background: `url(${member.imgUrl}) center center / cover`};
  };

  render() {
    const {task, taskTitle} = this.state;
    const {position, board} = this.props;

    if (!task) return <Loader />;

    return (
      <div className="quick-card-editor" style={{position: 'fixed', top: position.top, left: position.left}}>
        <div>
          <div className="task-preview-edit" style={{width: position.width}}>
            {/* HEADER */}
            <div className="task-preview-heder">
              {task.style.backgroundColor && (
                <div className="header-color" style={{backgroundColor: task.style.backgroundColor}}></div>
              )}
              {task.style.backgroundImage.url && (
                <div className="img-wrapper">
                  <img src={task.style.backgroundImage.url} />
                </div>
              )}
            </div>

            {/* DETAILS */}
            <div className="task-details-wrapper">
              <div className="task-details">
                {task.labelIds?.length > 0 && (
                  <TaskLabels labelIds={task.labelIds} boardLabels={board.labels} areLabelsShown={null} />
                )}
                <textarea
                  className="clean-textarea"
                  type="text"
                  value={taskTitle}
                  name="taskTitle"
                  onChange={this.handleChange}
                  autoFocus
                  onFocus={this.handleFocus}></textarea>
              </div>

              {/* BADGES */}
              <div className="task-badges flex">
                <div className="badges-icons flex justify-center align-center">
                  {/* DUE DATE */}
                  {task.dueDate && (
                    <div className="due-date-container">
                      <DueDatePreview dueDate={task.dueDate} task={task} />
                    </div>
                  )}
                  {/* DESCRIPTION */}
                  {task.description?.length > 0 && (
                    <div className="badge description flex justify-center align-center">
                      <div className="badge-icon">
                        <GrTextAlignFull className="svg-icon" />
                      </div>
                    </div>
                  )}
                  {/* COMMENTS */}
                  {task.comments?.length > 0 && (
                    <div className="badge comments flex justify-center align-center">
                      <div className="badge-icon">
                        <img className="svg-icon" src={commentIcon} alt="" />
                      </div>
                      <div className="badge-txt">{task.comments.length}</div>
                    </div>
                  )}

                  {/* ATTACHMENTS  */}
                  {task.attachments?.length > 0 && (
                    <div className="badge attachments flex justify-center align-center">
                      <div className="badge-icon">
                        <img className="svg-icon" src={attachmentIcon} alt="" />
                      </div>
                      <div className="badge-txt">{task.attachments.length}</div>
                    </div>
                  )}

                  {/* CHECKLIST */}
                  {task.checklists?.length > 0 && (
                    <div
                      className={`badge checklists flex justify-center align-center ${
                        this.getCheckListsInfo() ? 'all-done' : ''
                      }`}>
                      <div className="badge-icon">
                        <IoMdCheckboxOutline className="svg-icon" style={{filter: 'none'}} />
                      </div>
                      <div className="badge-txt"> {this.getCheckListsInfo()}</div>
                    </div>
                  )}
                </div>

                {/* MEMBERS */}
                {task.members?.length > 0 && (
                  <div className="badges-members flex justify-flex-end">
                    {task.members.map((member, index) => (
                      <div
                        style={this.getAvatarBackground(member)}
                        className="member-avatar"
                        key={index}></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="secondary-btn" onClick={this.onSave}>
            Save
          </button>
        </div>
        <div className="quick-task-editor-buttons"></div>
      </div>
    );
  }
}

function mapStateToProps({boardModule}) {
  return {
    board: boardModule.board,
  };
}

const mapDispatchToProps = {
  updateTask,
};

export const QuickCardEditor = connect(mapStateToProps, mapDispatchToProps)(_QuickCardEditor);
