import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import CardData from './CardData';

export default function ProductsCard() {
   
    const history = useHistory();
   const handleClick =(e)=> {
       e.preventDefault();
       history.push('/product')
   }
    return (
        <div className="cardTitle">
            
              <div className="title"> <h1 >BEST SELLERS</h1> </div>
          
           
                <div className="scCard" onClick={handleClick} style={{marginLeft:'15px'}}>
                    
                    {CardData.products.map((product) => (
                        <li key={product._id}>
                            <div className="cardimg">
                                 <img  src={product.image} alt={product.image} 
                                style={{ width: ' 100%' }} />
                                <h4>{product.name}</h4>
                            </div>
                            <div className="price">
                                <h4>Price: Rs {product.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}</h4>
                            </div>
                        </li>
                    ))}
                    
                
                    
            </div>
                <div className="btnse" >
                    <button><Link to='/product'>See All Products</Link></button>
                    </div>
        </div>
    );
}
