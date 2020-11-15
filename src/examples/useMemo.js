import React, {useState, useMemo, useEffect} from 'react'

function complexCompute(num) {
    let i = 0
    while(i<1000000000) i++
    return num * 2
}

export default function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const styles = useMemo( () => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    const computed = useMemo(()=>{
        return complexCompute(number)
    }, [number])

    useEffect(() =>{
        console.log('styles changed')
    }, [styles])

    return(
        <div>
            <h1 style = {styles}>Calculated value: {number}</h1>
            <button className="btn btn-success" onClick={() => setNumber (prev => prev + 1)}>+</button>
            <button className="btn btn-danger" onClick={() => setNumber (prev => prev - 1)}>-</button>
            <button className="btn btn-danger" onClick={() => setColored (prev => !prev)}>-</button>
        </div>
    )
}