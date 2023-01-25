const cartService = require("../services/cart.service")

const getCartProducts = async (req,res) => {
    console.log(req)
    const data = await cartService.getCartProducts()
    res.status(200).json({
        message:"Products retrieved successfully",
        status:true,
        data:data,
    })
}
const addToCart = async (req,res) => {
    if((+req.body.productId)<=0, (+req.body.quantity)<0)
        res.status(401).json({
            message:"Invalid data",
            status:false
        })
    const data = await cartService.addToCart({
        productId,
    })
    res.status(200).json({
        message:"Products retrieved successfully",
        status:true,
        data:data,
    })
}
module.exports = {
    getCartProducts,
    addToCart
}