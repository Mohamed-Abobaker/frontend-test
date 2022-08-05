import { useState, useEffect } from 'react'
import './App.css'
import clients from './verifications.json'



const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(clients.data)

  }, [])

  return (
    <div className="App">
      <p>Hello world!</p>
      <pre>{data ? JSON.stringify(data, null, '  ') : null}</pre>
    </div>
  )
}

export default App
