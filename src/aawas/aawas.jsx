
import * as React from 'react';
import Addimg from '../Images/np-add-1776281-000000.png'
import Manageimg from '../Images/np-edit-calendar-3256398-000000.png'

const Aawas = () =>{

    const  openAddRooms = () => {
      
    }



return (
<div> 
<div style={{ float: "right", padding: "2px" }}>
                <button className='btn' type="button" onClick={openAddRooms}><img src={Addimg}  />Add Rooms</button>
                <button className='btn' type="button"><img src={Manageimg} style={{padding:"2px"}} />Book New</button>
                <button className='btn' type="button"><img src={Manageimg}  style={{padding:"2px"}}/>Edit Booking</button>
                <button className='btn' type="button"><img src={Manageimg}  style={{padding:"2px"}}/>Check In</button>
                <button className='btn' type="button"><img src={Manageimg}  style={{padding:"2px"}}/>Check Out</button>
                <button className='btn' type="button" style={{width:"auto"}}><img src={Manageimg}  style={{padding:"2px"}}/>User Registration</button>
            </div>
    </div>
    );};

export default  Aawas 
