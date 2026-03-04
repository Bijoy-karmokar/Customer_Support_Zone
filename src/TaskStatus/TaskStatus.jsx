import React from "react";

const TaskStatus = ({resolved, taskAdd,handleResolved }) => {
  // console.log(taskAdd);

  return (
    <div>
      <h2 className="text-4xl font-semibold">Task Status</h2>
     
      <div className="mt-8">
        {
        taskAdd.length===0 ?   <p className="text-lg text-gray-600 mt-6">
        Select a ticket to add to Task status
      </p> : <>
          <div className="space-y-3">
        {taskAdd.map((task) => (
          <div className="shadow-sm p-4 space-y-3 rounded-lg" key={task.id}>
            <h3 className="text-xl font-semibold">{task.title}</h3>
            <button 
            onClick={()=>handleResolved(task.id)}
              className="relative rounded cursor-pointer w-full px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Complete</span>
            </button>
          </div>
        ))}
      </div>
      </>
        }
      </div>
    
      <div className="my-10">
        <h2 className="text-xl font-semibold mb-3">Resolved Task</h2>
        {
          resolved > 0 ?  <p className="shadow-sm p-3 font-medium bg-blue-100 rounded-lg">Incorrect Billing Address.</p> : <p className="text-gray-600">No Resolved tasks yet</p>
        }
      </div>
    </div>
  );
};

export default TaskStatus;
