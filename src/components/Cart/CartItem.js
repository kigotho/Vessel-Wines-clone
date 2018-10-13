import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, case_price, bottle_price, currency, onClick }) => {
    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <span className="cart-item__name">{name}</span>
            </div>
            <div className="cart-item__price">{bottle_price} {currency}</div>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    case_price: PropTypes.number.isRequired,
    bottle_price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem;
