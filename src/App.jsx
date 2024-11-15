import { useState } from 'react'
import './App.css'

//importo languages
import languages from './database/languages'

//importo i componenti
import AppHeader from './componenti/AppHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader />
    </>
  )
}

export default App
