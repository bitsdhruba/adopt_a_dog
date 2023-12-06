import React , { useState } from "react";
import './App.css';
import Breeds from './Component/Breeds';
import data from './data';
import Nav from './Component/Nav';

function App() {
	
	const [breeds, setBreeds] = useState(data);

	function noadopt(id){
		const newBreeds = breeds.filter((element)=> element.id !== id);
		return setBreeds(newBreeds);
	}

	function adopt(id){
		const newBreeds = breeds.filter((element)=> element.id === id);
		return setBreeds(newBreeds);
	}

	function loadHandler(){
		return setBreeds(data);
	}

	function Load(){
		return(
			<div className="flex justify-center items-center flex-col w-full h-screen bg-slate-400">
				<h2 className="text-xl ">Watch Again</h2>
				<button onClick={loadHandler} className="p-2 text-xl text-white rounded-md bg-slate-900 m-5">Load More</button>
			</div>
		);
	}

	if(breeds.length === 0 ){
		return (
			<Load></Load>
		);
	}

	return (
    <div className="bg-slate-400">
      <Nav />
      <div className="App w-[80%] h-full flex flex-col justify-center m-auto">
        <Breeds breeds={breeds} noadopt={noadopt} adopt={adopt}></Breeds>
      </div>
    </div>
  );
}

export default App;
