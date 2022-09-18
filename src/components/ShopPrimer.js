import { useDispatch, useSelector } from "react-redux";

const ShopPrimer = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <h2>Mali web shop za demonstraciju reduxa</h2>

      <h3>Artikli</h3>
      <div>
        {
          products.map(product => {
            return (
              <div key={product.id}>{product.naziv} {product.cena}
                <button
                  onClick={() => {
                    dispatch({
                      type: 'ADD_TO_CART',
                      payload: product
                    })
                  }}
                >Dodaj</button></div>
            )
          })
        }
      </div>
      <h3>Cart</h3>
      <p>Broj artikala u cart-u: {cart.length}</p>
      <button onClick={() => {
        dispatch({
          type: 'EMPTY_CART'
        })
      }}>Isprazni Cart</button>
    </div>
  );
}

export default ShopPrimer;