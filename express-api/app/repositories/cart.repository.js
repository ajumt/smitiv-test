const db = require("../../config/database");
const fetchProducts = (searchKey) => {
    const query = !searchKey ? `SELECT * FROM products` 
        : `SELECT * FROM products where products.name LIKE "%${searchKey}%"`;
    return db.execute(query);
}
module.exports = {
    fetchProducts
}