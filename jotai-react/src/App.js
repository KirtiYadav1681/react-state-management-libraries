import React from 'react'
import CounterDisplay from './components/CounterDisplay'
import CounterButtons from './components/CounterButtons'
import { Provider } from 'jotai'


const App = () => {
  return (
    <Provider>
      <CounterDisplay />
      <CounterButtons />
    </Provider>
  )
}

export default App