import "./todo.css"
import './media.css'
import { useState } from "react"
import { submitData } from "../../api/api"
import { deleteTodo } from "../../api/api"
import { finishTodo } from "../../api/api"
import { deleteFinished } from "../../api/api"


export function Todo({userData , finishedTodo ,getData ,getDataFinish}) {
    let [userTodo, setuserTodo] = useState("")
    let [userDate, setuserDate] = useState("")

    function userTodoList(event) {
        setuserTodo(event.target.value)
    }

    function userTodoDate(event) {
        setuserDate(event.target.value)
    }

    async function sentButton() {
        await submitData(userTodo , userDate)
        getData()
        setuserDate("")
        setuserTodo("")
        
    }

    return (
        <div className="grid">
            <div className="top">
                <p className="b1">Todo List</p>
            </div>
            <div className="bottomTodo">
                <div className="bottom">
                    <input value={userTodo} onChange={userTodoList} type="text" placeholder="Enter Todo"></input>
                    <input value={userDate}onChange={userTodoDate} type="date"></input>
                    <button onClick={sentButton} className="button1">Submit</button>
                </div>
                {userData.map((items) => {
                    return (
                        <div key={items.id} className="tododisplay">
                            <p className="todo1 , a1">{items.task}</p>
                            <p className="todo2 , a1">{items.date}</p>
                            <button onClick={async()=>{
                                await deleteTodo(items.id)
                                getData()
                            }} className="button1">Delete</button>
                            <button onClick={async()=>{
                                await finishTodo(items.id , items.date , items.task)
                                getDataFinish()
                            }} className="button1">Finish</button>
                        </div>
                    )
                })}

                <div className="finishtodo">
                    <div className="topper">
                        <p className="b1">Finished</p>
                    </div>
                     {finishedTodo.map((items)=>{
                    return(
                        <div key={items.id} className="botter">
                        <p className="a1">{items.task}</p>
                        <button onClick={async()=>{
                            await deleteFinished(items.id)
                            getDataFinish()
                        }} className="button1">Delete</button>
                    </div>
                    )
                })}  
                </div>

            </div>

        </div>
    )
}