import { useEffect, useRef, useState } from 'react'
import { Digit } from './components/Digit'

function App() {
  const [text, setText] = useState('')
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    input?.current?.focus()
  }, [])

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="flex flex-wrap justify-center content-start w-full gap-[6px] bg-gray-900 gap-y-[10px] grow">
        {text.length > 0 ? (
          <>
            {text.split('').map((letter, i) => (
              <Digit key={i} letter={letter} />
            ))}
            <Digit letter="" isEmpty />
          </>
        ) : (
          <Digit letter="" isEmpty />
        )}
      </div>
      <div className="w-full">
        <input
          ref={input}
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
