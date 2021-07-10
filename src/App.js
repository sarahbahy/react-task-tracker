import { useState,useEffect } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  // const [tasks, setTasks] = useState([
  //   {
  //     id:1,
  //     text:'doctor appointment',
  //     day:'at 10 am, 10 june 2021',
  //     reminder:true
      
  //   },
  //   {
  //     id:2,
  //     text:'meeting',
  //     day:'at 3 pm, 11 june 2021',
  //     reminder:true
  //   },
  //   {
  //     id:3,
  //     text:'shopping',
  //     day:' at 9 pm, 11 june 2021',
  //     reminder:true
  //   }
  // ]);
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
      const getTasks = async()=>{
        const tasksFromServer = await fetchTasks();
        setTasks(tasksFromServer)
      }
      getTasks()
  },[])
  //fetch tasks
  const fetchTasks = async()=>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json()
    return data
  }
  //fetch task
  const fetchTask = async(id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json()
    return data
  }
  const addTask =async(task)=>{
    const res = await fetch('http://localhost:5000/tasks',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(task)
    });
    const data = await res.json()
    const id = Math.floor(Math.random()*10000)+1
    const newtask = {id , ...data} 
    console.log(newtask)
    setTasks([...tasks,newtask])
  }
  const deleteTask = async(id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'});
    setTasks(tasks.filter((task)=>task.id !==id ))
  }
  const toggleReminder =async(id)=>{
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder:!taskToToggle.reminder} 
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(updTask)
    });
    const data = await res.json()
    setTasks(tasks.map((task)=>task.id ===id? {...task, reminder: data.reminder} :task ))
  }
  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)}  showAdd={showAddTask}/>
      {tasks.length> 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ):(
        <h4>No tasks to show</h4>
      )
      
      }
      {showAddTask && <AddTask onAdd={addTask}/>}
    </div>
  );
}

export default App;
