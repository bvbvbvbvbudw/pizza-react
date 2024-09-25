export const addToCart = (cart, product) => {
    const productInCart = cart.find(item => item.title === product.title);
    if (!productInCart) {
        return [...cart, { ...product, quantity: 1 }];
    }
    return cart;
};

export const increaseQuantity = (cart, index) => {
    return cart.map((item, i) => {
        if (i === index) {
            return { ...item, quantity: item.quantity + 1 };
        }
        return item;
    });
};

export const decreaseQuantity = (cart, index) => {
    const productInCart = cart[index];
    if (productInCart) {
        if (productInCart.quantity > 1) {
            return cart.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity - 1 } : item
            );
        } else {
            return cart.filter(item => item.title !== productInCart.title);
        }
    }
    return cart;
};