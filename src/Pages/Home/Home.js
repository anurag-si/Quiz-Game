import React, { useState } from 'react'
import "./home.css"
import {TextField, MenuItem, Button} from "@mui/material"
import Categories from "../../Data/Categories";
import {useNavigate} from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";

const Home = ({name,setName, fetchQuestions}) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error,setError] =useState(false);
 
  let navigate=useNavigate();


  const handleSubmit = () =>{
    if(!category || !difficulty || !name)
    {
      setError(true);
      return;
    }
    else{
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className='content'>
      <div className='settings'>
          <span style={{ fontSize:30 }}>Quiz Settings</span>

          <div className='settings__select'>

            {error && <ErrorMessage>Fill the fields</ErrorMessage>}
            <TextField
              style={{marginBottom: 25}}
              label="Enter your Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField 
              select
              label="Select Catefory"
              variant='outlined'
              style={{marginBottom: 30}}
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              {Categories.map((cat) =>(
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}  
              </TextField>   
              <TextField 
                select
                label="Select Difficulty"
                variant="outlined"
                style={{ marginBottom: 30}}
                onChange={(e) => setDifficulty(e.target.value)}
                value={difficulty}
              >
                <MenuItem 
                  key="Easy"
                  value="easy"
                >
                  Easy
                </MenuItem>
                <MenuItem 
                  key="Medium"
                  value="medium"
                >
                  Medium
                </MenuItem>
                <MenuItem
                  key="Hard"
                  value="hard"
                >
                  Hard
                </MenuItem>
              </TextField>       
              <Button variant="contained" color="primary" size="large" onClick={handleSubmit}>
                    Start Quiz
              </Button>
          </div>
      </div>
    </div>
  )
}

export default Home
