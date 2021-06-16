import React from 'react';

const Cart = (props) => {
    const {user, chosen, dragStartHandler, setChosenUser, chosenUser} = props;

    const date = new Date(user.registered.date);

    const chosenPerson = chosen ? 'falce' : 'true'
    const chosenCart = chosen ? 'cart cart--chosen' : 'cart'
    const chosenDelete = chosen ? 'cart-delete' : 'displaynone'

    const deleteChosenUser = () => {
        let newChosenUsers = chosenUser.filter((person) => person.id.value !== user.id.value)
        setChosenUser(newChosenUsers)
    }

    return (
        <li className={chosenCart} draggable={chosenPerson}
            onDragStart={(e) => dragStartHandler(e, user)}>
            <img className='cart-img' src={user.picture.large} alt='Фотография пользователя'/>
            <div className='cart-container'>
                <span className='cart-span'>{user.name.first} {user.name.last}, дата регистрации: {date.getDate()}.{date.getMonth()}.{date.getFullYear()}</span>
                <span className='cart-span'>{user.email}</span>
            </div>
            <div className={chosenDelete}>
                <span onClick={() => deleteChosenUser()}>Удалить</span>
            </div>
        </li>
    )
}

export default Cart