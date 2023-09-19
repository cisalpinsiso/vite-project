import { useState } from 'react'
import './App.css'

function NoPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>404: Page inconnue</h1>
    </>
  )
}

export default NoPage
