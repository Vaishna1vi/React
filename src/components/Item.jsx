import React from 'react'

const Item = ({initialprops, remove}) => {
  return (
    <>
    <div className='my-4'>{initialprops.name} {" "}
     {/* {initialprops.id}  */}
    <div
    onClick={()=>remove(initialprops.id)}
     className="btn btn-danger mx-4 ">Delete</div>
    </div>
    </>
  );
}

export default Item