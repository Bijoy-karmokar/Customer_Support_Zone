import React, { use } from 'react';
import CustomerTicketCard from './CustomerTicketCard';



const CustomerTickets = ({ticketsPromise,handleProgress}) => {
    const tickets = use(ticketsPromise);
    // console.log(tickets);
    
    return (
        <div>
            <h2 className='text-4xl font-semibold'>Customer Tickets</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                  tickets.map(ticket=><CustomerTicketCard handleProgress={handleProgress} key={ticket.id} ticket={ticket}></CustomerTicketCard>)
                }
            </div>
        </div>
    );
};

export default CustomerTickets;