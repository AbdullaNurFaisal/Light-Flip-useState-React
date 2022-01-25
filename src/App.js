import {React, useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const off = "images/bulbOff.gif";
    const on = "images/bulbOn.gif";
    const [state, setState] = useState(off);
    return (
        <>
            <img 
                onClick={() => {
                    if (state == off) {
                        setState(on);
                    }
                    else {
                        setState(off);
                    }
                 }} 
                 src={state} 
                 id="bulb"
            />
        </>
    )
}
export default App;