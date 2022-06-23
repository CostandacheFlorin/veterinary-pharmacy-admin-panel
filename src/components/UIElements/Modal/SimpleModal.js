import React from "react";
import { ReactDOM } from "react-dom";
import Backdrop from "../ErrorModal/Backdrop";
import Modal from "../ErrorModal/Modal";
import { StyledMediumButton } from "../Buttons/Button.styled";

const SimpleModal = ({ show, title, description, actionHandler, buttonText, ...props }) => {
  return (
    <Modal
      onCancel={actionHandler}
      header={title}
      show={!!show}
      footer={
        <StyledMediumButton onClick={props.onClear}>{buttonText}</StyledMediumButton>
      }
    >
      <p>{description}</p>
    </Modal>
  );
};

export default SimpleModal;
