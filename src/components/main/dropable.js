
import React from 'react'
import { useDrop } from 'react-dnd'

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
      let backgroundColor = '#fff'
      if (isActive) {
        backgroundColor = 'darkgreen'
      } else if (canDrop) {
        backgroundColor = 'darkkhaki'
      }

      function handleClick() {
        setTags(null)
      }

      return (
        <div className="drop-area" ref={drop} style={{ backgroundColor }}>
          <div className="drop-list">
            {tags? Array.isArray(tags)? tags.map((tag, index) => <div className="drop-item" key={index.toString()}>{tag.name}</div>) : <div className="drop-item">{tags.name}</div> : null}
          </div>
          <span className="drop-info">{isActive ? 'Release to drop' : 'Drag a column here'}</span>
          <button className="clear-drop" onClick={handleClick}>Clear</button>
        </div>
      )
}