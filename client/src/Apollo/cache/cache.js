import { InMemoryCache } from '@apollo/client'
import {CartVar, WishlistVar, UserVar } from '../reactiveVar/Variables'

const cache = new InMemoryCache({
    typePolicies: {
        getUser: {
            fields:{
                name:{
                    read(){
                        return UserVar()[0].name;
                    }
                },
                image:{
                    read(){
                        return UserVar()[0].image;
                    }
                },
                email:{
                    read(){
                        return UserVar()[0].email;
                    }
                },
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