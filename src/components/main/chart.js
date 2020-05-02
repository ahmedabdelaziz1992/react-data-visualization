import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export default function Chart({chartData, dropResult}) {

  const colors = ['#003f5c', '#58508d', '#bc5090',  '#ff6361', '#ffa600'];

    return (
      chartData && dropResult.measures.length > 0 && dropResult.dimension !== ""?
        <LineChart
          width={800}
          height={300}
          data={chartData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dropResult.dimension} />
          <YAxis label={{ value: dropResult.measures[0], angle: -90, position: 'left' }} />
          <Tooltip />
          <Legend />
          {
            dropResult.measures.map((measure, index) => {
              return  <Line key={measure} type="monotone" dataKey={measure} stroke={colors[index]} /> ;
            })
          }
        </LineChart> : ''
    )
}