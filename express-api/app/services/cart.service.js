const cartRepository = require("../repositories/cart.repository")
const getCartProducts = async(searchKey) =>{
    const result = await cartRepository.fetchCartProducts(searchKey);
    return result[0];
}
const addToCart = async(searchKey) =>{
    const result = await cartRepository.addToCart(productId,quantity);
    return result[0];
}
module.exports = {
    getCartProducts,
    addToCart
}