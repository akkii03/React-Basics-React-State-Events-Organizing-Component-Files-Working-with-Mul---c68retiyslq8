import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const [hideInput, setHideInput] = useState(true);
  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState(false);
  const [classBtn,setClassBtn] = useState("edit");

  function inputHandel(e) {
    setTask(e.target.value);
  }

  function clickHandel() {
    if(task=="") {
      return;
    }
    setTaskArr([
      ...taskArr,
      { id: new Date().getTime().toString(), input: task },
    ]);
    setTask("");

  }


  return (
    <div id="main">
      <input type="textarea" id="task" onChange={inputHandel} value={task} />
      <button id="btn" onClick={clickHandel}>
        ADD
      </button>
      <ul>
        {taskArr.map((item) => {
          return (
            <li className="list" key={item.id} id={item.id}>
              {item.id == editId && !hideInput && (
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}/>
                
				
              )}
              {(item.id !== editId || hideInput) && <span>{item.input}</span>}

              <button
                className={hideInput?"editTask":"saveTask"}
                  onClick={ () => {
                 
                  setEditValue(item.input);
                  setHideInput(!hideInput);
                  setEditId(item.id);
<<<<<<< HEAD
                
=======
                  if(!hideInput) {
                    
		    setClassBtn("saveTask");
>>>>>>> 2c5a941c0162f4d0c602cf67678ea16c7a020a7a
                    if(editValue=="") {
                      return ;
                    }
                 
                      setTaskArr(
                        taskArr.map((ele)=>{
                          if(ele.id==editId) {
                            return {...ele,input:editValue};
                          }
                          
                            return ele;
                          
                        })
                      )

<<<<<<< HEAD
                  
                 
=======
                  }
                  else if(hideInput) {
                    setClassBtn("editTask");
                  }
>>>>>>> 2c5a941c0162f4d0c602cf67678ea16c7a020a7a
                  
                  
                }}
              
              >
             
                { item.id===editId && !hideInput ? "SAVE" : "EDIT" }
              </button>

              <button
                className="delete"
                onClick={() => {
                  setTaskArr(taskArr.filter((value) => value.id != item.id));
                }}
              >
                DELETE
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
