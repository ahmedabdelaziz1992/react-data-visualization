import React from 'react'

import Sidebar from './components/sidebar/sidebar'
import Main from './components/main/main'

  const Chart = () => {
      return null
  }
  

  export default function Container() {
    

    // const fetchData = () => {
    //     console.log('fetched');
    // }

    return (
        <div className="row">
            <Sidebar />
            <Main/>
            <Chart/>
        </div>
    )
  }