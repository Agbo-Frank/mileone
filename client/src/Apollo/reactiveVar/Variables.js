import { makeVar } from '@apollo/client'

const CartVar = makeVar([])
const UserVar = makeVar([])
const WishlistVar = makeVar([])

export {
    CartVar,
    WishlistVar,
    UserVar,  
}