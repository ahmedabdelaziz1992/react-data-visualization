import React, { useState } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import uniqBy from 'lodash/uniqBy'

const ItemTypes = {
    BOX: 'box',
    DIMENSION: 'dimension',
    MEASURE: 'measure'
};

const style1 = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
}
const Box = ({ name, type }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type },
    end: (item, monitor) => {
        // console.log(monitor.didDrop())
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        console.log(`You dropped ${item.name} into ${dropResult.name}!`)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })
//   console.log({isDragging, drag})
  const opacity = isDragging ? 0.4 : 1
  return (
    <div ref={drag} style={{ ...style1, opacity }}>
      {name}
    </div>
  )
}

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

const Dropable = ({accept, tags, setTags}) => {
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

const Measures = () => {
    const [measures, setMeasures] = useState([]);

    return (
        <div>
            <Dropable accept={ItemTypes.MEASURE} tags={measures} setTags={(item) => { setMeasures(uniqBy([...measures, item], 'name') ) }} />
        </div>
    )
}

const Dimension = () => {
    const [dimension, setDimension] = useState(null);
    return (
        <div>
            <Dropable accept={ItemTypes.DIMENSION} tags={dimension} setTags={setDimension} />
        </div>
    )
}


function Container() {
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Dimension/>
          <Measures/>
        </div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          <Box name="Glass" type={ItemTypes.DIMENSION} />
          <Box name="Banana" type={ItemTypes.DIMENSION} />
          <Box name="Paper" type={ItemTypes.DIMENSION} />
          <Box name="Glass" type={ItemTypes.MEASURE} />
          <Box name="Banana" type={ItemTypes.MEASURE} />
          <Box name="Paper" type={ItemTypes.MEASURE} />
        </div>
      </div>
    )
  }

  const Chart = () => {
      return null
  }
  

  export default function Main() {
    

    const fetchData = () => {
        console.log('fetched');
    }

    return (
        <div>
            <Container/>
            <Chart/>
        </div>
    )
  }