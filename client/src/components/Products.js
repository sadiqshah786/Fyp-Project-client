import React from 'react';
import CardData from './CardData';
import ProductTabs from './test';
import ProductsTabs from './Products/ProductsTabs';

export default function ProductsCard() {
   
   
    return (
        <div className="cardTitle">
            <div className='productTabs'> 
                
                <h1>Our Products</h1>
                <p>Add our products to weekly lineup</p>
                 <div className='tabs'>
                     <ProductsTabs/>
                 </div>
               </div>
            
              
           
                {/* <div className="scCard" onClick={handleClick}>
                    
                    {CardData.products.map((product) => (
                        <li key={product._id}>
                            <div className="cardimg">
                                 <img  src={product.image} alt={product.image} 
                                style={{ width: ' 100%' }} />
                                <h4>{product.name}</h4>
                            </div>
                            <div className="price">
                                <h4>Price: ${product.price}</h4>
                            </div>
                        </li>
                    ))}
                    
                
                    
            </div>
                <div className="btnse" >
                    <button><Link to='/product'>See All Products</Link></button>
                    </div> */}
        </div>
    );
}
