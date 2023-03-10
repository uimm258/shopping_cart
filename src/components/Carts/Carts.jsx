import React, { useEffect, useState } from "react";

const Carts = ({ state, dispatch }) => {
    const { cart } = state
    const [total, setTotal] = useState("")

    const handleChangeQrt = (id, qrt) => {
        dispatch({
            type: 'CHANGE_QRT',
            payload: {
                id, 
                qrt
            }
        })
    }

    useEffect(() => {
        setTotal(cart.reduce((accumulator, current) => accumulator + Number(current.price) * current.qrt, 0))
    }, [cart])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "lightgrey",
            margin: 10,
            width: "20%"
        }}>
            <h2 style={{ alignSelf: "center" }}>Cart</h2>
            <b style={{ alignSelf: "center" }}> Subtotal: $ {total}</b>
            
            {cart.length > 0 ?
                <>
                    {cart.map(product => {
                        return (
                            <div
                                key={product.id}
                                style={{
                                    display: "flex",
                                    border: "1px solid grey",
                                    margin: 10,
                                    justifyContent: "space-between"
                                }}
                            >
                                <img src={product.thumbnail} alt={product.title} style={{ width: 70 }} />
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        margin: 10,
                                        gap: 10,
                                        width: "50%"
                                    }}
                                >
                                    <span>{product.title}</span>
                                    <b>$ {product.price}</b>
                                </div>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 5
                                    }}
                                >
                                    <button onClick={() => handleChangeQrt(product.id, product.qrt-1)}> - </button>    
                                    <span>{product.qrt}</span>
                                    <button onClick={() => handleChangeQrt(product.id, product.qrt+1)}> + </button>
                                </div>
                            </div>
                        )
                    })}
                </>
                :
                <span style={{ alignSelf: "center", padding: 20 }}>Cart is empty</span>
            }
        </div>
    )
}

export default Carts