import { Button, Modal } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import { FamilyDetailsForm } from './FamilyDetailsForm';

export const AddFamilyBtn = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

  return (
    <>
      <Button variant="contained" component="label" onClick={handleOpen} >
        Add Family
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FamilyDetailsForm handleClose={handleClose} />
      </Modal>
    </>
  )
}
