import React, { Fragment, useState } from 'react'
import { Box, Divider, Button, Select, FormControl, InputLabel, MenuItem, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function CountyShow(props) {
  const { title, data, resetTag, tag, hover_tag, all_data, onChange } = props
  const [classification, setClass] = useState("")

  const countAll = (d) => {
    let n = 0
    !!d && Object.keys(d).map(key => n += d[key].length)
    return n
  }

  return (
    <Box sx={{ position: "relative", display: "flex", flex: "1 1 auto", flexDirection: "column" }}>
      <Box className="flex">
        <FormControl className='flex-1-1'>
          <InputLabel id="taiwan-select" sx={{ color: "#FFF" }}>區域</InputLabel>
          <Select
            labelId="taiwan-select"
            value={tag || ""}
            label="區域"
            sx={{
              color: "#FFF", '.MuiOutlinedInput-notchedOutline': { borderColor: '#FFF' },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FFF',
                borderWidth: '0.15rem',
              },
            }}
            onChange={(e) => onChange(e.target.value)}
            inputProps={{ sx: { borderColor: "#FFF" }, }}
          >
            <MenuItem value="all"><em>全區</em></MenuItem>
            {
              all_data?.map(d =>
                <MenuItem key={d?.tag} value={d?.tag}>{d?.place} ({d?.data?.length || 0})</MenuItem>)
            }
          </Select>
        </FormControl>
        <FormControl sx={{ width: 100, ml: 2 }}>
          <InputLabel id="taiwan-class" sx={{ color: "#FFF" }}>分類</InputLabel>
          <Select
            labelId="taiwan-class"
            value={classification || ""}
            label="分類"
            sx={{
              color: "#FFF", '.MuiOutlinedInput-notchedOutline': { borderColor: '#FFF' },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FFF',
                borderWidth: '0.15rem',
              },
            }}
            onChange={(e) => setClass(e.target.value)}
            inputProps={{ sx: { borderColor: "#FFF" }, }}
          >
            <MenuItem value=""><em>無</em></MenuItem>
            <MenuItem value="party">政黨</MenuItem>
            <MenuItem value="district">選區</MenuItem>
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
                classification={classification}
              />
            ) :
            <PersonList
              title={title}
              data={data}
              classification={classification}
            />
        }
      </Box>
      {
        (tag !== "taiwan" && tag !== "all") &&
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
  const { title, data, classification } = props

  const sortByKey = (array, key) => {
    return array.sort(function (a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  // console.log(sortByKey(data || [], "party"))

  return (
    <Fragment>
      <h1>{title}</h1>
      {
        !!title &&
        <Fragment>
          <Divider sx={{ borderColor: '#fff' }} />
          {data !== null &&
            classPerson(data, classification)

          }
        </Fragment>
      }
    </Fragment>
  )
}

const classPerson = (data, classification) => {
  const unique = [...new Set(data.map(item => item[classification]))];

  switch (classification) {
    case "party":
      return (
        unique.map((key, index) =>
          <Fragment key={index}>
            <h3>
              <span className={`${key}`}>
                {key}
              </span>
            </h3>
            {
              data.filter(f => f.party == key)?.map((d, idx) =>
                <Fragment key={idx}>
                  <Box className="flex aic fww jcsb" sx={{ fontSize: 22, mb: 1 }}>
                    <span>
                      {d.district ? `${d.district}：` : ""}<Typography variant="span">{conertNumber(d.number)}</Typography>&ensp;{d.name}
                    </span>
                    {
                      d.declare ?
                        <CheckCircleIcon color="success" /> :
                        <CancelIcon color='error' />
                    }

                  </Box>
                </Fragment>
              )
            }
          </Fragment>
        )
      )
    case "district":
      return (
        unique.map((key, index) =>
          <Fragment key={index}>
            <h2>
              <span className={`${key}`}>
                {key}
              </span>
            </h2>
            {
              data.filter(f => f.district == key)?.map((d, idx) =>
                <Fragment key={idx}>
                  <Box className="flex aic fww jcsb" sx={{ fontSize: 22, mb: 1 }}>
                    <span className="flex aic fww">
                      <Typography variant="span">{conertNumber(d.number)}</Typography>&ensp;
                      <Typography variant="span" className={`${d.party}`} sx={{ fontSize: 16 }}>{d.party}</Typography>&ensp;{d.name}
                    </span>
                    {
                      d.declare ?
                        <CheckCircleIcon color="success" /> :
                        <CancelIcon color='error' />
                    }

                  </Box>
                </Fragment>
              )
            }
          </Fragment>
        )
      )
    default:
      return (
        data?.map((d, index) =>
          <Fragment key={index}>
            <h3>
              <span className={`${d.party}`}>
                {d.party}
              </span>
            </h3>
            <Box className="flex aic fww jcsb" sx={{ fontSize: 22, }}>
              <span>
                {d.district ? `${d.district}：` : ""}<Typography variant="span">{conertNumber(d.number)}</Typography>&ensp;{d.name}
              </span>
              {
                d.declare ?
                  <CheckCircleIcon color="success" /> :
                  <CancelIcon color='error' />
              }

            </Box>

          </Fragment>
        )
      )
  }
}

const conertNumber = (number) => {
  switch (number) {
    case 1:
      return "①"
    case 2:
      return "②"
    case 3:
      return "③"
    case 4:
      return "④"
    case 5:
      return "⑤"
    case 6:
      return "⑥"
    case 7:
      return "⑦"
    case 8:
      return "⑧"
    case 9:
      return "⑨"
    case 10:
      return "⑩"
    default:
      return number
  }
}