import React, { useContext, useEffect } from 'react';
import {Loading} from '../context/context';
import LoadingScreen from './loading-screen';
import axios from 'axios';
import {Context} from '../context/context';
import TableComponent from './main-table';

const pop = axios.create ({
  baseURL: "https://randomuser.me/api/?results=5000",
});

const Main = () => {
    const [context, setContext] = useContext(Context);
    const [loading, setLoading] = useContext(Loading);
    
    const polz = () => pop.get()
        .then((user) => setContext(user.data.results))
        .then(() => setLoading(true))

    useEffect(() => {
        if (!loading) {
          polz();
        }
    }, [loading]);
    
    if (!loading) {
        return (
          <LoadingScreen />
        );
    }

    function sortRating(offerA, offerB) {
        return (offerA.registered.age - offerB.registered.age);
    }

    const sortUsers = context.slice().sort(sortRating);

    return (
        <main className="main">
            <TableComponent users={sortUsers}/>
        </main>
    )
}

export default Main;