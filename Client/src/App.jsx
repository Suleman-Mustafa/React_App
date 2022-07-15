/*
  Imports
*/
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Disciplines } from "./components/disciplines";
import { About } from "./components/about";
import { ExaminationTraning  } from "./components/examination_Traning ";
import { Gallery } from "./components/gallery";
import { TopQuestions } from "./components/topQuestions";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";



/*
  Scrolling
*/
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  /*
   All States
    landingpageData State    --->   Landing Page Data
    questionData State       --->   Question's Data
    optionsdata  State       --->   Options's Data
    disciplineData  State    --->   Discipline's Data

   */
  const [landingPageData, setLandingPageData] = useState({});
  const [disciplineData, setdisciplineData] = useState({});
  const [optionsdata, setoptionsdata] = useState({});
  const [questiondata, setquestiondata] = useState({});
  
/* 
  Discipline Api 
  fetching Data from discipline API
*/
  async function fetchdisciplineData() {
    try {
      const res = await axios.get("http://localhost:3002/discipline");
      setdisciplineData(res);
    } catch (err) {
      console.log(err);
    }
  }

/* 
  Options Api 
  fetching Data from Options API
*/

  async function fetchoptionData() {
    try {
      const res = await axios.get("http://localhost:3002/options");
      setoptionsdata(res);
    } catch (err) {
      console.log(err);
    }
  }

/* 
  Questions Api 
  fetching Data from Question API
*/
  async function fetchquestionData() {
    try {
      const res = await axios.get("http://localhost:3002/question");
      setquestiondata(res);
    } catch (err) {
      console.log(err);
    }
  }

// Effect For All States
  useEffect(() => {
    fetchdisciplineData();
    fetchoptionData();
    fetchquestionData();
    setLandingPageData(JsonData);
  }, []);

// Render Function
  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Disciplines data={disciplineData ? disciplineData.data : null} 
                   data2={questiondata ?  questiondata.data : null}
                   data3={optionsdata ?  optionsdata.data : null} />
      <About  />
      <ExaminationTraning  data={landingPageData.ExaminationTraning} />
      <Gallery data={landingPageData.Gallery}/>
      <TopQuestions data={questiondata.data} data2={optionsdata.data}  />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
