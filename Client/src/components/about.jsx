import React from 'react';
import  { useState, useEffect }  from "react";
import { Disciplines } from './disciplines';
export const About = (props) => {
  const [Questions, setQuestions] = useState([]);
  const [options, setOption] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedIndex , setSelectedIndex] = useState('')

  useEffect(() => {
    if (props.data) {
      setQuestions(props.data);
      setOption(props.data2);
    }
  }, [props.data]);


  const handleOption = (d , index) => { 
  setSelectedIndex(index)
  for (let i = 0; i < options.length; i++) {
    if(d.option[0]  === options[i]._id) {
      setSelectedOption(options[i].option_text);
      break;
  }}
}

   return(
    <div id="#about">
          {Questions 
            ? Questions.map((d,i)=>{
              return(
                <>
                <section className="faq-container ">
                  <div className="faq-one">
                    <h1 className="faq-page" onClick={ () => handleOption(d ,i)}>  {d.q_name}</h1>
                    <div className="faq-body" >
                    { i === selectedIndex ? 
                      <> 
                      <div className='options1'>
                        <ul  style = {{ listStyleType :"square"}}>
                          <li>{selectedOption[0]}</li> <br/>
                          <li>{selectedOption[1]}</li> 
                        </ul>
                      </div>
                      <div className='options'>
                        <ul  style = {{ listStyleType :"square"}}>
                          <li>{selectedOption[2]}</li><br/>
                          <li>{selectedOption[3]}</li> 
                        </ul>
                      </div>
                      </>
                    : ''}
                    </div>

                  </div>
                  <hr className="hr-line"></hr>
                </section>
              </>
              )

            })
            :
            'loading'
          }



  </div>





);}