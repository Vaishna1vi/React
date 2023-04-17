import React from 'react'

// export default function Person({name, reg_no, city, age, 
// }) {

export default function Person(props) {
    
  return (
    <div>
        {props.name} {props.reg_no} {props.city} {props.age}
        {/* {name} {reg_no} {city} {age} */}

      {" "}  

    </div>
  )

}

Person.defaultProps = {
  name : 'NA',
  age : 'NA',
}