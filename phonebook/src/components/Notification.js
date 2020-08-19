import React from 'react'

const Notification = ({ message, style }) => {
  const errorStyle = {
    position: 'absolute',
    top: 0,
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  const addStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
  console.log('messageStyle', style)
  if (message === null) {
    return null
  }
  return (<div className='error' style={style === 'add' ? addStyle : errorStyle}>{message} </div>)
}

export default Notification
