import React, {useState, useMemo, useCallback} from 'react'
import ItemsList from "../itemsList";

export default function App() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)


    const styles = useMemo( () => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_,i)=>`element ${i + 1}`)
    }, [count])

    return(
        <div>
            <h1 style = {styles}>Calculated value: {count}</h1>
            <button className="btn btn-success" onClick={() => setCount (prev => prev + 1)}>+</button>
            <button className="btn btn-danger" onClick={() => setColored (prev => !prev)}>Change</button>

            <ItemsList getItems = {generateItemsFromAPI}/>
        </div>
    )
}