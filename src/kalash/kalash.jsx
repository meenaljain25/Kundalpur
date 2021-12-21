
import React, { useState } from 'react';
import AddNewKalash from './addNewKalash'
import Addimg from '../Images/np-add-1776281-000000.png'
import Manageimg from '../Images/np-edit-calendar-3256398-000000.png'
import DynamicTable from '../components/dynamicTable'
import PopUp from '../components/popup'

const Kalash = () => {

    const [showAddkalash, setshowAddkalash] = useState(false);

    const tableData = [
        {'Kalash Type': 'Divya Kalash', '20 Dec 21': '10/10', '21 Dec 21': '10/10' ,'22 Dec 21': '10/10','23 Dec 21': '10/10','24 Dec 21': '10/10','25 Dec 21': '10/10'},
        {'Kalash Type': 'Rajat Kalash', '20 Dec 21': '10/10', '21 Dec 21': '10/10' ,'22 Dec 21': '10/10','23 Dec 21': '10/10','24 Dec 21': '10/10','25 Dec 21': '10/10'},
        {'Kalash Type': 'Tamra Kalash', '20 Dec 21': '10/10', '21 Dec 21': '10/10' ,'22 Dec 21': '10/10','23 Dec 21': '10/10','24 Dec 21': '10/10','25 Dec 21': '10/10'},
        {'Kalash Type': 'Divya Kalash', '20 Dec 21': '10/10', '21 Dec 21': '10/10' ,'22 Dec 21': '10/10','23 Dec 21': '10/10','24 Dec 21': '10/10','25 Dec 21': '10/10'},
        {'Kalash Type': 'Divya Kalash', '20 Dec 21': '10/10', '21 Dec 21': '10/10' ,'22 Dec 21': '10/10','23 Dec 21': '10/10','24 Dec 21': '10/10','25 Dec 21': '10/10'},
        {'Kalash Type': 'Divya Kalash', '20 Dec 21': '10/10', '21 Dec 21': '10/10' ,'22 Dec 21': '10/10','23 Dec 21': '10/10','24 Dec 21': '10/10','25 Dec 21': '10/10'},
        {'Kalash Type': 'Divya Kalash', '20 Dec 21': '10/10', '21 Dec 21': '10/10' ,'22 Dec 21': '10/10','23 Dec 21': '10/10','24 Dec 21': '10/10','25 Dec 21': '10/10'},
    ]

   

    const  openAddkalash = () => {      
        setshowAddkalash(!showAddkalash);
       };

       const bookNew =()=>{
           alert('hello');
       }
    return (
        <div >
            <div style={{ float: "right", padding: "2px" }} >
                <button className='btn' type="button" onClick={openAddkalash}><img src={Addimg} />Add Kalash</button>
                <button className='btn' type="button" onClick={bookNew}><img src={Manageimg} />Book New</button>
                <button className='btn' type="button"><img src={Manageimg} />Manage Booking</button>
            </div>
            <div class="row">
            <DynamicTable data={tableData}/>
      
            </div>
            {showAddkalash? <PopUp toggle={openAddkalash} ><AddNewKalash onClose={openAddkalash}/>  </PopUp>: null}

        </div>); 
};

export default Kalash


