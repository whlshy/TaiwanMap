import React, { Fragment } from 'react'
import { Box, Divider, Button, Select, FormControl, InputLabel, MenuItem, } from '@mui/material'

export default function CountyShow(props) {
  const { title, data, resetTag, tag, hover_tag, all_data, onChange } = props

  const countAll = (d) => {
    let n = 0
    !!d && Object.keys(d).map(key => n += d[key].length)
    return n
  }

  console.log('hover', hover_tag)

  return (
    <Box sx={{ position: "relative", display: "flex", flex: "1 1 auto", flexDirection: "column" }}>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="taiwan-select" sx={{ color: "#FFF" }}>區域</InputLabel>
          <Select
            labelId="taiwan-select"
            value={tag || ""}
            label="區域"
            sx={{ color: "#FFF" }}
            onChange={(e) => onChange(e.target.value)}
          >
            <MenuItem value="all"><em>全區</em></MenuItem>
            {
              all_data?.map(d =>
                <MenuItem key={d?.tag} value={d?.tag}>{d?.place} ({countAll(d?.data)})</MenuItem>)
            }
          </Select>
        </FormControl>
      </Box>
      <Box className="flex-1-1">
        {
          (tag == "all") ?
            all_data?.map(d =>
              !!d?.data && Object.keys(d?.data)?.length > 0 &&
              <PersonList
                key={d?.tag}
                title={d?.place}
                data={d?.data}
              />
            ) :
            <PersonList
              title={title}
              data={data}
            />
        }
      </Box>
      {
        tag !== "taiwan" &&
        <Box sx={{ pb: 3, pt: 2 }}>
          <Button variant='contained' color="primary" onClick={() => resetTag()}>
            全國不分區立法委員
          </Button>
        </Box>
      }
    </Box>
  )
}

const PersonList = (props) => {
  const { title, data } = props

  return (
    <Fragment>
      <h1>{title}</h1>
      {
        !!title &&
        <Fragment>
          <Divider sx={{ borderColor: '#fff' }} />
          {data !== null &&
            Object?.keys(data)?.map((key, index) =>
              <Fragment key={index}>
                <h2>
                  <span className={`${key}`}>
                    {key}
                  </span>
                </h2>
                {
                  data[key]?.map(d =>
                    <Fragment key={d}>
                      {d}
                    </Fragment>
                  )
                }
              </Fragment>
            )
          }
        </Fragment>
      }
    </Fragment>
  )
}