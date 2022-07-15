/*  
==============================================
Component Header Show Header Title and 
Decription about Comapany 
============================================== 
*/



import React from 'react';
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                    {/*
                      ==============================================
                        Mapping Title From data
                      ==============================================
                    */}
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                  {/*
                    ==============================================
                      Mapping Descrition About Website From data
                    ==============================================
                  */}
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href='#disciplines'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
