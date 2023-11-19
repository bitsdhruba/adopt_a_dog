import React , { useState } from "react";
import './App.css';
import Breeds from './Component/Breeds';
import data from './data';

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
			<div>
				<h2>No more Doggos</h2>
				<button onClick={loadHandler}>Load More</button>
			</div>
		);
	}

	if(breeds.length === 0 ){
		return (
			<Load></Load>
		);
	}

	return (
    	<div className="App">
			<Breeds breeds = {breeds} noadopt = {noadopt} adopt={adopt}></Breeds>
    	</div>
	);
}

export default App;
