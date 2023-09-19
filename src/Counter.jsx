import { useState } from 'react'
import './App.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vous avez cliqué {count} fois</h1>
      <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  )
}

export default Counter
