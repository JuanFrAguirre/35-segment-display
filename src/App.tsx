import { useEffect, useRef, useState } from 'react'
import { Digit } from './components/Digit'

function App() {
  const [text, setText] = useState('')
  const input = useRef<HTMLInputElement>(null)

  useEffect(() => {
    input?.current?.focus()
  }, [])

  return (
    <div
      className="flex flex-col items-center min-h-screen bg-black"
      onClick={() => input?.current?.focus()}
    >
      <div className="flex flex-wrap content-start w-full gap-[6px] bg-gray-950/75 gap-y-[10px] grow container m-10 p-8">
        {text.length > 0 ? (
          <>
            {text.split('').map((letter, i) => (
              <Digit key={i} letter={letter} />
            ))}
            <Digit letter="" isEmpty />
          </>
        ) : (
          <>
            {''.split('').map((letter, i) => (
              <Digit key={i} letter={letter} />
            ))}
            <Digit letter="" isEmpty />
          </>
        )}
      </div>
      <div className="w-full px-10 pb-10">
        <input
          ref={input}
          type="text"
          className="w-full py-2 text-2xl tracking-widest text-center text-white placeholder:text-white font-extralight bg-black/95 focus-visible:outline-none focus-visible:ring-1 ring-lime-400 "
          placeholder="Write something here..."
          onChange={(e) => setText(e.target.value)}
        />
      </div>
    </div>
  )
}

export default App
