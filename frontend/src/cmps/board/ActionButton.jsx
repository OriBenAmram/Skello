import React from 'react';
import {connect} from 'react-redux';

import {GrAdd, GrClose} from 'react-icons/gr';
import {addTask, addGroup} from '../../store/board/board.action.js';

class _ActionButton extends React.Component {
  state = {
    isFormOpen: false,
    taskTitle: '',
  };

  toggleForm = () => {
    this.setState({isFormOpen: !this.state.isFormOpen});
  };

  handleChange = ({target}) => {
    const value = target.value;
    this.setState({taskTitle: value});
  };

  onAddGroup = async () => {
    console.log('Group Added');
    const {taskTitle} = this.state;
    const {boardId} = this.props;
    if (!taskTitle) return;
    await this.props.addGroup(taskTitle, boardId);
    this.cleanForm();
    this.toggleForm();
  };

  onAddTask = async () => {
    console.log('Task Added');
    const {taskTitle} = this.state;
    const {groupId, boardId} = this.props;

    if (!taskTitle) return;
    await this.props.addTask(taskTitle, groupId, boardId);
    this.cleanForm();
    this.toggleForm();
  };

  cleanForm = () => {
    this.setState({taskTitle: ''});
  };

  renderTaskInput = () => {
    const {isList} = this.props;
    const {taskTitle} = this.state;
    const placeholder = isList ? 'Enter list title...' : 'Enter a title for this task...';
    const btnText = isList ? 'Add List' : 'Add Card';
    return (
      <div className={`add-task-open ${isList ? 'group' : ''}`}>
        <textarea
          autoFocus
          placeholder={placeholder}
          onChange={this.handleChange}
          value={taskTitle}
          // onBlur={() => {
          //   this.toggleForm();
          //   this.cleanForm();
          // }}
        ></textarea>
        <div className="task-btns flex align-center">
          <button
            onClick={() => {
              isList ? this.onAddGroup() : this.onAddTask();
            }}
            className="task-btn save-task">
            {btnText}
          </button>
          <button
            onClick={() => {
              this.toggleForm();
              this.cleanForm();
            }}
            className="task-btn close-task">
            <GrClose />
          </button>
        </div>
      </div>
    );
  };

  renderAddButton = () => {
    const {isList} = this.props;

    const buttonText = isList ? 'Add another list' : 'Add another task';

    return (
      <div className={`add-btn flex ${isList ? 'group' : ''}`} onClick={this.toggleForm}>
        <GrAdd className="icon" />
        <p>{buttonText}</p>
      </div>
    );
  };

  render() {
    const {isFormOpen} = this.state;

    return isFormOpen ? this.renderTaskInput() : this.renderAddButton();
  }
}

// function mapStateToProps({ boardModule }) {
//   return {
//     board: boardModule.board,
//   };
// }

const mapDispatchToProps = {
  addTask,
  addGroup,
};

export const ActionButton = connect(null, mapDispatchToProps)(_ActionButton);
// export const ActionButton = connect(mapStateToProps, mapDispatchToProps)(_ActionButton)
