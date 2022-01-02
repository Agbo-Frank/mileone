import images from "../../../assets/images/images";
import { useParams } from "react-router-dom"
import { useQuery, useMutation } from '@apollo/client'
import { GET_VENDOR } from '../../../Apollo/operations/Queries'
import {Image} from 'cloudinary-react';
import { Header, Hero2, Section } from "../../../components";
import './Brand.css'

const Brand = () => {
    const { id } = useParams()
    const {data, loading, error} = useQuery(GET_VENDOR, {
        variables: {
            id: id
        }
    })
    console.log(data?.getVendor)
    const vendor = data?.getVendor

    const [follow] = useMutation()
    if(loading)return <div>Loading....</div>
    return (
        <>
            <Header />
            <Hero2 />
            <section className="section">
                <div className="brand-info">
                    <div>
                        <Image cloudName="agbofrank" publicId={vendor?.logo} secure="true"></Image>
                        <div>
                            <h5>{vendor?.name}</h5>
                            <p>{vendor?.address}</p>
                            <button className="btn">{vendor?.followers.length} followers</button>
                        </div>
                    </div>
                    <div>
                        <button className="btn">Follow</button>
                    </div>
                </div>
                <Section title="Hot Deals" products={vendor?.products}/>
                {/* <Section title="Exclusively New"/>
                <Section title="Exclusively New"/> */}
            </section>
        </>
    );
};

export default Brand;