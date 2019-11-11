import React from "react";
import Modal from "react-modal";
import Button from "../../../components/Button/Button";
import AddHolidayForm from "./AddHolidayForm";

Modal.setAppElement("#root");

const AddHolidayModal = props => {
  const { isOpen, closeModal, holidayTypes } = props;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="boss-modal-window boss-modal-window_role_edit"
      contentLabel="Add holiday modal"
    >
      <Button
        closeModal
        type="close-add-modal-holiday"
        onClick={closeModal}
      ></Button>
      <div className="boss-modal-window__header">Add Holiday</div>
      <div className="boss-modal-window__content">
        <AddHolidayForm holidayTypes={holidayTypes} />
      </div>
    </Modal>
  );
};

export default AddHolidayModal;
