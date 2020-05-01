import React from 'react'
import { useDrag } from 'react-dnd'

export default function Column({ name, type }) {
    const [{ isDragging }, drag] = useDrag({
      item: { name, type },
      end: (item, monitor) => {
        const dropItem = monitor.getDropResult()
        if (item && dropItem) {
          // console.log(`You dropped ${item.name} into ${dropResult.name}!`)
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
        <svg className="draggable-indicator" viewBox="0 0 32 32">
          <rect height="4" width="4" y="4" x="0" />
          <rect height="4" width="4" y="12" x="0" />
          <rect height="4" width="4" y="20" x="0" />
          <rect height="4" width="4" y="28" x="0" />
          <rect height="4" width="4" y="4" x="8" />
          <rect height="4" width="4" y="12" x="8" />
          <rect height="4" width="4" y="20" x="8"/>
          <rect height="4" width="4" y="28" x="8" />
          <rect height="4" width="4" y="4" x="16" />
          <rect height="4" width="4" y="12" x="16" />
          <rect height="4" width="4" y="20" x="16" />
          <rect height="4" width="4" y="28" x="16" />
          <rect height="4" width="4" y="4" x="24" />
          <rect height="4" width="4" y="12" x="24" />
          <rect height="4" width="4" y="20" x="24" />
          <rect height="4" width="4" y="28" x="24" />
        </svg>
      </li>
    )
}