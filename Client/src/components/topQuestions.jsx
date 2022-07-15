// Import Libraries and Data
import React, {useState, useEffect} from 'react';



export const TopQuestions = (props) => {
  
  /*
  ========================================================================================
  All States:
      States                        Discription
    options          --->   This State extract options Data list
    selectedOption   --->   This State extract particular options list of a given question.
    selectedIndex    --->   This State extract index of particular question
  =========================================================================================
  */
  const [options, setOption] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedIndex , setSelectedIndex] = useState('')

  // Effect for states
  useEffect(() => {
    if(props.data2)
     {
        setOption(props.data2);
      }
  }, [props.data2])
  

/*
==============================================================
  Onlclick Function for matching the particluar question's 
  option_id to ids of option data list and extracting options 
  that related to that question from options data list.
==============================================================
  */

  const handleOption = (d , index) => { 
    setSelectedIndex(index)
    for (let i = 0; i < options.length; i++) {
      if(d.option[0]  === options[i]._id) {
        setSelectedOption(options[i].option_text);
        break;
    }}
}

  return (
    <div id='topQuestions'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Top Questions</h2>
        </div>
        <div className='row'>
          {/*
            ==============================================
              Mapping through Question's Data
            ==============================================
          */}
          {props.data 
            ? props.data.map((d,i)=>{
              return(
                <>
                <section className="faq-container">
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
      </div>
    </div>
     
  )
}
