import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTicket/CustomerTickets'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import TaskStatus from './TaskStatus/TaskStatus'
import { toast } from 'react-toastify'

const fetchTickets = async()=>{
    const res = await fetch("/tickets.json");
    return res.json();
}

// console.log(ticketsPromise);
const ticketsPromise = fetchTickets();

function App() {

  const [progress,setProgress] = useState(0);
  const [taskAdd,setTaskAdd] = useState([]);
  const [resolved,setResolved] = useState(0);

  const handleProgress=(ticket)=>{
    // console.log(id);
    setProgress((prev)=>prev + 1);
    setTaskAdd([...taskAdd,ticket]);
    toast.success("Task Status added successfully.");
  }

  const handleResolved =(id)=>{
    setResolved((prev)=>prev + 1);
    setProgress((prev)=> prev - 1);
    const filterTask = taskAdd.filter(task=>task.id !== id);
    setTaskAdd(filterTask); 
    toast.success("Task Status removed successfully.")
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner progress={progress} resolved={resolved}></Banner>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-5 w-11/12 mx-auto my-10'>
      <div className="col-span-9">
        <CustomerTickets taskAdd={taskAdd} handleProgress={handleProgress} ticketsPromise={ticketsPromise}></CustomerTickets>
      </div> 
      <div className="col-span-3">
        <TaskStatus resolved={resolved} handleResolved={handleResolved} taskAdd={taskAdd}></TaskStatus>
      </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
