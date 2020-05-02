import React, {useState, useEffect} from 'react'

import Dimension from './dimension'
import Measures from './measures'
import Chart from './chart'

function createChartData(responseArr) {
    console.log('responseArr', responseArr);
    let chartDataArr = [];
    responseArr.map((item, i) => {
        let itemArr = [];
        item.values.map((value, j) => {
            return itemArr.push({[responseArr[i].name]: responseArr[i].values[j] })
        })
        return chartDataArr.push(itemArr);
    });

    let finalChartArr = [];

    for(let i = 0; i < chartDataArr[0].length; i++) {
        let modified = {}
        for(let j = 0; j < chartDataArr.length; j++) {
            modified = {...modified, ...chartDataArr[j][i]}
        }
        finalChartArr.push(modified)
    }

    console.log('finalChartArr', finalChartArr);
    return finalChartArr;
}

async function fetchUrl({setChartData, setLoading, dropResult}) {
    const fetchData = {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(dropResult)
    }
    setLoading(true);
    const response = await fetch('https://plotter-task.herokuapp.com/data', fetchData);
    const json = await response.json();

    setChartData(createChartData(json));
    setLoading(false);
}

export default function Main() {
    const [dimension, setDimension] = useState("");
    const [measures, setMeasures] = useState([]);
    const [loading, setLoading] = useState(false);
    const [chartData, setChartData] = useState(null);
    
    useEffect(() => {
        if(measures.length && dimension) {
            fetchUrl({setChartData, setLoading, dropResult:{measures, dimension}});
        }
    }, [measures, dimension]);

    return (
        <div className="col-md-10">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <label>Dimension:</label> <Dimension dimension={dimension} setDimension={setDimension}/>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <label>Measures:</label> <Measures measures={measures} setMeasures={setMeasures}/>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        { loading && "Loading..." }
                        { !loading && chartData? <Chart dropResult={{measures, dimension}} chartData={chartData}/> : <p>Drag columns in order to show Chart</p> }
                    </div>
                </div>
            </div>
        </div>
    )
}