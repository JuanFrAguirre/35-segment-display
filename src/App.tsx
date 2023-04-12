import { useState } from 'react'
import { Digit } from './components/Digit'

function App() {
  const [text, setText] = useState('')

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex flex-wrap content-start w-full gap-[6px] bg-black gap-y-[10px] grow">
        {text.length > 0 ? (
          text.split('').map((letter, i) => <Digit key={i} letter={letter} />)
        ) : (
          <p className="text-white">No text yet</p>
        )}
      </div>
      <div className="w-full">
        <input
          type="text"
          className="w-full py-2 text-center text-white bg-gray-950 active:outline-transparent focus:outline-transparent"
          placeholder="Write something..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  )
}

export default App
