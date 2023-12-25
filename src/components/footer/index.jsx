import React from 'react'
import { Link } from 'react-router-dom'

export default function index(props) {
  const { title } = props
  return (
    <footer>
      <div className='footer-content flex aic'>
        <a href='https://nstu.org.tw/' target='_blank' className='reset-link flex aic jcc'>
          {title}
        </a>
      </div>
      <div className='footer-content footer-info flex aic'>
        <div className='flex rowTitle'>© 2023 Web Knowledge Extraction (WKE) Lab. All rights reserved.</div>
      </div>
    </footer>

  )
}
