const { buildSchema } = require('graphql')

module.exports = buildSchema(`

    type Rate {
        userId: String!
        rate: Int
    }

    type Contact {
        media: String!
        link: String!
    }

    type Location {
        type: String
        coordinates: [Float!]!
    }

    type Vendor {
        _id: String
        name: String
        email: String
        password: String
        biography: String
        address: String
        contacts: [Contact!]!
        location: Location
        image: String
        logo: String
        followers: [String!]!
        follower: [User!]!
        history: [String!]
        products: [Product]
    }

    type Product {
        _id: String!
        name: String
        vendorId: String!
        vendor: Vendor
        category: String
        image: String
        price: Float
        discountedPrice: Float
        description: String!
        availability: Boolean
        comments: [Comment!]!
        rating: [Rate]
        date: String!
    }

    type Cart {
        itemId: String!
        product: Product
        quantity: Int!
    }

    type User {
        _id: String
        name: String
        googleId: String
        email: String
        password: String
        image: String
        cart: [Cart]
        wishlist: [String!]
        wishlists: [Product!]!
        following: [String!]!
        followings: [Vendor!]!
        history: [String!]!
    }
    
    type Comment {
        itemId: String!
        userId: String!
        user: User!
        message: String!
        likes: [String!]!
    }
    type AuthUser{
        email: String
        
    }
    type Auth {
        token: String
        user: User
        vendor: Vendor
    }

    type Message {
        message: String!
    }

    input productInput {
        name: String
        category: String
        image: String
        price: Float
        discountedPrice: Float
        description: String
        availability: String
    }
    input vendorInput{
        name: String
        email: String
        password: String
        address: String
        cordinates: String
        biography: String
        linkedIn: String
        facebook: String
        youtub: String
        instagram: String
        twitter: String
        pnumber: String
        img: String
        logo: String
    }

    type rootQuery {
        getProducts: [Product!]!
        getProductsCategory(category: String!): [Product!]!
        getProduct(id: String!): Product!
        getUser: User!
        getVendor(vendorId: String!): Vendor!
        getVendorsLoc(lat: Float!, lon: Float!): [Vendor!]!
        getVendors: [Vendor!]!
        loginUser(email: String!, password: String!): Auth
        search(word: String!): [Product]
    }

    type rootMutation {
        addProduct(input: productInput): Product!
        deleteProduct(itemId: String!): Message
        editProduct(input: productInput, itemId: String!): Message
        rateProduct(rate: Int!, itemId: String!): Message!
        addToWishlist(itemId: String!): Message
        removeFromWishlist(itemId: String!): Message
        createUser(email: String!, password: String!): Auth
        forgetPassword(email: String!): Message
        googleLogin(tokenId: String!, actionType: String!): Auth
        createVendor(input: vendorInput): Auth
        makeComment(message: String!, itemId: String!): Comment!
        likeComment(commentId: String!): Message
        delComment(commentId: String!): Message
        addToCart(itemId: String!): Message
        removeFromCart(itemId: String!): Message
        follow(vendorId: String!): Message
    }

    schema {
        query: rootQuery
        mutation: rootMutation
    }
`)
