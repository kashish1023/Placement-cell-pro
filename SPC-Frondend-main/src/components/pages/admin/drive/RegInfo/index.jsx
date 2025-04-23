import React, { useState } from 'react';

import ModalContent from './ModalContent';
import Modal from '../../../../utils/modal';

const RegInfo = ({ id }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button type="button" onClick={handleOpen} className="button reg-info-button">
        Reg Info
      </button>
      <Modal open={open} handleClose={handleClose}>
        <ModalContent handleClose={handleClose} id={id} />
      </Modal>
    </>
  );
};

export default RegInfo;
