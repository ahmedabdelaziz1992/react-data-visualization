import React from 'react'

import Column from './column'
import ItemTypes from '../../itemtypes'

const Sidebar = () => {
    return (
        <div className="col-md-2">
            <aside>
                <p>aside works!</p>
                <Column name="Glass" type={ItemTypes.DIMENSION} />
                <Column name="Banana" type={ItemTypes.DIMENSION} />
                <Column name="Paper" type={ItemTypes.DIMENSION} />
                <Column name="Glass" type={ItemTypes.MEASURE} />
                <Column name="Banana" type={ItemTypes.MEASURE} />
                <Column name="Paper" type={ItemTypes.MEASURE} />
            </aside>
        </div>
    )
}

export default Sidebar;