import React, { useState } from 'react'
import { Box } from '@mui/material'
import TaiwanMap from './TaiwanMap';
import CountyShow from './CountyShow';

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


const data = [
  {
    tag: "taiwan",
    place: "全國不分區立法委員",
    data: {
      "民進黨": [
        "７．范雲"
      ]
    }
  },
  {
    tag: "taipei_city",
    place: "臺北市",
  },
  {
    tag: "new_taipei_city",
    place: "新北市",
  },
  {
    tag: "taichung_city",
    place: "台中市",
    data: {
      "民進黨": [
        "第四選舉區：① 張廖萬堅（男）"
      ]
    }
  },
  {
    tag: "tainan_city",
    place: "臺南市",
  },
  {
    tag: "kaohsiung_city",
    place: "高雄市",
  },
  {
    tag: "keelung_city",
    place: "基隆市",
    data: {
      "無": [
        "④ 王醒之（男） "
      ]
    }
  },
  {
    tag: "taoyuan_country",
    place: "桃園市",
    data: {
      "民眾黨": [
        "第五選區：③ 賴香伶（女）"
      ]
    }
  },
  {
    tag: "hsinchu_city",
    place: "新竹市",
  },
  {
    tag: "hsinchu_country",
    place: "新竹縣",
    data: {
      "時代力量": [
        "第二選區：① 王婉諭（女）"
      ]
    }
  },
  {
    tag: "miaoli_country",
    place: "苗栗縣",
  },
  {
    tag: "changhua_country",
    place: "彰化縣",
  },
  {
    tag: "nantou_country",
    place: "南投縣",
  },
  {
    tag: "yunlin_country",
    place: "雲林縣",
  },
  {
    tag: "chiayi_city",
    place: "嘉義市",
  },
  {
    tag: "chiayi_country",
    place: "嘉義縣",
  },
  {
    tag: "pingtung_country",
    place: "屏東縣",
  },
  {
    tag: "yilan_country",
    place: "宜蘭縣",
  },
  {
    tag: "hualien_country",
    place: "花蓮縣",
  },
  {
    tag: "taitung_country",
    place: "台東縣",
  },
  {
    tag: "penghu_country",
    place: "澎湖縣",
  },
  {
    tag: "kinmen_country",
    place: "金門縣",
  },
  {
    tag: "lienchiang_country",
    place: "連江縣",
  }
];