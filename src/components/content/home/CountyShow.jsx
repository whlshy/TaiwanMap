import React, { Fragment } from 'react'
import { Box, Divider, Button } from '@mui/material'

export default function CountyShow(props) {
  const { title, data, resetTag, tag } = props

  return (
    <Box sx={{ position: "relative", display: "flex", flex: "1 1 auto", flexDirection: "column" }}>
      <Box className="flex-1-1">
        <h1>{title}</h1>
        {
          !!title &&
          <Fragment>
            <Divider sx={{ borderColor: '#fff' }} />
            {data !== null &&
              Object?.keys(data)?.map(key =>
                <Fragment>
                  <h2>
                    <span className={`${key}`}>
                      {key}
                    </span>
                  </h2>
                  {
                    data[key]?.map(d =>
                      <Fragment>
                        {d}
                      </Fragment>
                    )
                  }
                </Fragment>
              )
            }
          </Fragment>
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
