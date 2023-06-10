import React from "react";
import { Modal } from "@mui/material";
import {Box, Typography} from "@mui/material";

 export default function ModalComponent({ open }){



  return (
    <div>
              <Modal
            open={open}
          
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <Box >
            <Typography id="modal-modal-title" variant='h6' component='h2'>
              Email adress here
            </Typography>
            <Typography id='modal-modal-description' sx={{mt:2}}>
              This is what goes inside of the modal
            </Typography>
          </Box>
      </Modal>
    </div>
  )
}
