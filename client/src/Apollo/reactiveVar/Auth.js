import { makeVar } from '@apollo/client'

const AuthVar = makeVar([])

function Auth(action){
    switch (action.type){
        case 'LOGIN_USER': {
            let token = action.data?.loginUser?.token
            if(token){
                localStorage.setItem('Token', token)
                console.log(action.data)
                return AuthVar([{
                        ...action.data?.loginUser,
                        token: localStorage.getItem('Token') 
                    }]);
            }
        }
        case 'CREATE_USER': {
            let token = action.data?.createUser?.token
            localStorage.setItem('Token', token)
            return AuthVar([{
                    ...action.data?.createUser,
                    token: localStorage.getItem('Token')
                }]);
        }
        case 'CREATE_VENDOR': {
            let token = action.data?.token
            localStorage.setItem('Token', token)
            return AuthVar([{
                    ...action.data,
                    token: localStorage.getItem('Token')
                }]);
        }  
    }
}

export  {
    Auth,
    AuthVar
}