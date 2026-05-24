import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)


    const decrement = () => {
      if(count > 0) {
        setCount(count - 1)
      }
      else{
        setCount(count)
      }
    }
    const increment = () => {
      setCount(count + 1)
    }
  return (
    <>
     <h1 style={{ textAlign: 'center', backgroundColor: 'lightgray' }}>Counter App</h1>
     <button style={{ margin: '5px' , backgroundColor: 'lightblue'  }} onClick={increment}>
        increment
      </button>
      <p style={{fontSize: '1.2em' }}>counter = {count}</p>
      <button style={{ margin: '5px' , backgroundColor: 'lightcoral' }} onClick={decrement}>
        decrement
      </button>
      
      
    </>
  )
}

export default App
