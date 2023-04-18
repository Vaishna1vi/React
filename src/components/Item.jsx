import React from 'react'

const Item = ({initialState}) => {
  return (
    <>
    <div>{initialState.name} {", "} {initialState.id} </div>
    </>
  );
}

export default Item