import { useReactiveVar, useQuery } from '@apollo/client'
import React,{useState} from 'react';
import images from "../../../assets/images/images";
import { BrandSection, Header, Hero1, Section } from "../../../components";
import LoginPop from '../../LoginPop/LoginPop'
import {AuthVar} from '../../../Apollo/reactiveVar/Auth'
import {GET_PRODUCTS, GET_VENDORS} from '../../../Apollo/operations/Queries'
import Carousel from '../../Carousel/Carousel'
import './Home.css'
import Alert from '../../Alert/Alert'

const Home = () => {
    const user = useReactiveVar(AuthVar)
    const {data, loading, error } = useQuery(GET_PRODUCTS)
    const {data: vendors, loading: loadVendors, error:  err } = useQuery(GET_VENDORS)
    console.log(data)
    console.log(vendors?.getVendors)
    const products = data?.getProducts
    const vendor = vendors?.getVendors
    const [toggled, setToggled] = useState(false)
    const [alert, setAlert] = useState({
      message: '',
      type: false,
      show: false
    })
  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div> {error}</div>
  }
  return (
    <>
        <LoginPop toggle={[toggled, setToggled]}/>
        <Header user={user[0]?.user}/>
        <Hero1 />
        <BrandSection vendors={ vendor }/>
        <section className="section">
            <Section title="Hot Deals" products={products} toggle={[setToggled, setAlert]}/>
        </section>
        <Carousel products={products} toggle={[setToggled, setAlert]}/>
        <Alert alert={alert} setAlert={setAlert}/>
    </>
  );
};

export default Home;