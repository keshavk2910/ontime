export const addItemToCart = (currentProducts, productToAdd) => {
    const existingCartItem = currentProducts.find(product => product.id === productToAdd.id);

    if(existingCartItem) {
        return currentProducts.map(product => 
            product.id === productToAdd.id 
            ? {...product, quantity:product.quantity + 1 }
            :product
            )
    }

    return [...currentProducts, {...productToAdd, quantity:1}]

}