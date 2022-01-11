import gql from 'graphql-tag';

const LOGINUSER = gql`
    query LoginUser($email: String!, $password: String!){
        loginUser(email: $email, password: $password){
            token
            user{
                email
                name
                image
            }
            vendor{
                email
                name
                location{
                    coordinates
                }
            }
        }
    }
`

const GET_PRODUCTS = gql`
    query GetProducts{
        getProducts{
            name
            _id
            vendor{
                email
                name
                logo
            }
            category
            price
            availability
            image
            rating{
                rate
            }
        }
    }
`
const GET_PRODUCTS_CATEGORY = gql`
    query GetProductsCategory($category: String!){
        getProductsCategory(category: $category){
            name
            _id
            vendor{
                name
                logo
            }
            category
            price
            image
            rating{
                rate
            }
        }
    }
`

const GET_PRODUCT = gql`
    query GetProduct($itemId: String!){
        getProduct(id: $itemId){
            image
            name
            price
            _id
            vendor{
                image
                _id
                address
                logo
                name
                followers
            }
            rating{
                rate
            }
            comments{
                itemId
                user{
                    _id
                    name
                }
                message
                likes
            }
        }
    }
`
const SEARCH = gql`
    query Search($word: String!){
        search(word: $word){
            name
            _id
            vendor{
                name
                logo
            }
            category
            price
            availability
            image
            rating{
                rate
            }
        }
    }
`

const GET_VENDORS = gql`
    query GetVendors{
         getVendors{
            _id
            name
            image
            logo
            products{
                name
                image
            }
        }
    }
`
const GET_VENDOR = gql`
    query GetVendor($vendorId: String!){
         getVendor(vendorId: $vendorId){
            _id
            name
            image
            logo
            address
            followers
            products{
                _id
                name
                image
                rating{
                    rate
                }
                price
            }
        }
    }
`
const GET_USER = gql`
    query GetUser{
        getUser{
            name
            image
            email
            logout @client
            cart{
                itemId
                quantity
                product{
                    name
                    _id
                    price
                    image
                }
            }
            wishlists{
                _id
                image
                name
                rating{
                    rate
                }
                price
                vendor{
                    name
                    logo
                }
            }
        }
    }
`

export  { 
    LOGINUSER,
    GET_PRODUCTS,
    GET_PRODUCT,
    GET_PRODUCTS_CATEGORY,
    SEARCH,
    GET_VENDORS,
    GET_VENDOR,
    GET_USER
 }