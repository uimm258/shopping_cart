import React from "react";

const Products = ({ state, dispatch }) => {
    const { products, cart } = state

    return (
        <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                width: "80%"
        }}>
            
            <h2 style={{ width: "100%", marginLeft: "50%" }}>Products</h2>

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
                        <img src={product.thumbnail} alt='loading...' style={{height: 200}} />
                        <div style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            gap:5
                        }}>
                            <span style={{ fontSize: 20 }}>{product.title}</span>
                            <b>$ {product.price}</b>
                        </div>

                        {cart.some((prod) => prod.id === product.id) ?
                            <button
                                style={{
                                    padding: 5,
                                    border: 0,
                                    borderRadius: 5,
                                    backgroundColor: "red",
                                    color: "white"
                                }}
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: product
                                    })
                                }}
                            >
                                Remove from Cart
                            </button> :
                            <button
                                style={{
                                    padding: 5,
                                    border: 0,
                                    borderRadius: 5,
                                    backgroundColor: "green",
                                    color: "white"
                                }}
                                onClick={() => {
                                    dispatch({
                                        type: "ADD_TO_CART",
                                        payload: {
                                            id: product.id,
                                            title: product.title,
                                            thumbnail: product.thumbnail,
                                            price: product.price,
                                            qrt: 1
                                        }
                                    })
                                }}
                            >
                                Add to Cart
                            </button>
                        }
                    </div>
                )
            })}
        </div>
    )
}

export default Products