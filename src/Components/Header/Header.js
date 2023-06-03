import React from 'react'
import { Breadcrumbs, Typography } from '@mui/material'

 function Header() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
        <Typography color="text.primary">Guitars</Typography>
        <Typography color="text.primary">Pedals</Typography>
        <Typography color="text.primary">Amps</Typography>
    </Breadcrumbs>
  )
}

export default  Header;