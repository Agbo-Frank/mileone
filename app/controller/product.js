var Product = require('../model/Product')
var Comment = require('../model/Comments')

module.exports.createProduct = (req, res) => {
    var vendorId = req.user
    var image = req.file
    var{ name, category, price, dp, description, availability } = req.body

    var newProduct = new Product({
        name, 
        category, 
        vendorId,
        image,
        price,
        discountedPrice: dp,
        description,
        availability
    })

      newProduct.save()
        .then(product => {
            Product.updateOne({ _id: product._id}, {
                productId:product._id  
            })
                .then(result => {
                    res.status(200).json({ product })
                })
                .catch(err => {
                    res.status(400)
                })
            
        })
        .catch(err => {
            res.status(400).json({errmsg: 'unsucessfull'})
        })
}

module.exports.deleteProduct = (req, res) =>{
    var vendorId = req.user
    var itemId = req.params.id

    if(vendorId){
        Product.find({ vendorId })
          .then(product => {
                Product.findOneAndRemove({ _id: itemId })
                    .then(msg => {
                        res.status(200).json({ msg: 'deleted successfully'})
                    })
                    .catch(err => {
                        res.status(400).json({ err })
                    })
          })
    }
}

module.exports.editProduct = (req, res) => {
    var image = req.file
    var itemId = req.params.id
    var{ name, category, price, dp, description, availability } = req.body

    Product.findOne({ _id: itemId})
        .then(product => {
            Product.updateOne({
                name: name || product.name,
                category: category || product.category, 
                price: price || product.price,
                discountedPrice: dp || product.discountedPrice,
                description: description || product.description,
                availability: availability ||product.availability
            })
                .then(product => {
                    if(product.acknowledged){
                        res.status(200).json({ msg: 'update successfull'})
                    }    
                })
                .catch(err => {
                    res.status(400).json({ msg: 'update unsuccessfull'})
                })
        })
        .catch(err => {
            res.status(400).json({ msg: 'item not found'})
        })
}

module.exports.getProduct = (req, res) => {
    var itemId = req.params.id

    Product.aggregate([
        {
            $match: { productId: itemId }
        },
        {
            $lookup: {
                from: "comments",
                localField: "productId",
                foreignField: "itemId",
                as: "comment"
            }
        }
    ])
        .then(product => {
            res.status(200).json({ product })
        })
        .catch(err => {
            res.status(400).json({errmsg: "can't find product"})
        })
}
module.exports.getProducts = (req, res) => {
    var { page } = req.query

    Product.find({ })
        .sort({ date: 1 })
        .skip(page > 1 ? (page - 1) * 30 : 0)
        .limit(page > 1 ? page * 30 : 30)
        .then(product => {
            res.status(200).json({ product })
        })
        .catch(err => {
            res.status(400).json({errmsg: "can't find product"})
        })
}

module.exports.rateProduct = (req, res) => {
    var userId = req.user
    var { rate, itemId } = req.body

    Product.updateOne({ _id: itemId }, {
        $addToSet: {
            rating: {
                rate, userId
            }
        }
    })
        .then(update => {
            res.status(200).json({msg: 'thank you for your feedack'})
        })
        .catch(err => {
            res.status(400).json({errmsg: err})
        })
}