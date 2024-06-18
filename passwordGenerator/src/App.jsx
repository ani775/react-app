import { useState, useCallback, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed)
      str += "0123456789"
    if (characterAllowed)
      str += "!@#$%^&"
    for (i = 1; i < Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)
  }, [length, characterAllowed, numberAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, characterAllowed, numberAllowed, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow
      rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="password"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly />
          <button > Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Lenght:{length}</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
