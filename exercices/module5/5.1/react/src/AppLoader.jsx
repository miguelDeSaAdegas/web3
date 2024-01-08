import { ProviderWrapper as CountProviderWrapper } from "./context/counterContext";
import App from "./App.jsx";

const AppLoader= () => {
  return (
    <CountProviderWrapper >
        <App />
 
      </CountProviderWrapper >
  )
}

export default AppLoader;