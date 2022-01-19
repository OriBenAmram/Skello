import React from 'react';
import {GrAdd} from 'react-icons/gr';

export class ActionButton extends React.Component {
  renderAddButton = () => {
    const {isList} = this.props;

    const buttonText = isList ? 'Add another list' : 'Add another card';

    return (
      <div>
        <GrAdd />
        <p>{buttonText}</p>
      </div>
    );
  };

  render() {
    return <GrAdd />;
  }
}
