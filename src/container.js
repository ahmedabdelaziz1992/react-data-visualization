import React from 'react'

import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'

export default function Container() {
  return (
      <div className="container-fluid">
        <div className="row">
            <Sidebar/>
            <Main />
        </div>
      </div>
  )
}