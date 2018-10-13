import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';

const ProductList = ({ products }) => {
    return (
        <div>
            <div className="row">
              {products.map(product => (
                  <l key={product.id} className="col-sm-4">
                    <Product {...product} />
                  </l>
              ))}
            </div>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
}

export default ProductList;
