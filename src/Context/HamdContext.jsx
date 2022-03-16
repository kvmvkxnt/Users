import React from 'react';

const Context = React.createContext();

function Provider({children}) {
    const [count, setCount] = React.useState(Number(JSON.parse(window.localStorage.getItem('hamd'))?.count) || 0);
    const [laps, setLaps] = React.useState(Number(JSON.parse(window.localStorage.getItem('hamd'))?.laps) || 0);

    if (count === 33) {
        setCount(0);
        setLaps(laps + 1);
    }

    React.useEffect(()=>{
        window.localStorage.setItem('hamd', JSON.stringify({
            count: count,
            laps: laps
        }));
    }, [count, laps]);

    React.useEffect(()=>{
        alert('Hamd laps: ' + laps);
    }, [laps]);

    return <Context.Provider value={{count, setCount, laps, setLaps}}>{children}</Context.Provider>
}

export {Context, Provider};