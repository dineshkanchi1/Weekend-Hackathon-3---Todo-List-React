import React from "react";
import "./../styles/App.css";

function App() {
  const [taskList, setTaskList] = React.useState([]);
  const onAddBtn = () => {
    let textContainer = document.getElementById("task");
    let text = textContainer.value;
    if (text === "") return;
    textContainer.value = "";
    let list = [...taskList];
    list.push({ text: text, edit: false });
    setTaskList(list);
  };
  const onEditBtn = (index) => {
    let list = [...taskList];
    list[index].edit = true;
    setTaskList(list);
  };
  const onSaveBtn = (index) => {
    let list = [...taskList];
    list[index].edit = false;
    let textContainer = document.getElementById("edit");
    let text = textContainer.value;
    if (text === "") return;
    list[index].text = text;
    setTaskList(list);
  };
  const onDeleteBtn = (index) => {
    let list = [...taskList];
    list.splice(index, 1);
    setTaskList(list);
  };
  return (
    <div id="main">
      <h1>Todo List</h1>
      <input type="text" id="task" />
      <button id="btn" onClick={onAddBtn}>
        Add
      </button>
      <ol>
        {taskList.map((el, index) => (
          <li className="list" key={index}>
            {el.text}
            <button className="edit" onClick={() => onEditBtn(index)}>
              Edit
            </button>
            <button className="delete" onClick={() => onDeleteBtn(index)}>
              Delete
            </button>
            {el.edit && (
              <>
                <input type="text" id="edit" className="editTask" />
                <button
                  id="save"
                  className="saveTask"
                  onClick={() => onSaveBtn(index)}
                >
                  Save
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
