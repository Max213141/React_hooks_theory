import {React, useState} from 'react'

function  computeInitialCounter(){
    return Math.trunc(Math.random() * 20)
}

function App() {

    const [counter, setCounter] = useState(() => {
        return computeInitialCounter()
    })

    const [state, setState] = useState({
        title: 'counter',
        date: Date.now()
    })

    function increment() {
        // setCounter( counter +1)
        setCounter(prev => prev+1)
        setCounter(prev => prev+1)
    }

    function decrement (){
        setCounter( counter -1)
    }

    function updateTitle(){
        setState( prev => {
            return {
                ...prev,
                title:'New title'
            }
        })
    }

    return (
        <div className="App">
            <h1>Counter: {counter}</h1>
            <button onClick={increment} className="btn btn-success">Add</button>
            <button onClick={decrement} className="btn btn-danger">Remove</button>
            <button onClick={updateTitle} className="btn btn-danger">Change title</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
}

export default App;
