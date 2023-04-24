/* eslint-disable no-undef */
const Num = ({number, vaishu, editNumber}) => {
  // const Num = ({addNumber}) => {

  const editHandler = (e) => {
    e.preventDefault()
}

  return (
    <>
    <div className='my-3'>
      {number.count}
    <div 
    onClick={()=>vaishu(number.id)}
    className="btn btn-danger mx-4">Delete</div>
    
    <div 
    onClick={()=> editNumber}
    className="btn btn-success mx-4">Edit</div>
    </div>
    
    </>
  )
}

export default Num