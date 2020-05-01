import React, {useState, useEffect} from 'react'

import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'

export default function Container() {
  const [dropResult, setDropResult] = useState({measures: [], dimension: ""});

  useEffect(() => {
      console.log('dropResult', dropResult);
  }, [dropResult]);

  return (
      <div className="container-fluid">
        <div className="row">
            <Sidebar dropResult={dropResult} setDropResult={setDropResult}/>
            <Main setDropResult={setDropResult}/>
            {/* <Chart/> */}
        </div>
      </div>
  )
}