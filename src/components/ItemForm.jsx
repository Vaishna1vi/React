import React, { useState } from 'react'

const ItemForm = ({addItem, addNumber}) => {

    // const [input, setInput] = useState(" ")

    const inpHandler = (e) => {
        const store = e.target.value
        setInp(store)
    }

    const [inp, setInp] = useState(" ")

    // const inpChange = (e) => {
    //     setInp(e.target.value)
    // }
//     const submitHandler = (e) => {
//         e.preventDefault()
//         addItem(input)
//   addNumber(inp)

//     }


const submitHandler = (e) => {
  e.preventDefault()
  addNumber(inp)
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
                        // value={input}
                        value={inp}

                        // onChange={(e)=>setInput(e.target.value)}
                        onChange={inpHandler}
                        // onChange={(e)=>setInp(e.target.value)}
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