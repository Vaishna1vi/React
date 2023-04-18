import React from 'react'
import { useState } from 'react';
import Item from './components/Item';
import Num from './components/Num';
const App = () => {
    const initialState = [
        {
            'name': 'vaishnavi',
            'id': 1,
        },

        {
            'name': 'tanu',
            'id': 2,
        },

        {
            'name': 'vaishu',
            'id': 3,
        },

        {
            'name': 'tanmay',
            'id': 4,
        }
    ]
    const [data, setData] = useState(initialState)

    const [number, setNumber] = useState(
        [
            { 'count': 1 },
            { 'count': 2 },
            { 'count': 3 },
            { 'count': 4 },
            { 'count': 5 },

        ]
    )

    return (
        <>
            <div>App</div>
            <br />
            {data.map(
                (item) => <Item initialState={item} />
            )}
            <br />
            {number.map(
                (pair) => <Num number={pair} />
            )}
        </>
    );
}

export default App