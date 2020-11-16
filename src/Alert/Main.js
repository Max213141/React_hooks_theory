import React from 'react'
import {useAlert} from "./AlertContext";

export  default function Main() {
    const {show} = useAlert()
    return (
        <>
            <h1>Hello in example with context</h1>
            <button onClick = {()=>{show('This is text')}} className="btn btn-success">Show Alert</button>
        </>
    )
}