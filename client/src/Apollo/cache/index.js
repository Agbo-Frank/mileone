import { ApolloClient, HttpLink, ApolloLink} from "@apollo/client"
import cache from './cache'

const link = new HttpLink({ 
    uri: 'http://localhost:5500/graphql',
    useGETForQueries: true
});


const client = new ApolloClient({
    cache,
    link,
})

export default client