import React from 'react'

import Dimension from './dimension'
import Measures from './measures'

export default function Main() {
    return (
        <div className="col-md-10">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <label>Dimension:</label>
                        <Dimension/>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <label>Measures:</label>
                        <Measures/>
                    </div>
                </div>
            </div>
        </div>
    )
}