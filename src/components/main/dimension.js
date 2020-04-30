import React, { useState } from 'react'

import ItemTypes from '../../itemtypes'
import Dropable from './dropable'

export default function Dimension() {
    const [dimension, setDimension] = useState(null);
    return (
        <div>
            <Dropable accept={ItemTypes.DIMENSION} tags={dimension} setTags={setDimension} />
        </div>
    )
}