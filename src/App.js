import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer'
import Home from "./Pages/Home/Home";
import Result from "./Pages/Result/Result";
import Quiz from "./Pages/Quiz/Quiz";
import { useState } from "react";
import axios from "axios";

function App() {
  const[name,setName]=useState("");
  const[questions,setQuestions] = useState();
  const[score,setScore]=useState(0);

  const fetchQuestions = async (category="", difficulty="") => {
    const {data} = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestions(data.results);
  };


 return(
    <BrowserRouter>
    <div className="app" style={{backgroundImage:"url(./bg.webp)"}}>
      <Header/> 
      <Routes>
      <Route excat path="/"  element={<Home 
            name={name} 
            setName={setName}  
            fetchQuestions={fetchQuestions}/>}  
      />
      <Route  path="/Quiz" element={<Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            />} 
      />      
      <Route path="/Result" element={<Result 
            name={name} 
            score={score}/>} />    
      </Routes>    
        
    </div>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
