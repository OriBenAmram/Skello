import React from 'react';
import {GrAdd, GrClose} from 'react-icons/gr';

export class ActionButton extends React.Component {
  state = {
    isFormOpen: false,
    txt: '',
  };

  toggleForm = () => {
    this.setState({isFormOpen: !this.state.isFormOpen});
  };

  handleChange = ({target}) => {
    const value = target.value;
    this.setState({txt: value});
  };

  onAddTask = () => {
    console.log('Task Added');
  };

  renderTaskInput = () => {
    const {isList} = this.props;
    const {txt} = this.state;
    const placeholder = isList ? 'Enter list title...' : 'Enter a title for this task...';
    const btnText = isList ? 'Add List' : 'Add Card';
    return (
      <div className="add-task-open">
        <textarea autoFocus placeholder={placeholder} onChange={this.handleChange} value={txt}></textarea>
        <div className="task-btns flex align-center">
          <button onClick={this.onAddTask} className="task-btn save-task">
            {btnText}
          </button>
          <button onClick={this.toggleForm} className="task-btn close-task">
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
      <div className="add-btn flex" onClick={this.toggleForm}>
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
