
import React from 'react'
import { useDrop } from 'react-dnd'

const style2 = {
    height: '12rem',
    width: '12rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
  }

export default function Dropable({accept, tags, setTags}) {
    const [{ canDrop, isOver }, drop] = useDrop({
        accept,
        drop: (item, monitor) => {
            setTags(item)
            return item;
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
        }),
      })
      const isActive = canDrop && isOver
      let backgroundColor = '#222'
      if (isActive) {
        backgroundColor = 'darkgreen'
      } else if (canDrop) {
        backgroundColor = 'darkkhaki'
      }

      return (
        <div ref={drop} style={{ ...style2, backgroundColor }}>
          {tags? Array.isArray(tags)? tags.map((tag, index) => <div key={index.toString()}>{tag.name}</div>) : <div>{tags.name}</div> : null}
          {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>
      )
}