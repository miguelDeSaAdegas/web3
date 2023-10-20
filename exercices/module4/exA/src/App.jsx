import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'


const PersonRendering = ({persons}) => {
  return (
    <div>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, [])
  console.log('render', persons.length, 'persons')


  const handleAddName = (event) => {
    setNewName(event.target.value);
  }

  const handleAddNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleAddPerson = (event) => {
    event.preventDefault();
    if (persons.find(e => e.name.includes(newName) && e.number.includes(newNumber)) !== undefined) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      }
      
      axios
        .post('http://localhost:3001/persons', personObject)
        .then(response => {
          setPersons(persons.concat(personObject));
          setNewName('');
          setNewNumber('');
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
        <input
          placeholder='name'
          value={newName}
          onChange={handleAddName}
        />
        <br/>
        <input
          placeholder='number'
          value={newNumber}
          onChange={handleAddNumber}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <PersonRendering persons={persons}/>
    </div>
  )
}

export default App
