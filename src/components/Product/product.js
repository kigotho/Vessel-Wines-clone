import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
constructor(){
      super();
      this.state = {value: ''};
      this.onChange = this.onChange.bind(this)
      this.state_2 = {value_2: ''};
      this.onChange_2 = this.onChange_2.bind(this)
   }
   
   onChange = (e) =>{
      const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
         this.setState({value: e.target.value})
      }
   }
    onChange_2 = (e) => {
              this.state = {value: ''};

      const re = /^[0-9\b]+$/;
      if (e.target.value === '' || re.test(e.target.value)) {
         this.setState({value_2: e.target.value})
      }
   }
    
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart} = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            const bottleVar = this.state.value;
            const caseVar = this.state.value_2;

            if (bottleVar > 0 ) {
                 addToCart(id);
                const amountVar = bottleVar
                console.log(amountVar);

            } else if(caseVar > 0){
                addToCart(id);
                const amountVar = caseVar
                console.log(amountVar);
            }
           


        }

    }

    render() {
        const { name, bottle_price, case_price, currency, image, isInCart} = this.props;

        return (
            <div className="row">
                <div className="col-sm-1"></div>
                <div className="col-sm-3"><img src={image} alt="product" /></div>
                <div className="col-sm-8">
                    <h3>{name}</h3>
                    <div className="row">
                    <div className="col-sm-6">{bottle_price} {currency}</div>
                    <div className="col-sm-6">{case_price} {currency}</div>
                    <div className="col-sm-6"><input value={this.state.value} onChange={this.onChange}/> QTY</div>
                    <div className="col-sm-6"><input value_2={this.state.value_2} onChange={this.onChange_2}/> QTY</div>
                    <div className="col-sm-6">
                     <button type="button" class="btn btn-default">Details</button>
                    </div>
                    <div className="col-sm-6">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    case_price: PropTypes.number,
    bottle_price: PropTypes.number,
    currency: PropTypes.string,
    amount: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
