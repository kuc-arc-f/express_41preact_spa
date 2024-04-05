
import { useState } from 'preact/hooks'
//
export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <hr />
      <h1 class="text-4xl font-bold">Vite + Preact</h1>
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          [ count ]  is {count}
        </button>
      </div>
    </>
  )
}
/*
*/
