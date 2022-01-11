import { makeVar } from '@apollo/client'
import { UserVar } from './Variables'

const AuthVar = makeVar([])

function Auth(action){
    switch (action.type){
        case 'LOGIN_USER': {
            console.log('2')
            let token = action.data?.loginUser?.token
            let user = action.data?.loginUser?.user
            if(token){
                localStorage.setItem('Token', token)
                return UserVar([{
                    ...UserVar()[0],
                    name: user.name,
                    image: user.image,
                    email: user.email,
                    isLoggedIn: true
                }])
            }
        }
        case 'GL': {
            console.log('1')
            let token = action.data?.googleLogin?.token
            let user = action.data?.googleLogin?.user
            if(token){
                localStorage.setItem('Token', token)
                return UserVar([{
                    ...UserVar()[0],
                    name: user.name,
                    image: user.image,
                    email: user.email,
                    isLoggedIn: true
                }])
            }
        }
        case 'CREATE_USER': {
            console.log('3')
            let token = action.data?.createUser?.token
            let user = action.data?.createUserr?.user
            if(token){
                localStorage.setItem('Token', token)
                return UserVar([{
                    ...UserVar()[0],
                    name: user.name,
                    image: user.image,
                    email: user.email,
                    isLoggedIn: true
                }])
            }
        }
        case 'CREATE_VENDOR': {
            let token = action.data?.token
            localStorage.setItem('Token', token)
            return AuthVar([{
                    ...action.data,
                }]);
        }
        case 'LOGOUT': {
            localStorage.removeItem('Token')
            return UserVar([{
                ...UserVar()[0],
                name: '',
                image: '',
                email: '',
                isLoggedIn: false
            }]);
        }  
    }
}

export  {
    Auth,
    AuthVar
}