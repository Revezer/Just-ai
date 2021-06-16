import React, {useState} from 'react';
import CartComponent from './cart-component';

const CartList = (props) => {
    const {users, dragStartHandler, number} = props;

    const [disableList, setDisableList] = useState(false);

    const swichDisableList = () => {
        setDisableList(!disableList)
    }

    const listDisable = () => disableList ? 'table-list table-list--disable' : 'table-list'

    const disableTable = () => {
        if (users.length === 0) {
            return 'disable'
        } else {
            return 'table-span'
        }
    }

    return (
        <div>
            <span className={disableTable()} onClick={() => swichDisableList()}>{number}</span>
            <ul className={listDisable()}>
                {users.map((user, index) => <CartComponent key={user + index} user={users[index]} chosen={false} dragStartHandler={dragStartHandler}/>)}
            </ul>
        </div>
    )
}

export default CartList;
