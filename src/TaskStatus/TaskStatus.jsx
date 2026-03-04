import React from 'react';

const TaskStatus = () => {
    return (
        <div>
            <h2 className='text-4xl font-semibold'>Task Status</h2>
            <p className='text-lg text-gray-600 mt-6'>Select a ticket to add to Task status</p>
            <div className='my-10'>
                <h2 className='text-xl font-semibold'>Resolved Task</h2>
                <p className='text-gray-600'>No Resolved tasks yet</p>
            </div>
        </div>
    );
};

export default TaskStatus;