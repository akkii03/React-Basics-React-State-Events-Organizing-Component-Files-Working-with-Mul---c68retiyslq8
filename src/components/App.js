import React, { useState } from "react";
import "./../styles/App.css";

function App() {
  const [task, setTask] = useState("");
  const [taskArr, setTaskArr] = useState([]);
  const [hideInput, setHideInput] = useState(true);
  const [editValue, setEditValue] = useState("");
  const [editId, setEditId] = useState(false);
  function inputHandel(e) {
    setTask(e.target.value);
  }

  function clickHandel() {
    setTaskArr([
      ...taskArr,
      { id: new Date().getTime().toString(), input: task },
    ]);
    setTask("");
  }

  function handelEdit() {
    console.log("edit btn clicked");
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
                  onChange={(e) => setEditValue(e.target.value)}>
                </input>
				
              )}
              {(item.id !== editId || hideInput) && <span>{item.input}</span>}

              <button
                className="edit"
                onClick={() => {
                  setEditValue(item.input);
                  setHideInput(!hideInput);
                  setEditId(item.id);
                }}
              >
                {hideInput ? "EDIT" : "SAVE"}
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
