import React from 'react'

import ItemTypes from '../../itemtypes'
import Dropable from './dropable'

export default function Dimension({dimension, setDimension}) {
    return (
        <Dropable accept={ItemTypes.DIMENSION} tags={dimension} setTags={setDimension} />
    )
}