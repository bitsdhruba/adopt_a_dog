import { useState } from "react";

export default function Card({id, name, price, info, image, noadopt, adopt}){
    
    const [readmore, setReadmore] = useState(false);

    const about = readmore ? info : `${info.substring(0 , 200)}...`;

    function readmoreHandler(){
        return setReadmore(!readmore);
    }

    return (
      <div className="w-[450px] h-full shadow-xl rounded-lg p-2 bg-white">
        <img
          src={image}
          alt="doggo"
          className=" aspect-square object-cover shadow-md rounded-lg"
        ></img>
        <div>
          <h2 className="text-lg m-3">{name}</h2>
        </div>
        <div>
          <h2 className="text-lg m-2 text-green-600">{price}</h2>
        </div>
        <div>
          <p className="text-slate-500 text-sm m-3">{about}</p>
          <span onClick={readmoreHandler} className="pointer">
            {" "}
            {readmore ? `showless` : `readmore`}{" "}
          </span>
        </div>
        <div className="p-2">
          <button
            onClick={() => adopt(id)}
            className="bg-green-500 rounded-xl text-white p-2 text-lg mx-5"
          >
            Adopt Now
          </button>
          <button
            onClick={() => noadopt(id)}
            className="bg-red-500 rounded-xl text-white p-2 text-lg mx-5"
          >
            Not Now
          </button>
        </div>
      </div>
    );
}