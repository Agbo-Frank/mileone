import { useParams } from "react-router";
import { useQuery } from '@apollo/client'
import { Hero1} from "../../../components";
import Section from '../../Section/Section'
import Loader from '../../Loader/Loader'
import { ToggleFunc } from '../../../Apollo/reactiveVar/Toggle';
import { GET_PRODUCTS_CATEGORY } from '../../../Apollo/operations/Queries'

function Products(){
    const { category } =useParams()
    const {data, loading, error} = useQuery(GET_PRODUCTS_CATEGORY, {
        variables: {
            category
        }
    })
    const products = data?.getProductsCategory
    console.log(products)
    if(loading) return <Loader />
    return(
        <div>
            <Hero1 />
            <div className="search-control home-search">
                <input 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                onFocus={() => ToggleFunc({type: 'OPEN_SEARCH_PAGE'})}/>
                <i className="fas fa-search"></i>
            </div>
            <Section title="All" products={products} link="all"/>
        </div>
    )
}

export default Products