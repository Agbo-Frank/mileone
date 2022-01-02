const Product = require('../../model/Product')
const User = require('../../model/User')
const Vendor = require('../../model/Vendor')
const Comment = require('../../model/Comments')
const { returnProduct } = require('../functions')
const cloudinary = require('../../utils/cloudinary')

module.exports = {
    getProducts: async (args, req) => {
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
    addProduct: ({input}, req) => {
        if(!req.isAuth){
            throw new Error('Unauthorized')
        }
        const vendorId = req.user
        let {name, category, image, price, discountedPrice, description, availability} = input

        cloudinary.uploader.upload(image, (error, result) =>{

            let newProduct = new Product({
                name, 
                category, 
                vendorId,
                image: result.public_id,
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
        })
    },
    deleteProduct:({itemId}, req) => {
        if(!req.isAuth){
            throw new Error('Unauthorized')
        }
        const vendorId = req.user

        return Product.find({ vendorId })
                    .then(product => {
                      return Product.findOne({ _id: itemId })
                            .then(product => {
                                cloudinary.uploader.destroy(product.image)

                            return Product.findOneAndRemove({ _id: itemId })
                                    .then(msg => {
                                        return msg &&  {
                                            message: 'deleted successfully'
                                        }
                                    })
                                    .catch(err => {
                                        return err 
                                    })
                            }).catch(err => {
                                return err 
                            })
                    })
    },
    editProduct: async ({input, itemId}, req) => {
        try{
            if(!req.isAuth){
                throw new Error('Unauthorized')
            }
            const vendorId = req.user

            const { name, image, category, price, dp, description, availability } = input

            let product = await Product.findOne({ _id: itemId})
            if(product){
                if(image){
                    let des = await cloudinary.uploader.destroy(product.image)
                    image = des && await cloudinary.uploader.upload(image)
                }
                else{
                    image = product.image
                }
                
               let result = await Product.updateOne({
                                name: name || product._doc.name,
                                category: category || product._doc.category, 
                                image: image,
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
    rateProduct: async ({rate, itemId }, req) => {
        try{
            if(!req.isAuth){
                throw new Error('Unauthorized')
            }
            const userId = req.user
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
        catch (err){
            throw err
        }
    }
}    