

function setRating(rate){
    let aveRate;
    if(rate?.length !== 0){
        const sumRate = rate?.reduce((prev, next) => {
            return prev.rate + next.rate
        })
        return aveRate = sumRate / rate?.length
    }
    else{
        aveRate = 0
        return aveRate
    }
}

function countRate(array, num){
    let newArr = array.filter(value => {
        return value === num
    })
    return newArr.length
}

function Rate({rate, num, totalNum}){
    let percent = (num / totalNum) * 100
    return(
        <li> 
            <div>{rate}</div>
            <i className="fas fa-star"></i>
            <div>({num})</div>
            <div class="progress">
                <div className={`progress-bar w-${percent}`} role="progressbar" aria-valuenow={`${percent}`} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </li>
    )
}

function Comment({comment}){
    return(
        <div className="comment">
            <p>{comment.message}</p>
            <div>
                <div>by {comment.user?.name}</div>
                <div>Verified Purchase</div>
            </div>
        </div>
    )
}


export {
    setRating,
    countRate,
    Rate, 
    Comment
}