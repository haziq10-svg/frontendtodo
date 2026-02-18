import axios from "axios";

let apiData = "https://backendtodo-production-388e.up.railway.app"
export async function submitData(task , date){
    
    try{
        let connect = await axios.post(`${apiData}/newtask` ,{
            id : crypto.randomUUID(),
            task :task,
            date :date
        })
        alert(connect.data)
        return
    }
    catch(error){
        if(error.response){
            alert(error.response.status)
            return
        }
    }
}

export async function deleteTodo(id){
    try{
        let connect = await axios.delete(`${apiData}/deletetodo` ,{
            data : {
                id : id
            }
        })
        alert(connect.data)
        return
    }catch(error){
        if(error.response){
            alert(error.response.status)
            return
        }
    }
}

export async function finishTodo(id , date ,task){
    try{
        let connect = await axios.post(`${apiData}/finishtask` ,{
            id : id,
            date : date,
            task:task
        })
        alert(connect.data)
    }
    catch(error){
        if(error.response){
            alert(error.response.status)
        }
    }
}

export async function deleteFinished(id) {
    try{
        let connect = await axios.delete(`${apiData}/deletefinish` ,{
            data : {
                id :id
            }
        })
        alert(connect.data)

    }
    catch(error){
        if(error.response){
            alert(error.response.status)
        }
    }
    
}