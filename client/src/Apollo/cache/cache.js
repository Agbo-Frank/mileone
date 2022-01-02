import { InMemoryCache } from '@apollo/client'
import {CartVar, WishlistVar} from '../reactiveVar/Cart'

const cache = new InMemoryCache({
    typePolicies: {
        getUser: {
            fields:{
                cart:{
                    read(){
                        return CartVar();
                    }
                },
                wishlists: {
                    read(){
                        return WishlistVar();
                    }
                }
            }
        }
    }
})

export default cache