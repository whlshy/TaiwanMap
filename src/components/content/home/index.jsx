import React, { useState } from 'react'
import { Box } from '@mui/material'
import TaiwanMap from './TaiwanMap';
import CountyShow from './CountyShow';
import data from '../../../data/data'

export default function index() {
  const [dataName, setDataName] = useState("all")
  const [mouseName, setMouseName] = useState(null)

  let now_data = data.find(d => d.tag == (mouseName || dataName))
  let click_data = data.find(d => d.tag == (dataName))

  return (
    <Box sx={{ p: 2 }} className="flex fww">
      <TaiwanMap
        onClick={value => setDataName(value)}
        onMouseOver={(value) => setMouseName(value)}
        onMouseLeave={() => setMouseName(null)}
        active={click_data?.tag}
      />
      <Box sx={{ ml: 2, mr: 2, flex: "1 1 auto", display: "flex" }}>
        <CountyShow
          title={now_data?.place}
          data={now_data?.data || null}
          tag={dataName}
          hover_tag={now_data?.tag || null}
          resetTag={() => setDataName('taiwan')}
          all_data={data}
          onChange={value => setDataName(value)}
        />
      </Box>
    </Box>
  )
}