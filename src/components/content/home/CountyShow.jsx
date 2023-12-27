import React, { Fragment } from 'react'
import { Box, Divider } from '@mui/material'

export default function CountyShow(props) {
  const { title, data } = props

  return (
    <Box>
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
  )
}
