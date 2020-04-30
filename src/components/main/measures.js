import React, { useState } from 'react'

import uniqBy from 'lodash/uniqBy'

import ItemTypes from '../../itemtypes'
import Dropable from './dropable'

export default function Measures() {
    const [measures, setMeasures] = useState([]);

    return (
        <div>
            <Dropable accept={ItemTypes.MEASURE} tags={measures} setTags={(item) => { setMeasures(uniqBy([...measures, item], 'name') ) }} />
        </div>
    )
}