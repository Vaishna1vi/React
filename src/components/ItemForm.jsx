import React, { useState } from 'react'

const ItemForm = ({addItem}) => {

    const [input, setInput] = useState(" ")

    // const inputHandler = (e) => {
    //     const store = target.value
    // }

    const submitHandler = (e) => {
        e.preventDefault()
        addItem(input)
    }

    return (
        <>
            <div className="container">
                <form
                onSubmit={submitHandler}
                >
                    <div className="mb-3">
                        <label htmlhtmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input 
                        value={input}
                        onChange={(e)=>setInput(e.target.value)}
                        type="text" 
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                    </div>
                    
                    {/* {input} */}
                    <br />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>

    )
}

export default ItemForm