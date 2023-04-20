/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import Item from './components/Item';
import Num from './components/Num';
import ItemForm from './components/ItemForm';
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

    const addItem = (name) => {
        // alert("hi");
        const item = {

            'name': name,
            'id': Math.random(),

        }
        setData([...data, item])
        // setData(addItem)

    }

    const removeItem = (id) => {
        const values = data.filter((e)=>e.id !== id)
        setData(values)
    }

    const [number, setNumber] = useState(
        [
            { 'count': 'A', 'id' : 1 },
            { 'count': 'B', 'id' : 2 },
            { 'count': 'C', 'id' : 3 },
            { 'count': 'D', 'id' : 4 },
            { 'count': 'E', 'id' : 5 },

        ]
    );

    const addNumber = () => {
        console.log("hi");
        const add = { 'count': 0 }
        setNumber([...number, add])
    }

const removeNumber = (id) => {
const element = number.filter((e)=>e.id !== id)
setNumber(element)
}
    return (
        <>

            <div className='container text-center h1 my-3'>To Do List App
            <br />
            </div>
            <ItemForm addItem={addItem} />

            <br />

            <div className="container text-center bg-primary py-4">
                {data.map(
                (item) => <Item initialprops={item} remove={removeItem} />
            )}

                {/* {number.map(
                    (pair) => <Num number={pair} vaishu={removeNumber} />
                )} */}
                <br />
                {/* <div
                      onClick={()=>addItem("somit",6)}
                    //   onClick={addItem}
                    // onClick={addNumber}
                    // onClick={()=>removeNumber(1)}
                    className="btn btn-success"

                >Submit</div> */}

            
            </div>
            
        </>
    );
}

export default App