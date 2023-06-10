import { Button, Typography, Modal } from '@mui/material'
import React, { useState } from 'react'
import ModalComponent from '../Modal';

function Footer(props) {

  const [open, setToOpen]= useState(false);

 
  const setModalToOpen =()=>{
    setToOpen(true);

   };
  

  return (
    <div>
      <Typography>Christopher Lopez</Typography>
      <Typography>
        <Button
        onClick={setModalToOpen}
        >Contact:</Button>
        <ModalComponent open={open}/>
      </Typography>

    </div>
  )
}

export default Footer;
