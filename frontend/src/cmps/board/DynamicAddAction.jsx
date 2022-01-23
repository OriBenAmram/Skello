import React from 'react';
import {connect} from 'react-redux';
import {GrAdd, GrClose} from 'react-icons/gr';

// Action
import {addTask, addGroup} from '../../store/board/board.action.js';

class _DynamicAddAction extends React.Component {
  // props:
  state = {
    isFormOpen: this.props.isFormOpen,
    title: '',
  };

  toggleForm = () => {
    this.setState({isFormOpen: !this.state.isFormOpen});
  };

  handleChange = ({target}) => {
    const value = target.value;
    this.setState({title: value});
  };

  onAddGroup = async () => {
    const {title} = this.state;
    const {boardId, toggleDynamicBodyAction} = this.props;
    if (!title) return;
    await this.props.addGroup(title, boardId);
    this.cleanForm();
    this.toggleForm();
    // toggleDynamicBodyAction();
  };

  onAddTask = async () => {
    const {title} = this.state;
    const {groupId, boardId, toggleDynamicBodyAction} = this.props;
    if (!title) return;
    await this.props.addTask(title, groupId, boardId);
    this.cleanForm();
    this.toggleForm();
    toggleDynamicBodyAction();
  };

  cleanForm = () => {
    this.setState({title: ''});
  };

  // Form
  renderTaskInput = () => {
    const {isList, toggleDynamicBodyAction} = this.props;
    const {title} = this.state;
    const placeholder = isList ? 'Enter list title...' : 'Enter a title for this card...';
    const btnText = isList ? 'Add List' : 'Add Card';
    return (
      <div className={`add-task-open ${isList ? 'group' : ''}`}>
        <textarea
          autoFocus
          placeholder={placeholder}
          onChange={this.handleChange}
          value={title}
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
              toggleDynamicBodyAction();
            }}
            className="task-btn close-task">
            <GrClose />
          </button>
        </div>
      </div>
    );
  };

  // Add group/task
  renderAddButton = () => {
    const {isList, groupId, toggleDynamicBodyAction} = this.props;

    const buttonText = isList ? 'Add another list' : 'Add a card';

    return (
      <div
        className={`add-task-container flex ${isList ? 'group' : ''}`}
        onClick={() => {
          if (!isList) toggleDynamicBodyAction();
          this.toggleForm();
        }}>
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

const mapDispatchToProps = {
  addTask,
  addGroup,
};

export const DynamicAddAction = connect(null, mapDispatchToProps)(_DynamicAddAction);
