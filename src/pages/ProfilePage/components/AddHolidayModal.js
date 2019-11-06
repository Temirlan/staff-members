import React from "react";
import Modal from "react-modal";
import Button from "../../../components/Button/Button";

Modal.setAppElement("#root");

const AddHolidayModal = props => {
  const { isOpen, closeModal } = props;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="boss-modal-window boss-modal-window_role_edit"
      contentLabel="Add holiday modal"
    >
      <Button type="close-add-modal-holiday" onClick={closeModal}></Button>
      <div className="boss-modal-window__header">Add Holiday</div>
      <div className="boss-modal-window__content">
        <div className="boss-modal-window__form"></div>
      </div>
    </Modal>
  );
};

export default AddHolidayModal;
