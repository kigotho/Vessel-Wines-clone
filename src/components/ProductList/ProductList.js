import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';

const ProductList = ({ products }) => {
    return (
        <div>
            <div className="row product">
              {products.map(product => (
                  <list_i key={product.id} className="col-sm-4">
                    <Product {...product} />
                  </list_i>
              ))}
            </div>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
