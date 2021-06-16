import React, {useState} from 'react';
import MainComponent from '../main-screen/main';
import {Context} from '../context/context'
import {Loading} from '../context/context';

const App = () => {
    const [context, setContext] = useState();
    const [loading, setLoading] = useState(false);
    return (
        <Context.Provider value={[context, setContext]}>
            <Loading.Provider value={[loading, setLoading]}>
                <MainComponent />
            </Loading.Provider>
        </Context.Provider>
    );
};

export default App;
