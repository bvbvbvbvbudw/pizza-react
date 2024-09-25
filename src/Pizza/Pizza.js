import React, { useState } from 'react';
import { products } from "./utils/products";
import { addToCart, increaseQuantity, decreaseQuantity } from "./utils/utils";

export default function Pizza() {
    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const handleAddToCart = (index) => {
        const product = products[index];
        setCart(prevCart => addToCart(prevCart, product));
        setTotalAmount(prevTotal => prevTotal + parseFloat(product.price));
    };

    const handleIncreaseQuantity = (index) => {
        setCart(prevCart => {
            const newCart = increaseQuantity(prevCart, index);
            return newCart;
        });
        setTotalAmount(prevTotal => prevTotal + parseFloat(products[index].price));
    };

    const handleDecreaseQuantity = (index) => {
        setCart(prevCart => {
            const newCart = decreaseQuantity(prevCart, index);
            return newCart;
        });
        setTotalAmount(prevTotal => prevTotal - parseFloat(products[index].price));
    };

    return (
        <>
            <h1>Desserts</h1>
            <div className="wrapper">
                <div className="menu" id="menu">
                    {products.map((product, index) => {
                        const quantity = cart.find(item => item.title === product.title)?.quantity || 0;
                        return (
                            <div className="item" key={index}>
                                <div className="container-img">
                                    <img className="img-desktop" src={product.img.desktop} alt={product.title} />
                                    <img className="img-tablet" src={product.img.tablet} alt={product.title} />
                                    <img className="img-mobile" src={product.img.mobile} alt={product.title} />
                                    <img className="img-thumbnail" src={product.img.thumbnail} alt={product.title} />
                                </div>
                                {quantity === 0 ? (
                                    <button className="add-cart" onClick={() => handleAddToCart(index)}>
                                        <i className="fa-solid fa-shopping-cart"></i>Add to Cart
                                    </button>
                                ) : (
                                    <div className="quantity-container">
                                        <i className="fa-solid fa-plus increase-quantity" onClick={() => handleIncreaseQuantity(cart.findIndex(item => item.title === product.title))}></i>
                                        <p className="quantity">{quantity}</p>
                                        <i className="fa-solid fa-minus decrease-quantity" onClick={() => handleDecreaseQuantity(cart.findIndex(item => item.title === product.title))}></i>
                                    </div>
                                )}
                                <div className="item-description">
                                    <small>{product.name}</small>
                                    <p className="title">{product.title}</p>
                                    <p className="price">${product.price}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="cart">
                    <h2>Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</h2>
                    {cart.map((item, index) => (
                        <div className="cart-item" key={index}>
                            <span>{item.title} (x{item.quantity})</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <p className="total">Total: ${totalAmount.toFixed(2)}</p>
                    <p className="carbon-neutral">🌿 This is a carbon-neutral delivery</p>
                    <button className="confirm-order">Confirm Order</button>
                </div>
            </div>
        </>
    );
}
