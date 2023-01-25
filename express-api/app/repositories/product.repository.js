const db = require("../../config/database");
const fetchProducts = (searchKey) => {
    const query = !searchKey ? `SELECT * FROM products` 
        : `SELECT * FROM products where products.name LIKE "%${searchKey}%"`;
    return db.execute(query);
}
const fetchByProductId = (productId) => {
    const query = `SELECT * FROM products WHERE id = ${productId}`;
    return db.execute(query);
}
module.exports = {
    fetchProducts,
    fetchByProductId
}