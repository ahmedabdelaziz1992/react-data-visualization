import React from 'react'
import { useDrag } from 'react-dnd'

const style1 = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}

export default function Column({ name, type }) {
    const [{ isDragging }, drag] = useDrag({
      item: { name, type },
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult()
        if (item && dropResult) {
          console.log(`You dropped ${item.name} into ${dropResult.name}!`)
        }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    })
    const opacity = isDragging ? 0.4 : 1
    return (
      <div ref={drag} style={{ ...style1, opacity }}>
        {name}
      </div>
    )
}