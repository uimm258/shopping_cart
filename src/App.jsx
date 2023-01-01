import React, { useEffect, useReducer } from "react";
import Products from "./components/Products/Products";
import Carts from './components/Carts/Carts';
import cartReducer from "./reducers/CartReducer";

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    carts: []
  })

  useEffect(() => {
    fetch(`https://dummyjson.com/products/`)
      .then(res => res.json())
      .then(res => {
        dispatch({
          type: "ADD_PRODUCTS",
          payload: res.products
        })
      })
      .catch(e => console.log(e))
  }, [])

  return (
    <div>
      <h1>Dummy Shopping List</h1>
      <Products state={state} dispatch={dispatch} />
      <Carts state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App