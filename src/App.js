import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
    return (
        <div>
                <div className="row cls">
                <div className="col-sm-4">
                
                
<div id="exTab1">	
<ul  class="nav nav-pills">
			<li class="active">
        <a  href="#1a" data-toggle="tab">Show Me</a>
			</li>
  		<li class="a4"><a href="#4a" data-toggle="tab">Show All</a>
			</li>
		</ul>
			<div class="tab-content clearfix">
			  <div class="tab-pane active" id="1a">
 <button type="button" class="btn btn-default">Show Me</button>
                   <button type="button" class="btn btn-default">Show all</button>
                   <br/>
                   <button type="button" class="btn btn-default">White</button>
                   <button type="button" class="btn btn-default">Red</button>
                   <button type="button" class="btn btn-default">Sparkling</button>
                   <br/>
                   Order By: 
                   <button type="button" class="btn btn-default">Vintage</button>
                   <button type="button" class="btn btn-default">Price</button>				</div>
          <div class="tab-pane" id="4a">

				</div>
			</div>
  </div>
                </div>
               <Cart />
              <ProductList />
              </div>
                </div>
    );
}

export default App;