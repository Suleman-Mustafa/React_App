//  Import Libraries and Data
import React from "react"
import { disciplines } from '../data/disciplines';
import { useState, useEffect } from 'react';
import {About} from "../components/about";
 

/*  
==============================================
Component Discipline Shows all 
Disciplines On React App. 
============================================== 
*/


export const Disciplines = (props) => {



 
/*
========================================================================================
All States:
    States                        Discription
  questions           --->   This State extract Questions Data list
  selectedQuestions   --->   This State extract particular Questions list of a given discipline.
  selectedIndex       --->   This State extract index of particular discipline
=========================================================================================
*/
    const [questions, setquestions] = useState([]);
    const [optionsData, setoptionsData] = useState([]);
    const [selectedQuestions, setselectedQuestions] = useState([]);
    const [selectedOptions, setselectedOptions] = useState([]);
    const [selectedIndex , setSelectedIndex] = useState('');


// Use Effect for all states

 useEffect(() => {
   try {
    if (props.data3 !== undefined) {
     setoptionsData(props.data3)
    }
   } catch (error) {
    console.log(error);
   }
 }, [props.data3]);

  useEffect(() => {
    if (props.data2) {
      setquestions(props.data2)
      
    }
  }, [props.data2]);



/*
==============================================================
  Onlclick Function for matching the particluar discipline 
  id to ids of questions data list and extracting questions 
  that are related to that particular discipline from discipline data list.
==============================================================
*/


  const handleQuestion = (d, index) => { 
    // Reset Questions
    setselectedQuestions([])
    setSelectedIndex(index)
    for (let i = 0; i < questions.length; i++) { 
      if( questions[i].q_discipline[0] === d._id) {
        setselectedQuestions(selectedQuestions => [...selectedQuestions, questions[i].q_name]);
        for (let j = 0; j < optionsData.length; j++) {
          if (questions[i].option[0] === optionsData[j]._id) {
            setselectedOptions(selectedOptions => [...selectedOptions , optionsData[j].option_text]);
          }
        }  
      }  
  }
}

  return (
    <div id="disciplines" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Disciplines</h2>
        </div>
        <div className="row">
          {/* 
            ==============================================
            Extracting through discipline API Data 
            Listing All Discipline Fields.
            ==============================================
          */}
          {props.data
          ? props.data.map((dis, i) => (
                <div
                  key={`${disciplines[i].title}-${i}`}
                  className="col-xs-6 col-md-3">
                  <i className={disciplines[i].icon}></i>
                  <a href="#about"><h3 onClick={ () => handleQuestion(dis, i)}>{dis.dis_name} </h3></a>
                  <p>{dis.dis_desc}</p>
              </div>
              ))
          : 'loading....'  }
        </div>
      </div>
      <div className="#about">
        <div className="questions">
          <About data={questions} data2={optionsData}/>
        </div>
        
      </div>
    </div>
    
  );
};
