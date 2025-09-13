

import { useState, useCallback, useEffect, useRef } from 'react'




function App() {
    // create state for length, numberallowed, charallowed, pass

    const [length, setLength] = useState(6)
    const [numberAllowed,setNumberAllowed] = useState(false)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")


    //useRef hook to be added

    const input_ref = useRef(null)


    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char)

        }

        setPassword(pass)

    }, [length, numberAllowed, charAllowed])



    const copyPasswordToClipboard = useCallback(() => {
        input_ref.current?.select();
        input_ref.current?.setSelectionRange(0, 999);

        window.navigator.clipboard.writeText(password)
    }, [password])




    //useEffect for 4 dependencies

    useEffect(() => {
        passwordGenerator()
    }, [length, charAllowed, numberAllowed])
    



    return (

        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
            <h1 className='text-white text-center my-3'>Password generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                    type="text"
                    className="outline-none w-full py-1 px-3"
                    placeholder="Password"
                    value={password}
                    ref={input_ref}
                    readOnly
                    //value
                    //add ref

                />
                <button
                    //add onClick function
                    onClick={copyPasswordToClipboard}

                    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                >copy</button>

            </div>
            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input
                        type="range"
                        min={6}
                        max={100}
                        className='cursor-pointer'
                        onChange={(e) => { setLength(e.currentTarget.value) }}
                        value={length}
                        

                    // value and onChange to be added

                    />
                    {/* length need to be added as state */}
                    <label>Length: {length}</label>

                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        id="numberInput"
                        // defaultChecked={numberAllowed}

                        //onChange set prev to !prev

                        onChange={(e)=>{setNumberAllowed(prev=>!prev)}}

                    />
                    <label htmlFor="numberInput">Numbers</label>
                </div>
                <div className="flex items-center gap-x-1">
                    <input
                        type="checkbox"
                        id="characterInput"
                        //defaultChecked={charAllowed}
                        //onChange set

                        onChange={(e)=>{setCharAllowed(prev=>!prev)}}

                    />
                    <label htmlFor="characterInput">Characters</label>
                </div>
            </div>
        </div>

    )
}

export default App

