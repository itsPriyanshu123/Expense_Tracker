import React, { useState } from 'react';
import { Modal, Button, Checkbox, Typography } from '@mui/material';

const CommentComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg mb-4">
      <div className="flex items-center">
        <Checkbox />
        <Typography variant="body1" className="ml-2">
          Paragraph Text
        </Typography>
      </div>
      <div className="mt-2">
        <Button variant="outlined" onClick={handleOpenModal}>
          More Info
        </Button>
      </div>
      <MoreInfoModal open={modalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CommentComponent;
modalll 
import React from 'react';
import { Modal, Typography, Button } from '@mui/material';

const MoreInfoModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="p-4 bg-white rounded-lg">
        <Typography variant="h6" className="mb-4">
          More Info
        </Typography>
        <Typography variant="body1">
          Additional information goes here...
        </Typography>
        <div className="mt-4 text-center">
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default MoreInfoModal;
