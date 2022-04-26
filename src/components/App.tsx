import * as React from 'react'
import { useState } from 'react'

export default function App() {
  const [counter, setCounter] = useState<number>(0)

  return (
    <div>
        <p>The count is at {counter}</p>
        <button onClick= {() => setCounter(counter + 1)}>Press to increase</button>
    </div>
  )
}
