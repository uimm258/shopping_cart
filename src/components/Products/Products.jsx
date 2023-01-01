import React from "react";

const Products = ({ state, dispatch }) => {
    const { products, cart } = state

    return (
        <div>
            {products.map((product) => {
                return (
                    <ul>
                        <li><img src={product.thumbnail} alt='loading...'/></li>
                        <li>{product.title}</li>
                        <li>{product.description}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Products