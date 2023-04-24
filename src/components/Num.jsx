/* eslint-disable no-undef */
const Num = ({number, vaishu}) => {
  // const Num = ({addNumber}) => {

  return (
    <>
    <div className='my-3'>
      {number.count}
    <div 
    onClick={()=>vaishu(number.id)}
    className="btn btn-danger mx-4">Delete</div>
    
    <div 
    // onClick={()=> }
    className="btn btn-success mx-4">Edit</div>
    </div>
    
    </>
  )
}

export default Num