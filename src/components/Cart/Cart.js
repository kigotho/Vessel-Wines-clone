import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, currency, removeFromCart }) => {
    return (
                        <div className="col-sm-8">
                    <div class="row sm-8">
                        <div className="col-sm-3">
                            <p class="inf">Delivery Info: </p>
                        </div>
            <div className="col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total} {currency}</div>
                    </div>
                </div>
            </div>
             <div className="col-sm-3">
               <button type="button" class="btn btn-default empty-btn">Empty Cart</button><br/>
               <button type="button" class="btn btn-default">Check Out</button>                            
            </div>
             </div>
        </div>
        
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
