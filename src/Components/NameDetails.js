import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NameDetails.css";
import { TextField, FormControl, FormLabel, RadioGroup, Radio, FormControlLabel, Button } from "@mui/material"; // Import the required components from MUI

function NameDetails() {
  const [data, setData] = useState({
    name: "",
    email: "", // Add email field to the state
    gender: "",
  });
  const history = useHistory();

  const handleChange = (event) => {
    let updatedData = { ...data };
    updatedData[event.target.name] = event.target.value;
    setData(updatedData);
  };

  const handleSubmit = () => {
    const { name, email, gender } = data;
    if (name.trim() !== "" && email.trim() !== "" && gender.trim() !== "") {
      // Do any processing with the name, age, and gender here if needed
      // For simplicity, we'll just navigate to the quiz page
      history.push('/quiz-categories');
    } else {
      alert("Please fill in all fields to proceed!");
    }
  };

  return (
    <div className="container">
    <h2>Enter Your Details to Start the Quiz</h2>
    <div className="form-group">
      <FormLabel>Name:</FormLabel>
      <TextField required style={{ width: '100%', marginTop: 12 }} id="filled-basic"
        name="name" value={data.name} onChange={handleChange}
        variant="filled" />
    </div>

    <div className="form-group">
      <FormLabel>Email:</FormLabel>
      <TextField required style={{ width: '100%', marginTop: 12 }} id="filled-basic"
        name="email" value={data.email} onChange={handleChange}
        variant="filled" />
    </div>

    <div className="form-group">
      <FormLabel>Gender:</FormLabel>
      <FormControl style={{ marginTop: 12 }}>
        <RadioGroup aria-label="gender" name="gender" value={data.gender} onChange={handleChange}>
          <div style={{ display: 'flex' }}>
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Others" />
          </div>
        </RadioGroup>
      </FormControl>
    </div>

      <div style={{marginTop:12}}>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div>
    </div>
  );
}

export default NameDetails;
