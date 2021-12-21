
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddNewKalash = (props) => {

    const closeForm = () => {
        props.onClose();
    }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [roomType, setRoomType] = useState('');

    return (
        // <div class="form-popup" id="myForm">
        <form class="form-container">    <div className='title'> Add New kalash</div>

            <label ><b>Type</b></label>
            <input type="text" placeholder="Enter Kalash type" required />

            <label ><b>Count</b></label>
            <input type="text" required />

          
            <label ><b>From Date</b></label>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <label ><b>To Date</b></label>
            <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
          

            <div style={{color:"#6c4931"}}> Aawas package With kalash</div>

            <label ><b>Room Type</b></label>
            <select className="form-control" name="roomType" value={roomType} onChange={(event) => setRoomType(event)} style={{width:"100%" ,height:""}}>
              <option key="Deluxe" value="Deluxe">Deluxe</option>
              <option  key="Economic" value="Economic">Economic</option>
              <option  key="Hut" value="Hut">Hut</option>
            </select>

            <label ><b>Days</b></label>
            <input type="text" required />

            <div class="row" style={{marginTop:"10px"}}>
            <button type="btn" class="btn">Add Kalash</button>
            <button type="btn" class="btn cancel" onClick={closeForm}>Close</button>
            </div>
        </form>
        // </div>

    );
};

export default AddNewKalash

