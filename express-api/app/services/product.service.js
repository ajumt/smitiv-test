const productRepository = require("../repositories/product.repository")
const getFilteredProducts = async(searchKey) =>{
    const result = await productRepository.fetchProducts(searchKey);
    return result[0];
}
module.exports = {
    getFilteredProducts
}