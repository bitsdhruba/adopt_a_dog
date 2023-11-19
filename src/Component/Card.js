import { useState } from "react";

export default function Card({id, name, price, info, image, noadopt, adopt}){
    
    const [readmore, setReadmore] = useState(false);

    const about = readmore ? info : `${info.substring(0 , 200)}...`;

    function readmoreHandler(){
        return setReadmore(!readmore);
    }

    return(
        <div>
            <img src={image} alt="Kutta"></img>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <h2>{price}</h2>
            </div>
            <div>
                <p>{about}</p>
                <span onClick={readmoreHandler}> { readmore ? `showless` : `readmore`} </span>
            </div>
            <div>
                <button onClick={()=> adopt(id)}>Adopt Now</button>
                <button onClick={()=> noadopt(id)}>Not Now</button>
            </div>
        </div>
    );
}