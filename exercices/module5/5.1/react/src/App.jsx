import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GoodButton from "./components/GoodButton";
import BadButton from "./components/BadButton";
import OkButton from "./components/OkButton";
import ResetButton from "./components/ResetButton";

function App() {

  return (
    <>
      <div>
        <GoodButton/>
        <OkButton/>
        <BadButton/>
        <ResetButton/>
      </div> 
    </>
  )
}

export default App
