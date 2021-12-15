const Product = require('../../model/Product')
const User = require('../../model/User')
const Vendor = require('../../model/Vendor')
const Comment = require('../../model/Comments')
const { returnProduct } = require('../functions')

module.exports = {
    getProducts: async () => {
        try{
        let product = await Product.find({ })

        return product.map(item => {
                return returnProduct(item)
            })
        }
        catch(err){
            throw err
        }
    },
    getProduct: args => {
        return Product.findById(args.id)
                .then(product => {
                    return returnProduct(product)
                })
                .catch(err => {throw err})
    },
    addProduct: ({input, vendorId}) => {
        // var vendorId = req.user
        let {name, category, image, price, discountedPrice, description, availability} = input

        let newProduct = new Product({
            name, 
            category, 
            vendorId,
            image,
            price,
            discountedPrice,
            description,
            availability
        })

        return newProduct.save()
            .then(product => {
                return returnProduct(product)
            })
            .catch(err => {
                throw err
            })
    },
    deleteProduct:({vendorId, itemId}) => {
        return Product.find({ vendorId })
                    .then(product => {
                        return Product.findOneAndRemove({ _id: itemId })
                                .then(msg => {
                                    return msg &&  {
                                        message: 'deleted successfully'
                                    }
                                })
                                .catch(err => {
                                    return err 
                                })
                    })
    },
    editProduct: async ({input, itemId}) => {
        try{
            const { name, category, price, dp, description, availability } = input

            let product = await Product.findOne({ _id: itemId})
            if(product){
               let result = await Product.updateOne({
                                name: name || product._doc.name,
                                category: category || product._doc.category, 
                                price: price || product._doc.price,
                                discountedPrice: dp || product._doc.discountedPrice,
                                description: description || product._doc.description,
                                availability: availability ||product._doc.availability
                            })
                    return result.acknowledged && {
                        message: 'updated successfully'
                    }
            }
        }
        catch(err){
            throw err
        }
    },
    rateProduct: async ({userId, rate, itemId }) => {
        let result = await Product.updateOne({ _id: itemId }, {
                                    $addToSet: {
                                        rating: {
                                            rate, userId
                                        }
                                    }
                                })
                return result.acknowledged && {
                    message: 'thank you for your feedack'
                }
    }
}    