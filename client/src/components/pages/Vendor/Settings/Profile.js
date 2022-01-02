import React, { useRef, useState } from "react";
import axios from 'axios'
import './Style.css'

const Profile = ({click, setDoc}) => {
    const name = useRef('')
    const address = useRef('')
    const password = useRef('')
    const cordinates = useRef('')
    const biography = useRef('')
    const linkedIn = useRef('')
    const facebook = useRef('')
    const youtub = useRef('')
    const instagram = useRef('')
    const twitter = useRef('')
    const email = useRef('')
    const pnumber = useRef('')

    function getLocation(e) {
        e.preventDefault()
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;

            cordinates.current.value = `${lat},${long}`
          });
    }
    async function submit(e){
        e.preventDefault()
        let docs = {
            name: name.current.value,
            address: address.current.value,
            password: password.current.value,
            cordinates: cordinates.current.value,
            biography: biography.current.value,
            linkedIn: linkedIn.current.value,
            facebook: facebook.current.value,
            youtub: youtub.current.value,
            email: email.current.value,
            instagram: instagram.current.value,
            twitter: twitter.current.value,
            pnumber: pnumber.current.value
        }
        // let res = await axios.post('http://localhost:5500/upload/vendor', {body: JSON.stringify(docs)}, {headers: {"Content-Type": "application/json"}})

        // let data = res.json()
        // console.log(data)
        setDoc({...docs})

        click()
    }

  return (
    <form onSubmit={(e) => submit(e)}>
        <div className="profile">
            <div className="input-group">
                <div className="input-field">
                    <label>Company Name:</label>
                    <input type="text" ref={name} placeholder="This name will be displayed on your public profile"/>
                </div>
                <div className="input-field">
                    <label>Address:</label>
                    <input type="text" ref={address} placeholder="Enter your address" />
                </div>
                <div className="input-field">
                    <label>password:</label>
                    <input type="password" ref={password} placeholder="Enter your password" />
                </div>
                <div className="input-field">
                    <label>Cordinates:</label>
                    <div className="location">
                        <input type="text" ref={cordinates} required placeholder="Click on the the button to get your coordinate"/>
                        <button onClick={(e) => getLocation(e)}>Get coordinate</button>
                    </div>
                </div>
                <div className="input-field">
                    <label>Biography:</label>
                    <textarea ref={biography}></textarea>
                </div>
                <div className="input-field">
                    <label>Email:</label>
                    <input type="email" ref={email} placeholder="Enter your Email Address"/>
                </div>
            </div>
            <div className="input-group">
                <div className="input-field">
                    <label>You Tube:</label>
                    <input type="text" ref={youtub}placeholder="Enter your You Tube Link" />
                </div> 
                <div className="input-field">
                    <label>LinkedIn:</label>
                    <input type="text"ref={linkedIn} placeholder="Enter your LinkedIn Link" />
                </div>
                <div className="input-field">
                    <label>Phone Number:</label>
                    <input type="number" ref={pnumber} placeholder="Enter your Phone Number Link" />
                </div>
                <div className="input-field">
                    <label>Instagram:</label>
                    <input type="text" ref={instagram} placeholder="Enter your Instagram Link" />
                </div>
                <div className="input-field">
                    <label>Twitter:</label>
                    <input type="text"ref={twitter} placeholder="Enter your Twitter Link" />
                </div>
                <div className="input-field">
                    <label>Facebook:</label>
                    <input type="text" ref={facebook} placeholder="Enter your Facebook Link" />
                </div>
            </div>
        </div>
        <button className="btn" type="submit">Next <span>&rarr;</span></button>
    </form>
  );
};

export default Profile;
