import React from "react";
import "./../styles/App.css";

function App() {
  // const [taskList, setTaskList] = React.useState([]);
  // const onAddBtn = () => {
  //   let textContainer = document.getElementById("task");
  //   let text = textContainer.value;
  //   if (text === "") return;
  //   textContainer.value = "";
  //   let list = [...taskList];
  //   list.push({ text: text, edit: false });
  //   setTaskList(list);
  // };
  // const onEditBtn = (index) => {
  //   let list = [...taskList];
  //   list[index].edit = true;
  //   setTaskList(list);
  // };
  // const onSaveBtn = (index) => {
  //   let list = [...taskList];
  //   let textContainer = document.getElementById("edit");
  //   let text = textContainer.value;
  //   if (text === "") return;
  //   list[index].edit = false;
  //   list[index].text = text;
  //   setTaskList(list);
  // };
  // const onDeleteBtn = (index) => {
  //   let list = [...taskList];
  //   list.splice(index, 1);
  //   setTaskList(list);
  // };
  // return (
  //   <div id="main">
  //     <input type="text" id="task" />
  //     <button id="btn" onClick={onAddBtn}>
  //       Add
  //     </button>
  //     <ol>
  //       {taskList.map((el, index) => (
  //         <li className="list" key={index}>
  //           {el.text}
  //           <button className="edit" onClick={() => onEditBtn(index)}>
  //             Edit
  //           </button>
  //           <button className="delete" onClick={() => onDeleteBtn(index)}>
  //             Delete
  //           </button>
  //           {el.edit && (
  //             <>
  //               <input type="text" id="edit" className="editTask" />
  //               <button
  //                 id="save"
  //                 className="saveTask"
  //                 onClick={() => onSaveBtn(index)}
  //               >
  //                 Save
  //               </button>
  //             </>
  //           )}
  //         </li>
  //       ))}
  //     </ol>
  //   </div>
  // );
  const [data, setdata] = React.useState([]);
  function handleclick() {
    let val = document.getElementById("task").value;
    document.getElementById("task").value = "";
    if (val === "") return;
    let arr = [...data];
    let obj = { data1: val, show: false };
    arr.push(obj);
    setdata(arr);
  }
  function handleedit(i) {
    let temp = [...data];
    temp[i].show = true;
    setdata(temp);
  }
  function handledelete(index) {
    let temp = [...data];
    temp.splice(index, 1);
    setdata(temp);
  }
  function handlesave(index) {
    let temp = [...data];
    if (document.getElementById("ed").value === "") return;
    temp[index].show = false;
    temp[index].data1 = document.getElementById("ed").value;
    setdata(temp);
  }
  return (
    <div id="main">
      <input id="task" type="text"></input>
      <button id="btn" onClick={handleclick}>
        Add
      </button>
      <ol>
        {data.map((ele, index) => (
          <li key={index} className="list">
            {ele.data1}
            <button onClick={() => handleedit(index)} className="edit">
              edit
            </button>
            <button onClick={() => handledelete(index)} className="delete">
              delete
            </button>
            {ele.show === true ? (
              <>
                <input type="text" id="ed" className="editTask"></input>
                <button onClick={() => handlesave(index)} className="saveTask">
                  save
                </button>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
