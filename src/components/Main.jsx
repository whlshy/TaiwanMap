import React from 'react'
import { Box, Toolbar, useMediaQuery } from '@mui/material'
import Sidebar from './sidebar'
import Content from './content'
import Footer from './footer'

export default function Main() {
  const matches = useMediaQuery('(min-width:900px)')

  return (
    <Box sx={{ display: 'flex', height: "100%", width: "100%" }}>
      {/* <Sidebar /> */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 0,
          width: !matches ? "100%" : `calc(100% - ${240}px)`,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Toolbar />
        <Content />
        <Footer
          title={
            <img src="./nstu.png" className='footer-logo' />
          }
        />
      </Box>
    </Box>
  )
}
