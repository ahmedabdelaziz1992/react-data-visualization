import React, {useState} from 'react'

import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'

export default function Container() {
  const [dropResult, setDropResult] = useState({measures: [], dimension: ""});

  return (
      <div className="container-fluid">
        <div className="row">
            <Sidebar/>
            <Main dropResult={dropResult} setDropResult={setDropResult} />
        </div>
      </div>
  )
}