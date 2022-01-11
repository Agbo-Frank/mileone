import React, { useRef, useState } from "react";
import {AuthVar} from '../../../../Apollo/reactiveVar/Auth'
// import images from "../../assets/images/images";
import './Style.css'

const Privacy = () => {
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(null)
    const name = useRef('')
    const category = useRef('')
    const price = useRef('')
    const discountedPrice = useRef('')
    const description = useRef('')
    const availability = useRef('')

    function upload(e) {
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setFile(reader.result)
        }
    }

    async function submit(e){
        e.preventDefault()
        console.log(localStorage.getItem('Token'))
        let docs = {
            name: name.current.value,
            category: category.current.value,
            price: price.current.value,
            description: description.current.value,
            availability: availability.current.checked,
            image: file
        }
        setLoading(true)
        let res = await fetch("/upload/product", {
            method: "POST",
            body: JSON.stringify(docs),
            headers: {
                "Content-type": "application/json",
                "x-auth-token": localStorage.getItem('Token')
            }
        })

        let data = await res.json()
        console.log(data)
        setLoading(false)
        setFile(null)
        // Doc({...docs})

        // click()
    }

    return (
        <>
            <form onSubmit={(e) => submit(e)}>
                <div className="input-group">
                    <div className="input-field">
                        <label>Name:</label>
                        <input type="text" ref={name} placeholder="This name will be displayed on your public profile"/>
                    </div>
                    <div className="input-field">
                        <label>category:</label>
                        <select ref={category}>
                            <option value="Resturant">Resturant</option>
                            <option value="Cake">Cake</option>
                            <option value="Ice Cream">Ice Cream</option>
                            <option value="Snakes">Snakes</option>
                            <option value="Drink">Drink</option>
                            <option value="Dishes">Dishes</option>
                        </select>
                    </div>
                    <div className="input-field">
                        <label>description:</label>
                        <textarea ref={description}></textarea>
                    </div>
                    <div className="input-field">
                        <label>price:</label>
                        <input type="number"ref={price} placeholder="Enter your LinkedIn Link" />
                    </div>
                    <div className="input-field">
                        <label>availability:</label>
                        <input type="checkbox" ref={availability}placeholder="Enter your You Tube Link" />
                    </div>

                    <div className="upload">
                        {
                        file ? 
                        <img src={file} alt="uploaded"/>:
                            <div className="upload-prompt">
                                <i className="fas fa-image"></i>
                                <p>
                                    Upload Landing photo
                                    <label htmlFor="myfile">
                                        browse
                                        <input type="file" name='image'  id="myfile" onChange={(e) => upload(e, 'landingPage')}/>
                                    </label>
                                </p>
                                <small>Supports: JPG, PNG, SVG</small>
                            </div>
                        }
                    </div>
                </div>
                <button className="btn" type="submit">{loading ? <span><i className="fa-li fa fa-spinner fa-spin"></i>Loading</span> : "Upload"}</button>
            </form>
        </>
    );
};

export default Privacy;