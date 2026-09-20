import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/plants">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt={item.name}
                width="150"
                height="150"
              />

              <h2>{item.name}</h2>

              <p>Unit Price: ₹{item.price}</p>

              <p>Quantity: {item.quantity}</p>

              <p>Total Cost: ₹{item.price * item.quantity}</p>

              <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                -
              </button>

              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                +
              </button>

              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Delete
              </button>
            </div>
          ))}

          <h2>Total Amount: ₹{totalAmount}</h2>

          <button onClick={() => alert("Coming Soon")}>
            Checkout
          </button>

          <Link to="/plants">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartItem;
