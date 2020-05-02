import React, {useState, useEffect} from 'react'

import Dimension from './dimension'
import Measures from './measures'
import Chart from './chart'

export default function Main({dropResult, setDropResult}) {
    const [dimension, setDimension] = useState("");
    const [measures, setMeasures] = useState([]);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        setDropResult({measures: measures, dimension: dimension});
    }, [dimension, measures, setDropResult]);
    
    useEffect(() => {
        console.log('dropResult', dropResult);
        if(dropResult && dropResult.measures.length > 0 && dropResult.dimension !== "") {
            async function fetchUrl() {
                const fetchData = {
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dropResult)
                }
                const response = await fetch('https://plotter-task.herokuapp.com/data', fetchData);
                const json = await response.json();
    
                setData(json);
                setLoading(false);
                console.log('postData', json);
            }

            fetchUrl();
        }

    }, [dropResult]);

    useEffect(() => {
        if(dropResult && Array.isArray(data) && loading === false) {
            setChartData(createChartData(data));
            console.log('chartData', createChartData(data));
        }
    }, [dropResult, data, loading]);

    function createChartData(responseArr) {
        let chartDataArr = [];
        responseArr.map((item, i) => {
            let itemArr = [];
            item.values.map((value, j) => {
                return itemArr.push({[data[i].name]: data[i].values[j] })
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

        return finalChartArr;
    }

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
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        { chartData? console.log(data) || <Chart dropResult={dropResult} chartData={chartData}/> : <p>Drag columns in order to show Chart</p> }
                    </div>
                </div>
            </div>
        </div>
    )
}