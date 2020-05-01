import React, {useState, useEffect} from 'react'

import Column from './column'
// import ItemTypes from '../../itemtypes'

export default function Sidebar() {
    const [data, setData] = useState({columns: []});
    // const [error, setError] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUrl() {
            const response = await fetch('https://plotter-task.herokuapp.com/columns');
            const json = await response.json();
            // json
            // .then(res => setData({columns: res}))
            // .catch((res) => setError(res));

            // return response;

            setData({columns: json});
            setLoading(false);
        }

        fetchUrl();
    }, []);

    return (
        <div className="col-md-2">
            <aside>
                <h2 className="main-title">Columns</h2>
                {loading ? (
                    "Loading..."
                ) : (
                    <ul className="columns-list">
                    {data.columns.map(column => <Column key={column.name} name={column.name} type={column.function}/>)}
                    </ul>
                )}
            </aside>
        </div>
    )
}