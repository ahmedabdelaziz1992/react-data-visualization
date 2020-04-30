import React, { useState } from 'react'

import uniqBy from 'lodash/uniqBy'

import ItemTypes from '../../itemtypes'
import Dropable from './dropable'

export default function Measures() {
    const [measures, setMeasures] = useState([]);

    return (
            <Dropable accept={ItemTypes.MEASURE} tags={measures} setTags={(item) => { item? setMeasures(uniqBy([...measures, item], 'name')) : setMeasures([]) }} />
    )
}