import { Todo } from './main/todo'
import './App.css'
import axios from 'axios'
import { useState,useEffect } from 'react'

function App() {
  let [userData , setuserData] = useState([])
  let [finishedTodo ,setfinishedTodo] = useState([])

  async function getData(){
    try{
      let connect = await axios.get("https://backendtodo-production-388e.up.railway.app/")
      setuserData(connect.data)
    }
    catch(error){
      setuserData(error.response.status)
    }
  }

  useEffect(()=>{
    getData()
    getDataFinish()
  },[])


  async function getDataFinish(){
    try{
      let connect = await axios.get("https://backendtodo-production-388e.up.railway.app/finished")
      setfinishedTodo(connect.data)
    }
    catch(error){
      if(error.response){
        setfinishedTodo(error.response.status)
      }
    }
  }

  return(
    <div>
      <Todo getDataFinish={getDataFinish} getData={getData} userData={userData} finishedTodo={finishedTodo}></Todo>
    </div>
  )
}

export default App
