import React, {useState,useEffect} from 'react'

function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x:0, y:0
    })

    // useEffect(()=>{
    //     console.log('render')
    // })

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])

    useEffect(()=>{
        console.log('Component did mount')
        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])


    return (
        <div>
            <h1>Resource: {type}</h1>

            <button onClick={()=>setType('users')}>Users</button>
            <button onClick={()=>setType('todos')}>ToDo</button>
            <button onClick={()=>setType('Posts')}>Posts</button>

            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}

export default App