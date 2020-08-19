import React, { useState, useEffect } from 'react'
import phonebook from '../services/phonebook'
import Notification from './Notification'

const Persons = (props) => {
  const [message, setMessage] = useState(null)
  const messageStyle = {}
  // const [messageStyle, setMessagestyle] = useState('')
  const [persons, setPersons] = useState([])
  const [filteredPersons, setfiltedPersons] = useState([])
  useEffect(() => {
    setPersons(props.contacts)
  }, [props.contacts])

  useEffect(() => {
    const filteredPersons = persons.filter(person => person.name
      .toLowerCase()
      .includes(props.filterText.toLowerCase()))
    setfiltedPersons(filteredPersons)
  }, [persons, props.filterText])

  const handleDelete = (deletedPerson) => {
    console.log('deletedPerson', deletedPerson)
    if (window.confirm(`Delete ${deletedPerson.name}?`)) {
      phonebook
        .remove(deletedPerson.id)
        .then(returnedPersons => {
          console.log('returnedPersons', returnedPersons)
          setPersons(persons.filter(n => n.id !== deletedPerson.id))
          setMessage(`${deletedPerson.name} has been deleted.`)
          setTimeout(() => { setMessage(null) }, 5000)
        }).catch(_error => {
          setPersons(persons.filter(n => n.id !== deletedPerson.id))
          setMessage(`${deletedPerson.name} was already deleted from server.`)
          setTimeout(() => { setMessage(null) }, 5000)
        })
    }
  }

  return (
    <div>
      <Notification message={message} style={messageStyle} />
      <ul>
        {filteredPersons
          .map((filteredPerson, i) =>
            <li key={i}> {filteredPerson.name} {filteredPerson.number}
              <button onClick={() => handleDelete(filteredPerson)}> Delete </button>
            </li>)}
      </ul>
    </div>
  )
}
export default Persons
