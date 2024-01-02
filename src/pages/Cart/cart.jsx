import React, { useState } from 'react';

const Cart = () => {
    // Sample cart data
    const cartData = [
        { id: 1, name: 'Product A', price: 19.99, quantity: 2 },
        { id: 2, name: 'Product B', price: 29.99, quantity: 1 },
        // Add more cart items as needed
    ];

    // State for cart items
    const [cartItems, setCartItems] = useState(cartData);

    // Function to update quantity in the cart
    const updateQuantity = (productId, newQuantity) => {
        const updatedCart = cartItems.map(item => 
            item.id === productId ? { ...item, quantity: newQuantity } : item
        );
        setCartItems(updatedCart);
    };

    // Function to remove item from the cart
    const removeFromCart = (productId) => {
        const updatedCart = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCart);
    };

    // Calculate total price
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <p>{item.name}</p>
                                <p>Price: ${item.price}</p>
                                <p>Quantity: 
                                    <input
                                        type="number"
                                        value={item.quantity}
                                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    />
                                </p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${total.toFixed(2)}</p>
                    <button>Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;


