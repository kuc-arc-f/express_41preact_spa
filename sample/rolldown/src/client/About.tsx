import { useState } from 'preact/hooks'
//
function Page() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div class="main_body_wrap h-dvh bg-gray-100">
      <div>
      </div>
      <h1 class="text-4xl font-bold">About!!</h1>
      <hr />
      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          [ count ]  is {count}
        </button>
      </div>
      <hr />
    </div>
  </>
  )
}
export default Page;
/*
*/