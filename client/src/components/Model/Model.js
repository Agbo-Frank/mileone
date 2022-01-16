import avater2 from'../../assets/images/avater2.png'
import { useReactiveVar} from '@apollo/client'
import {ModelVar, ModelFunc} from '../../Apollo/reactiveVar/Model'
import './model.css'


function Model(){
    const model = useReactiveVar(ModelVar)
    return(
        <div className={`model ${model[0]?.active}`}>
            <div className="box"> 
                <i className="fa fa-times" onClick={() => ModelFunc({type: 'CLOSE_MODEL'})}></i>
                <div>
                    <img src={avater2} alt="avater" />
                    <p>Mr. Frank</p>
                </div>
                <button onClick={(e) => {
                    window.location.href=`tel: ${e.target.innerHTML}`
                }}>09061588791</button>
            </div>
        </div>
    )
}

export default Model