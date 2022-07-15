
/*  
==============================================
Component ExaminationTraning  Shows all 
Examiantion Types On React App. 
============================================== 
*/


import React from 'react';
export const ExaminationTraning = (props) => {
  return (
    <div id='examination_Traning' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Exam Types</h2>
          <p>
    
          </p>
        </div>
        <div className='row'>
          {/*
          ==============================================
            Mapping Examination Types
          ==============================================
          */}
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
