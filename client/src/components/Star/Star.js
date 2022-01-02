import './star.css'

function Stars({rate}){
    switch (rate) {
        case 0:{
            return(
                <ul className="stars">
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                </ul>
            )
        }
        case 1:{
            return(
                <ul className="stars">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                </ul>
            )
        }
        case 2:{
            return(
                <ul className="stars">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                </ul>
            )
        }
        case 3:{
            return(
                <ul className="stars">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                </ul>
            )
        }
        case 3.5:{
            return(
                <ul className="stars">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star-half-alt"></i></li>
                    <li><i className="far fa-star"></i></li>
                </ul>
            )
        }
        case 4:{
            return(
                <ul className="stars">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                </ul>
            )
        }
        case 4.5:{
            return(
                <ul className="stars">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star-half-alt"></i></li>
                </ul>
            )
        }
        case 5:{
            return(
                <ul className="stars">
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                    <li><i className="fas fa-star"></i></li>
                </ul>
            )
        }
        default:{
            return(
                <ul className="stars">
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                    <li><i className="far fa-star"></i></li>
                </ul>
            )
        }
    }
}

export default Stars