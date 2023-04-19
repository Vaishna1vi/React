import React from 'react'

const Num = ({number, vaishu}) => {
  return (
    <>
    <div className='my-3'>
      {number.count}
    <div 
    onClick={()=>vaishu(number.id)}
    className="btn btn-danger mx-4">Delete</div>
    </div>
    
    </>
  )
}

export default Num