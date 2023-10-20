import { useState } from 'react'
import './App.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleAddName = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleAddPerson = (event) => {
    event.preventDefault();
    setPersons(persons.concat(newName));
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddPerson}>
        <div>
        <input
          value={newName}
          onChange={handleAddName}
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person, index) => (
          <p key={index}>{person.name}</p>
        ))}
    </div>
  )
}

export default App
