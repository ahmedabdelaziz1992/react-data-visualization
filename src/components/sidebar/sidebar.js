import React, {useState, useEffect} from 'react'

import Column from './column'

function fetchUrl({setData, setLoading}) {
    setLoading(true);
    fetch('https://plotter-task.herokuapp.com/columns')
    .then(res => {
        if(res.ok) {
            return res.json();
        }
        throw res.json();
    })
    .then(data => {
        setData({columns: data});
    })
    .catch(console.error)
    .finally(() => setLoading(false));
}

export default function Sidebar() {
    const [data, setData] = useState({columns: []});
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchUrl({setData, setLoading});
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