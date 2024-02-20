// import React,{ useState , useEffect} from "react";

// const Form = () => {
//     const [task,setTask]= useState("");
//     const [list,setList]= useState([]);

    


// function sumbitTask(e){
    
//         if (e.key === "Enter"){
//             setList(list.concat({ label: task, done: false }))
//             setTask("")
//             console.log(task);
//         }
    
// }
// function crearUsuario() {
//   fetch("https://playground.4geeks.com/apis/fake/todos/user/frank1923",{
//     method:'POST',
//     headers:{ "Content-Type" : "application/json"
// },
// body: JSON.stringify([])
  

//   })

//   .then((response)=>response.json())
//   .then((data)=>console.log(data))
//   .catch((error)=>console.log(error))
  
// }

// function getTodoList() {
//   fetch("https://playground.4geeks.com/apis/fake/todos/user/frank1923")
//   .then((response)=>{
//   if (response === 404) {
//     crearUsuario()
//   }
//   return response.json()})
  
//   .then((data)=>setList(data))
//   .catch((error)=>console.log(error))

   
// }

// // function crearUpdateTask() {
// //   fetch('https://playground.4geeks.com/apis/fake/todos/user/frank1923',{
// //     method:'PUT',
// //     headers:{ "Content-Type" : "application/json"
// // },
// // body: JSON.stringify(list)
  

// //   })

// //   .then((response)=>response.json())
// //   .then((data)=>console.log(data))
// //   .catch((error)=>console.log(error))
  
// // }

// function crearUpdateTask() {
//   fetch ('https://playground.4geeks.com/apis/fake/todos/user/frank1923', {
//   method: 'PUT',
//   body: JSON.stringify(list),
//   headers: { 'Content-Type': "application/json"}
// })
   
//   .then((response)=>response.json())
//   .then((data)=>console.log(data))
//   .catch((error)=>console.log(error)) 
  
// }
// useEffect(()=>{getTodoList()},[]);
// useEffect(()=>{crearUpdateTask()},[list]);





// console.log(list);
 
// return(
//     <>
     
//     <div className="mb-3">
//       <label htmlFor="exampleInputEmail1" className="form-label">Formulario Controlado</label>
//       <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setTask(e.target.value)} onKeyDown={sumbitTask } value={task}/>
//       </div>
//       <ul>
//       {list.map((item, index) => (
//             <li key={index}>{item.label} <a href="#" className="eliminar"  onClick={()=> setList(list.filter((item,myIndex)=> index !== myIndex ))}>x</a></li>
           
//           ))}
//       </ul>
    
//     </>
//     )
    
// }



// export default Form

import React, { useState, useEffect } from 'react'
// import "./index.css"
import whiteGrunge from "../../img/white-grunge.jpg"


export const Task = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    console.log(taskList)

    function createList(e) {
        if (e.key === "Enter") {
            setTaskList(taskList.concat({ label: task, done: false }));
            setTask("");
        }
    }

    function getTodoList() {

        fetch("https://playground.4geeks.com/apis/fake/todos/user/Osian1981")
            .then((response) => {
                if (response.status === 404) {
                    createNewUser()
                }
                return response.json()
            })
            .then((data) => setTaskList(data))
            .catch((error) => console.log(error))
    }



    function createNewUser() {
        fetch("https://playground.4geeks.com/apis/fake/todos/user/Osian1981", {
            method: 'POST',
            body: JSON.stringify([]),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error))
    }

    function createUpdateTask() {
        fetch("https://playground.4geeks.com/apis/fake/todos/user/Osian1981", {
            method: 'PUT',
            body: JSON.stringify(taskList),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error))

    }

    useEffect(() => { getTodoList() }, [])
    useEffect(() => { createUpdateTask() }, [taskList])


    return (
        <div className='container d-flex  fs-1' style={{ background: `url(${whiteGrunge})` }}><span className='todos'>todos</span>
            <div className='input-div'>
                <input type="text" className="input-task"
                    placeholder="what needs to be done?" onKeyDown={createList}
                    onChange={(e) => setTask(e.target.value)} value={task} />

                <div>
                    <ul>
                        {taskList.map((item, index) =>

                        (<li className='listado' key={index}>
                            {item.label}<a className='close-btn' href='#'
                                onClick={() =>
                                    setTaskList(taskList.filter((item, myIndex) =>
                                        index !== myIndex))}>x</a>
                        </li>))}

                        <div className='bottomCard'>{taskList.length} items left</div>




                    </ul>

                </div>

            </div>
            <div className='bottomCard1'></div>
            <div className='bottomCard2'></div>
        </div>







    )

}

export default Task














