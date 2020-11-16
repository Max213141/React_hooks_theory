import React from 'react'
import Main from "./Main";
import Alert from "./alert";
import {AlertProvider} from "./AlertContext";

export default function App() {
    return (
        <AlertProvider>
            <div className={'container'}>
                <Alert/>
                <Main toggle = {()=>{}}/>
            </div>
        </AlertProvider>
    )
}