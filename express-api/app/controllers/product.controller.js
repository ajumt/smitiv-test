const productSerivice = require("../services/product.service")

const getProductList = async (req,res) => {
    console.log(req)
    const data = await productSerivice.getFilteredProducts(req.query.key)
    res.status(200).json({
        message:"Products retrieved successfully",
        status:true,
        data:data,
    })
}
module.exports = {
    getProductList
}