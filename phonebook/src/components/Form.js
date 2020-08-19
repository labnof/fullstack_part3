import React from 'react'

const Form = (props) => {
  return (
    <form onSubmit={props.handleAddP}>
      <div>
          Name: <input value={props.newNm} onChange={props.handleNmChange} />
      </div>
      <div>
          Number: <input value={props.newNumb} onChange={props.handleNumbChange} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}
export default Form
