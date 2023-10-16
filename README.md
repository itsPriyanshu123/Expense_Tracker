intial code
import React, { useState } from 'react';
import { Button, Checkbox, Modal, TextField, Typography } from '@mui/material';

const WebView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <img src="left-logo.png" alt="Left Logo" className="w-16 h-16" />
        <img src="right-logo.png" alt="Right Logo" className="w-16 h-16" />
      </div>
      <div>
        <Typography variant="h6" className="my-4">
          Web View Content
        </Typography>
        <p>Some text goes here.</p>
      </div>
      <div className="mt-4">
        <TextField
          label="Adhar Number / VID Number"
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-4">
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <p>Paragraph 1</p>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <p>Paragraph 2</p>
        <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
        <p>
          Paragraph 3{' '}
          <span className="text-blue-600 cursor-pointer" onClick={handleOpenModal}>
            More Info
          </span>
        </p>
      </div>
      <div className="mt-4">
        <Button
          variant="contained"
          color="primary"
          disabled={!isChecked || (inputValue.length !== 12 && inputValue.length !== 16)}
        >
          Submit
        </Button>
      </div>
      <MoreInfoModal open={modalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default WebView;
modal code
import React from 'react';
import { Button, Modal, Typography } from '@mui/material';

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
