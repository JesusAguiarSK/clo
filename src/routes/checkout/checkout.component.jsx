import { useContext } from 'react';
import './checkout.styles.scss'
import { CartContext } from '../../contexts/cart.context'
import CartItem from '../../components/cart-item/cart-item.component';

const Checkout = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <span className=''>Product</span>
                <span className=''>Description</span>
                <span className=''>Quantity</span>
                <span className=''>Price</span>
                <span className=''>Remove</span>
            </div>
            <div className='checkout-body'>
                <img src={imageUrl} alt={`${name}`} />
            <h1>Hello</h1>
            </div>
        </div>
        
    )
}

export default Checkout;