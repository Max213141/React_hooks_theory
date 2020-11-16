import React, {useEffect, useState} from 'react'

function useLogger (value) {
    useEffect(()=> {
        console.log('value changed', value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = event =>{
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: {value, onChange},
        value,
        clear
    }
}

export default function App() {
    const input = useInput('')
    const last = useInput('')

    useLogger(input.value)

    return (
        <div className={'container pt-3'}>
            <input type="text" {...input.bind}/>
            <input type="text" {...last}/>
            <h1>{input.value} {last.value}</h1>

            <button className="btn btn-warning" onClick={()=>input.clear()}>Clear</button>
        </div>
    )
}