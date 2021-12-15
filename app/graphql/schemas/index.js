const { buildSchema } = require('graphql')

module.exports = buildSchema(`
    type Rate {
        userId: String!
        rate: Int
    }

    type Cart {
        itemId: String!
        product: Product
        quantity: Int!
    }

    type User {
        _id: String!
        name: String
        googleId: String
        email: String!
        password: String
        image: String
        cart: [Cart!]!
        wishlist: [String!]
        wishlists: [Product!]!
        following: [String!]!
        followings: [Vendor!]!
        history: [String!]!
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
        _id: String!
        name: String
        email: String!
        password: String!
        biography: String
        contacts: [Contact!]!
        location: Location!
        image: String
        followers: [String!]!
        follower: [User!]!
        history: [String!]
    }

    type Product {
        _id: String!
        name: String!
        vendorId: String!
        vendor: Vendor!
        category: String!
        image: String
        price: Float!
        discountedPrice: Float
        description: String!
        availability: Boolean!
        comments: [Comment!]!
        rating: [Rate!]
        date: String!
    }

    type Comment {
        itemId: String!
        userId: String!
        user: User!
        message: String!
        likes: [String!]!
    }

    type Auth {
        token: String
        user: User
        error: String
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

    type rootQuery {
        getProducts: [Product!]!
        getProduct(id: String!): Product!
        getUser(id: String!): User!
        getVendor(id: String!): Vendor!
        getVendors(lat: Float!, lon: Float!): [Vendor!]!
        loginUser(email: String!, password: String!): Auth
    }

    type rootMutation {
        addProduct(input: productInput, vendorId: String!): Product!
        deleteProduct(vendorId: String!, itemId: String!): Message
        editProduct(input: productInput, itemId: String!): Message
        rateProduct(userId: String!, rate: Int!, itemId: String!): Message!
        addToWishlist(userId: String!, itemId: String!): Message
        removeFromWishlist(userId: String!, itemId: String!): Message
        createUser(email: String!, password: String!): Auth
        makeComment(message: String!, userId: String!, itemId: String!): Comment!
        likeComment(commentId: String!, userId: String!): Message
        delComment(commentId: String!, userId: String!): Message
        addToCart(itemId: String!, userId: String!, quantity: Int!): Message
        removeFromCart(itemId: String!, userId: String!): Message
    }

    schema {
        query: rootQuery
        mutation: rootMutation
    }
`)
