import React, { useState } from 'react';
import CartComponent from './cart-component';
import CartListComponent from './cart-list';

const Table = (props) => {
    const {users} = props;

    const [filterName, setFilerName] = useState('');

    const handleSearchName = (evt) => {
        setFilerName(evt.target.value);
    }

    const regexp = new RegExp (filterName);

    const filteredUsers = users.filter(function(user) {
        return user.name.first.search(regexp) != -1 || user.name.last.search(regexp) != -1;
    })

    const filterUsers = (numberA, numberB) => filteredUsers.filter((user) => (
        user.registered.age >= numberA && user.registered.age <= numberB
    ));

    const [chosenUser, setChosenUser] = useState([]);

    const [currentUser, setCurrentUser] = useState(null);

    function gragOverHandler(e) {
        e.preventDefault();
        e.target.style.background = 'grey';
    }

    function dragEndHandler(e) {
        e.preventDefault();
        e.target.style.background = 'white';
    }

    function dragStartHandler(e, user) {
        setCurrentUser(user);
    }

    function dropHandler(e) {
        e.preventDefault();
        setChosenUser([...chosenUser, currentUser]);
        e.target.style.background = 'white';
    }

    const firstTen = filterUsers(1, 10);
    const secondTen = filterUsers(11, 20);
    const thirdTen = filterUsers(21, 30);

    return (
        <div className='main-table'>
            <div className='table-column'>
                <input className='table-heading' type='text' placeholder='Поиск' onChange={handleSearchName}></input>
                <CartListComponent users={firstTen} dragStartHandler={dragStartHandler} number='1-10'></CartListComponent>
                <CartListComponent users={secondTen} dragStartHandler={dragStartHandler} number='11-20'></CartListComponent>
                <CartListComponent users={thirdTen} dragStartHandler={dragStartHandler} number='21-30'></CartListComponent>
            </div>
            <div 
                onDragLeave={(e) => dragEndHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => gragOverHandler(e)}
                onDrop={(e) => dropHandler(e)}>
                <span className='table-heading table-heading__span'>Избранные</span>
                <ul className='table-list'>
                    {chosenUser.map((user, index) => <CartComponent key={user + index} user={chosenUser[index]} setChosenUser={setChosenUser} chosenUser={chosenUser} chosen={true}/>)}
                </ul>
            </div>
        </div>  
    )
}

export default Table;