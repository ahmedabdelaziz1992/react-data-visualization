import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Chart({chartData, dropResult}) {

    return (
      chartData && dropResult.measures.length > 0 && dropResult.dimension !== ""?
        <LineChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={dropResult.dimension} />
              <YAxis />
              <Tooltip />
              <Legend />
              {
                dropResult.measures.map(measure => {
                  return  <Line key={measure} type="monotone" dataKey={measure} stroke="#000000" /> ;
                })
              }
            </LineChart> : ''
    )
}