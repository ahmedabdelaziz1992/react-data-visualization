import React from 'react'

import uniq from 'lodash/uniq'
import ItemTypes from '../../itemtypes'
import Dropable from './dropable'

export default function Measures({measures, setMeasures}) {
    return (
        <Dropable accept={ItemTypes.MEASURE} tags={measures} setTags={(item) => { item? setMeasures(uniq([...measures, item])) : setMeasures([]) }} />
    )
}