import { useState } from 'react'
import Display from './components/Display/Display'
import Button from './components/Button/Button'

const App = () => {
    const [ counter, setCounter ] = useState(JSON.parse(localStorage.getItem("counter")))
  
    const changeCount = (delta) => { 
      setCounter(counter + delta)
      localStorage.setItem("counter", JSON.stringify(counter + delta))
    }
  
    return (
      <div>
        <Display counter={counter}/>
  
        <Button
          changeCount={changeCount}
          text='plus'
          delta = {1}
        />
        <Button
          changeCount={changeCount}
          text='zero'
          delta = {0 - counter}
        />     
        <Button
          changeCount={changeCount}
          text='minus'
          delta = {-1}
        />           
      </div>
    )
  }

export default App