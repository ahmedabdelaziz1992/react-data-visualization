import React from 'react'

import Dimension from './dimension'
import Measures from './measures'

export default function Main() {
    return (
        <div className="col-md-10">
            <Dimension/>
            <Measures/>
        </div>
    )
}