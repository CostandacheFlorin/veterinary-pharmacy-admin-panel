import React from 'react';

import Modal from './Modal';
import { StyledMediumButton } from '../Buttons/Button.styled';
const ErrorModal = props => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<StyledMediumButton onClick={props.onClear}>Okay</StyledMediumButton>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
