import React from 'react'
import { Link } from 'react-router-dom'

export default function index(props) {
  const { title } = props
  return (
    <footer>
      <div className='footer-content flex aic'>
        <a href='https://nstu.oen.tw/' target='_blank' className='reset-link flex aic jcc'>
          {title}
        </a>
      </div>
      <div className='footer-content footer-info flex aic'>
        <div className='flex rowTitle'>2024年選舉立法委員 承諾完善代理（課）教師工作權益政策</div>
      </div>
    </footer>

  )
}
