/* eslint-disable no-undef */
import { useState } from "react"

const Num = ({number, vaishu, editNumber}) => {

  const [inp, setInp] = useState("")
const [change, setChange] = useState({inp});

  // const Num = ({addNumber}) => {

  const editHandler = (e) => {
    e.preventDefault()
   editNumber(change)
}

  return (
    <>
    <div className='my-3'>
      {number.count}
    <div 
    onClick={()=>vaishu(number.id)}
    className="btn btn-danger mx-4">Delete</div>
    
    <div 
    onClick={()=> (editHandler)}
    className="btn btn-success mx-4">Edit</div>
    </div>
    
    </>
  )
}

export default Num