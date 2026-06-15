import React from 'react';
import TicketForm from './Component/TicketForm';
import TicketList from './Component/TicketList';

function App(){
  return(
    <div className='App'>
      <center><h1>Ticket Management System</h1></center>
      <TicketForm />
      <TicketList />
    </div>
  );
}
export default App;
