import { makeVar } from '@apollo/client'

const ModelVar = makeVar([])

function ModelFunc(action){
    switch(action.type){
        case 'OPEN_MODEL': {
            return ModelVar([{
                ...ModelVar[0],
                active: 'active'
            }])
        }
        case 'CLOSE_MODEL': {
            return ModelVar([{
                ...ModelVar[0],
                active: ''
            }])
        }
        default: {
            return ModelVar()
        }
    }
}

export {
    ModelVar,
    ModelFunc
}