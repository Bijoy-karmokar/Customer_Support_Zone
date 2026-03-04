import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';

const CustomerTicketCard = ({ticket,handleProgress}) => {
    const {id,title,description,customer,priority,status,createdAt} = ticket;
    
    return (
        <div onClick={()=>handleProgress(ticket)} className='shadow-lg p-4 rounded-lg space-y-2 mt-6 cursor-pointer'>
            <div className='flex items-center justify-between'>
                <h3 className='text-xl font-medium'>{title}</h3>
                 <p className='badge badge-success'>
                      <svg className="size-[1em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor" strokeLinejoin="miter" strokeLinecap="butt"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></circle><polyline points="7 13 10 16 17 8" fill="none" stroke="" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"></polyline></g></svg>
                    {status}
                    </p>
            </div>
             <div>
                <p className='text-lg'>{description}</p>
             </div>
             <div className='flex justify-between items-center '>
                 <div className='flex items-center justify-center gap-2 text-md'>
                    <h4>#{id}</h4>
                    <p className='text-red-500'>{priority}</p>
                 </div>
                 <div className='flex items-center justify-center gap-2 text-md'>
                     <h3>{customer}</h3>
                     <p className='flex items-center gap-1'><CiCalendarDate />{createdAt}</p>
                 </div>
             </div>
        </div>
    );
};

export default CustomerTicketCard;