import { gql } from '@apollo/client';


const SIGNUPUSER = gql`
mutation CreateUser($email: String!, $password: String!){
    createUser(email: $email, password: $password){
        token,
        user{
            email
            name
            cart{
                itemId
            }
        }
    }
}
`

const SIGNUPVENDOR = gql`
mutation CreateVendor(
    $name: String
    $email: String!
    $password: String!
    $address: String!
    $cordinates: String!
    $biography: String
    $linkedIn: String
    $facebook: String
    $youtub: String
    $instagram: String
    $twitter: String
    $pnumber: String
    $image: Upload
    $logo: Upload
    ){
    createVendor(input: {
        email: $email, 
        password: $password
        name: $name
        address: $address
        cordinates: $cordinates
        biography: $biography
        linkedIn: $linkedIn
        facebook: $facebook
        youtub: $youtub
        instagram: $instagram
        twitter: $twitter
        pnumber: $pnumber
        image: $image
        logo: $logo
    }){
        token,
        user{
            email
            name
            location{
                coordinates
            }
        }
    }
}
`

const FORGETPASSWORD = gql`
    mutation ForgetPassword($email: String!){
        forgetPassword(email: $email){
            message
        }
    }
`

const ADD_TO_CART = gql`
    mutation AddToCart($id: String!){
        addToCart(itemId: $id){
            message
        }
    }
`
const WISHLIST = gql`
    mutation Wishlistt($id: String!){
        addToWishlist(itemId: $id){
            message
        }
    }
`
const REMOVE_CART_ITEM = gql`
    mutation RemoveFromCart($id: String!){
        removeFromCart(itemId: $id){
            message
        }
    }
`
const FOLLOW = gql`
    mutation Follow($id: String!){
        follow(vendorId: $id){
            message
        }
    }
`
const GOOGLELOGIN = gql`
    mutation GoogleLogin($tokenId: String!, $actionType: String!){
        googleLogin(tokenId: $tokenId, actionType: $actionType){
            token,
            user{
                email
                name
            }
        }
    }
`

export  { 
    SIGNUPUSER, 
    SIGNUPVENDOR, 
    ADD_TO_CART,
    WISHLIST,
    REMOVE_CART_ITEM,
    FOLLOW,
    GOOGLELOGIN,
    FORGETPASSWORD
}