import React from 'react'
import Navbar from './Components/Navbar'
import './style.css'
import bgc from '../Assets/Images/career.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import CareerTabs from './Components/CareerTabs'
import ScrollableTabsButtonVisible from './Components/CareerTabs'
import {useNavigate} from 'react-router-dom'

function Careers() {
  const navigate = useNavigate();
  var links = document.querySelectorAll('.toplist ul li');
    links.forEach(function (element) {
      element.addEventListener('click', function (e) {
        // PreventDefault to prevent redirect
        e.preventDefault();
        links.forEach(function (element) {
          element.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
    const carrerDiscription=()=>{
        navigate('/CareerDetails')
    }
  return (
    <div className='container-fluid m-0' id='container-fluid'>
      <Navbar/>
      <div className='row mb-5' id='rowcareer'>
        <div className='col-md-2'></div>
        <div className='col-md-4' id='centr' style={{justifyContent:'center',display:'flex',alignItems:'center'}}>
          <div>
          <h1 className='career-head'>Literally it does not mean anything. It is a sequence of words without a sense</h1><br/>
          <div className="upload-btn-wrapper">
            <button id="btnsc">Join Our Team</button>
            {/* <input type="file" name="myfile" /> */}
          </div>
          </div>
        </div>
        <div className='col-md-4' style={{justifyContent:'center',display:'flex',alignItems:'center'}}>
        <img className='img-fluid' src={bgc}/>
        </div>
        <div className='col-md-2'></div>
        </div>
        <div style={{width:300,height:100}}/>
        <div className='d-none d-lg-block'>
        <div className='row mt-5'>
          <div className='col-md-2'></div>
          <div className='col-md-4 toplist'>
            <h1 className='dep-head'>DEAPRTMENTS</h1>
            <ul className='deplist'>
              <li>All Departments[124]</li>
              <li>Administration[2]</li>
              <li>Business Development[3]</li>
              <li>Community Support[5]</li>
              <li>Data Science/Analytics[1]</li>
              <li>Data Science[1]</li>
              <li>Data Science[1]</li>
            </ul>
          </div>
          
          <div className='col-md-4'>
            <h1 className='Actv-head'>ACTIVE OPENING</h1>
            <div className='scrollDiv' id='style-3'>
              <div className='job-opp'>
                <h1 className='Desig-name'>Senior HR Manager</h1>
                <FontAwesomeIcon className='Desig-arrow' icon="fa-solid fa-arrow-right" onClick={carrerDiscription}/><br/>
                <p className='Desig-bio'>Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. </p>
              </div>
              <div className='job-opp'>
                <h1 className='Desig-name'>Senior HR Manager</h1>
                <FontAwesomeIcon className='Desig-arrow' icon="fa-solid fa-arrow-right" onClick={carrerDiscription}/><br/>
                <p className='Desig-bio'>Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. </p>
              </div>
              <div className='job-opp'>
                <h1 className='Desig-name'>Senior HR Manager</h1>
                <FontAwesomeIcon className='Desig-arrow' icon="fa-solid fa-arrow-right" onClick={carrerDiscription}/><br/>
                <p className='Desig-bio'>Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. </p>
              </div>
              <div className='job-opp'>
                <h1 className='Desig-name'>Senior HR Manager</h1>
                <FontAwesomeIcon className='Desig-arrow' icon="fa-solid fa-arrow-right" onClick={carrerDiscription}/><br/>
                <p className='Desig-bio'>Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. </p>
              </div>
              <div className='job-opp'>
                <h1 className='Desig-name'>Senior HR Manager</h1>
                <FontAwesomeIcon className='Desig-arrow' icon="fa-solid fa-arrow-right" onClick={carrerDiscription}/><br/>
                <p className='Desig-bio'>Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. </p>
              </div>
              <div className='job-opp'>
                <h1 className='Desig-name'>Senior HR Manager</h1>
                <FontAwesomeIcon className='Desig-arrow' icon="fa-solid fa-arrow-right" onClick={carrerDiscription}/><br/>
                <p className='Desig-bio'>Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation that make up a text also known as filler text, fictitious, blind or placeholder
                Literally it does not mean anything. </p>
              </div>
              <div className='col-md-2'></div>
            </div>
            </div>
          </div>
          
        </div>
        <div className='d-lg-none'>
            <ScrollableTabsButtonVisible/>
        </div>
    </div>
  )
}

export default Careers