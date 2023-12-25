import React from 'react'
import { Box } from '@mui/material'

export default function CountyShow(data) {
  const { title } = data

  return (
    <Box>
      <h1>{title}</h1>
    </Box>
  )
}
