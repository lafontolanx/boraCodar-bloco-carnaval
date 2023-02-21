import { Header } from "./components/header/header"
import { Main } from "./components/main/main"

import { GlobalStyle } from "./styles/GlobalStyle"

function App() {

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  )
}

export default App
