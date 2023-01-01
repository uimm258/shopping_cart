import React from "react";

const Products = ({ state, dispatch }) => {
    const { products, cart } = state

    return (
        <div style={{
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            width: '80%'
        }}>
            {products.map((product) => {
                return (
                    <div key={product.id} style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: 10,
                        border: "1px solid grey",
                        width: "30%",
                        marginTop: 10,
                        gap: 10
                    }}>
                        <img src={product.thumbnail} alt='loading...'/>
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            gap:5
                        }}>
                            <span style={{ fontSize: 20 }}>{product.title}</span>
                            <b>$ {product.price}</b>
                            <span>Details: {product.description}</span>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products