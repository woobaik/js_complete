import React from 'react';

const Product = (props) => {
    return(
        <div>
            <h1>productname : {props.product.name}</h1>
            productdescription: {props.product.description}
            price: {props.product.price}
        </div>
    )
}


export default Product 


