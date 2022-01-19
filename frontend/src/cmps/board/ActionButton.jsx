import React from 'react';
import AddIcon from '@mui/icons-material/Add';
export class ActionButton extends React.Component {
  renderAddButton = () => {
    const {isList} = this.props;

    const buttonText = isList ? 'Add another list' : 'Add another card';

    return (
      <div>
        addIcon
        <p>{buttonText}</p>
      </div>
    );
  };

  render() {
    return null;
  }
}
