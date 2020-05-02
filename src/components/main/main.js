import React, {useState, useEffect} from 'react'

import Dimension from './dimension'
import Measures from './measures'
import Chart from './chart'

function createChartData(raw) {
    const chunks = raw.reduce((all, item) => [...all, item.values.map(v => ({[item.name]: v}))], []);
    const chartData = chunks[0].reduce((all, _, index) => {
        const dataPoint = chunks.reduce((all, _, nestedIndex) => ({...all, ...chunks[nestedIndex][index]}), {});
            return [...all, dataPoint];
        }, []);
    return chartData;
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
    fetch('https://plotter-task.herokuapp.com/data', fetchData)
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        throw res.json();
    })
    .then(data => {
        setChartData(createChartData(data));
    })
    .catch(console.error)
    .finally(() => setLoading(false));
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