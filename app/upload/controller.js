const User = require('../model/User')
const Vendor = require('../model/Vendor')
const Product = require('../model/Product')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const cloudinary = require('../utils/cloudinary')
require('dotenv').config()

function createToken(id){
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

module.exports.createVendor = async (req, res) => {
    try{
        let newUser;

        const { name, 
                email, 
                password, 
                cordinates, 
                address, 
                biography,
                linkedIn,
                facebook,
                youtub,
                instagram,
                twitter,
                pnumber,
                image,
                logo
                } = req.body
        if(!email || !password || !cordinates){
            throw "please All fields"
        }

        let coords = cordinates.split(",")

        // coords[0] = lat
        // coords[1] = long

        const contacts = [
                {
                    media: 'facbook',
                    link: facebook
                },
                {
                    media: 'linkedIn',
                    link: linkedIn
                },
                {
                    media: 'facbook',
                    link: facebook
                },
                {
                    media: 'youtube',
                    link: youtub
                },
                {
                    media: 'instagram',
                    link: instagram
                },
                {
                    media: 'twitter',
                    link: twitter
                },
                {
                    media: 'phone Number',
                    link: pnumber
                }
            ]
            
        let user = await User.findOne({email})
        if(user) throw "this user already exist"

        let vendor = await Vendor.findOne({ email })
        if(vendor) throw "this user already exist"

        let uploadRes = await cloudinary.uploader.upload(image, {
            upload_preset: 'mileone'
        })
        let uploadRes1 = await cloudinary.uploader.upload(logo, {
            upload_preset: 'mileone'
        })

        if(uploadRes || uploadRes1){
            newUser = new Vendor({
                name, email, 
                password, biography,
                contacts, address,
                location:{
                    coordinates: [parseFloat(coords[0]), parseFloat(coords[0])]
                },
                image: uploadRes.public_id,
                logo: uploadRes1.public_id
            })

            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);

            newUser.password = hash

            const savedUser = await newUser.save()

            let token = createToken(savedUser.id)

            res.status(200).json({
                token,
                vendor: savedUser
            })
        }
    }
    catch (err){
        res.status(00).json({
            err
        })
    }
   
}

module.exports.createProduct = async (req, res) => {
    try{
        const  vendorId = req.user
        const { name, category, price, description, availability, image } = req.body

        if(!name || !price || !category){
            throw "please All fields"
        }

        let uploadRes = await cloudinary.uploader.upload(image, {
            upload_preset: 'mileone'
        })

        if(uploadRes){
            const newProduct = new Product({
                name, 
                category, 
                vendorId,
                image: uploadRes.public_id,
                price,
                description,
                availability
            })
        
            let product = await newProduct.save()
            if(product)
            res.status(200).json({
                product
            })
        }
    }
    catch(err){
        res.status(400).json({
            err
        })
    }
}
