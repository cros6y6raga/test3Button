import React from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {
    const Button1Foo = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }
    const Button3Foo = () => {
        console.log('I am stupid button')
    }
    return (
        <div className={'App'}>
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('Vladimir', 27, 'live in Ostrogozhsk')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('Ivan')}/>
            <Button name={'MyYouTubeChannel-3'} callBack={Button3Foo}/>
        </div>
    );
};

export default App;
