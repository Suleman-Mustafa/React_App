import React from 'react';

/*  
==============================================
Component Navigation helps to Navigate through 
Menu Bar to Different Components On React App. 
============================================== 
*/


export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
          Hogskoleprovguiden
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              {/*
                ==============================================
                  Access  disciplines component From Menu Bar 
                ==============================================
              */}
              <a href='#disciplines' className='page-scroll'>
                Disciplines
              </a>
            </li>
            <li>
               {/*
                ==============================================
                  Access  about component From Menu Bar 
                ==============================================
              */}
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
               {/*
                ==============================================
                  Access  Examination Training component
                  From Menu Bar 
                ==============================================
              */}
              <a href='#examination_Traning' className='page-scroll'>
                Exam Types
              </a>
            </li>
            <li>
               {/*
                ==============================================
                  Access  Gallery component From Menu Bar 
                ==============================================
              */}
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
               {/*
                ==============================================
                  Access  Top Questions component From Menu Bar 
                ==============================================
              */}
              <a href='#topQuestions' className='page-scroll'>
                TopQuestions
              </a>
            </li>
            <li>
               {/*
                ==============================================
                  Access  Team component From Menu Bar 
                ==============================================
              */}
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
               {/*
                ==============================================
                  Access  Contact component From Menu Bar 
                ==============================================
              */}
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
