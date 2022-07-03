import React,{useState} from "react";
import "./../styles/App.css";
import ShowData from "./ShowData";


function App() 
{
	const [task,setTask] = useState("");
	const [dataArray,setArray] = useState([]);
	

	function inputValue(e) {
		setTask(e.target.value);
	}
	
	function submitHandler (e) {
		e.preventDefault();
			 var Item = [...dataArray,task];
			 setArray(Item); 
			 
	}

	return (
	<div id="main">
		<h1>To do List</h1>
		<form onSubmit={submitHandler}>
		<input type="textarea" value={task} onChange={inputValue}/>
		<button type="submit">ADD TASK </button>
		</form>
		<ul>
		{dataArray.map((data,i)=>{
			return <ShowData i={i} value={data}/>
		})}
		</ul>
		</div>
	
	);
}


export default App;
