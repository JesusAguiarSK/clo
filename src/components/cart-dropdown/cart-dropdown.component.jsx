import {useContext} from 'react';

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component';

import CartItem from '../cart-item/cart-item.component';

import { Link, Outlet } from 'react-router-dom';

import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => (<CartItem key={item.id} cartItem={item}/>))}
            </div>
            <Button><Link className='cart-link' to='/checkout'>GO TO CHECKOUT</Link></Button>
        </div>
    );
};

export default CartDropdown;