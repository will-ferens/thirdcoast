import React from 'react'
import Link from 'gatsby-link'

import '../styles/headerSplash.css'


const HeaderSplash = ({ siteTitle }) => (
  <div className="wrapper">
    <div className="nav-bar">
      <ul
      style={{
        listStyle: 'none',
        textDecoration: 'none',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      }}
      >
        <li><Link className="nav-item" to="/">Home</Link></li>
        <li><Link className="nav-item" to="/services/">Services</Link></li>
        <li><Link className="nav-item" to="/care/">Care</Link></li>
        <li><Link className="nav-item" to="/newpatients">New Patients</Link></li>
      </ul>
    </div>
    <div
      className="title"
    >
    <h1 >{siteTitle}</h1>
    </div>
    <div
      style={{}}
    >
    </div>
  </div>
)

export default HeaderSplash
