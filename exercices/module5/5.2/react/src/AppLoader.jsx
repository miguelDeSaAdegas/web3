import { ProviderWrapper as OpinionProviderWrapper } from "./context/OpinionContext";
import App from "./App";

const AppLoader= () => {
  return (
    <OpinionProviderWrapper >
        <App />
 
      </OpinionProviderWrapper >
  )
}

export default AppLoader
