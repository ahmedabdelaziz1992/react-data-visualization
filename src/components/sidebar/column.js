import React from 'react'
import { useDrag } from 'react-dnd'

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
      <li className="columns-list__item" ref={drag} style={{ opacity }}>
        <span>{name}</span>
      </li>
    )
}