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
     <div className="counter" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '20px' }}>
      <button onClick={decrement} style={{ padding: '10px 20px', fontSize: '16px' }}>-</button>
      <span style={{ fontSize: '24px' }}>{count}</span>
      <button onClick={increment} style={{ padding: '10px 20px', fontSize: '16px' }}>+</button>
     </div>
      
    </>
  )
}

export default App
