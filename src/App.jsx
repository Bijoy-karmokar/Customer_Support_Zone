import './App.css'
import Banner from './components/Banner/Banner'
import CustomerTickets from './components/CustomerTicket/CustomerTickets'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import TaskStatus from './TaskStatus/TaskStatus'

const fetchTickets = async()=>{
    const res = await fetch("/tickets.json");
    return res.json();
}

// console.log(ticketsPromise);
const ticketsPromise = fetchTickets();

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-5 w-11/12 mx-auto my-10'>
      <div className="col-span-9">
        <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
      </div> 
      <div className="col-span-3">
        <TaskStatus></TaskStatus>
      </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
