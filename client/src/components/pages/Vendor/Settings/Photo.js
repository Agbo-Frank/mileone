import React, { useEffect, useState } from "react";
import axios from 'axios'
import {useMutation} from '@apollo/client'
import {SIGNUPVENDOR} from '../../../../Apollo/operations/Mutations'
import {Auth} from '../../../../Apollo/reactiveVar/Auth'
import images from "../../../../assets/images/images";
import './Style.css'

const Photo = ({click, Doc}) => {
    const [file, setFile] = useState(null)
    const [logo, setLogo] = useState(null)
    const [loading, setLoading] = useState(false) 

    function upload(e, type) {
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            if(type === "landingPage")setFile(reader.result)
            if(type === "logo")setLogo(reader.result)
        }
    }
    async function submit(e){
        e.preventDefault()
        setLoading(true)
        let docs = {
            ...Doc,
            image: file,
            logo
        }
        let res = await fetch("http://localhost:5500/upload/vendor", {
            method: "POST",
            body: JSON.stringify(docs),
            headers: {
                "Content-type": "application/json"
            }
        })
        
        let data = await res.json()
        if(data){
            setLoading(false)
            Auth({
                type: 'CREATE_VENDOR',
                data
            })
            click()
        }
    }

  return (
      <form onSubmit={(e) => submit(e)}>
        <div className="photo">
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
            <div className="upload">
                {
                    logo ? 
                    <img src={logo} alt="uploaded"/>:
                        <div>
                            <i className="fas fa-image"></i>
                            <p>
                                Upload Company's Logo
                                <label htmlFor="logo">
                                    browse
                                    <input type="file" name='logo'  id="logo" onChange={(e) => upload(e, 'logo')}/>
                                </label>
                            </p>
                            <small>Supports: JPG, PNG, SVG</small>
                        </div>
                }
            </div>
        </div>
        <button className="btn" type="submit">{loading ? <span><i className="fa-li fa fa-spinner fa-spin"></i>Loading</span> : "Upload"}</button>
    </form>
  );
};

export default Photo;