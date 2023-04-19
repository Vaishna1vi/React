import React from 'react'

const Item = ({initialprops}) => {
  return (
    <>

    <div className='my-4'>{initialprops.name} {", "} {initialprops.id} 
    <div
     className="btn btn-danger mx-4 ">Delete</div>
    </div>
    </>
  );
}

export default Item