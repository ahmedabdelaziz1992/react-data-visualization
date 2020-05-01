import React, {useState, useEffect} from 'react'

import Dimension from './dimension'
import Measures from './measures'

export default function Main({setDropResult}) {
    const [dimension, setDimension] = useState("");
    const [measures, setMeasures] = useState([]);

    useEffect(() => {
        setDropResult({measures: measures, dimension: dimension});
    }, [dimension, measures, setDropResult]);

    return (
        <div className="col-md-10">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <label>Dimension:</label> <Dimension dimension={dimension} setDimension={setDimension} setDropResult={setDropResult}/>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <label>Measures:</label> <Measures measures={measures} setMeasures={setMeasures} setDropResult={setDropResult}/>
                    </div>
                </div>
            </div>
        </div>
    )
}