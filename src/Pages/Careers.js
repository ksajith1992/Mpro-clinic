import React,{useState,useEffect} from 'react'
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
import axios from '../Constants/Axios'
import Footer from './Components/Footer'

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
    const carrerDiscription=(e)=>{
      console.log('id',e.target.id)
      if(e.target.id){
        navigate('/CareerDetails',{state:{id:e.target.id}})
      }
    }
    const [value, setValue] = React.useState(1);
    const [depart, setDepart] = useState([])
    const [data, setData] = useState([])
    const [career, setCareers] = useState([])  
    useEffect(()=>{ 
      window.scrollTo(0, 0);       
      axios.get('career_list/')
      .then(res=>{
        console.log(res.data.data)
        const rows = res.data.data
        var num = 1
        const rowss = []
        rows.forEach((el)=>{      
          rowss.push(
            {no:num, career_count: el['career_count'], description: el['description'], heading: el['heading'], id: el['id'] , vacancies:el['career_count'] }       
          )
          num = num+1;  
        })
        setDepart(rowss)
          getcareers(res.data.data[0].id)    
      })
      .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
  },[])
  const dats=[{ 'heading':'',
  'id':'65555',
  'responsibility':'Currently no openings, Come back later.',
  'vacancy':'0',
'skills':''}]
  const getcareers=(er)=>{
    console.log(er,'ll')
    if(career.length){   
    }else{
      axios.get('careers/'+er+'/')
      .then(res=>{
          setCareers(res.data.data)
      })
      .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ 
          console.log(err.response,'kkk')
          setCareers(dats)
         } });
      }
    }

  const handleChange = (e, newValue) => {
    setValue(newValue);
    console.log(e.target.id,'jjj')
    axios.get('careers/'+e.target.id+'/')
    .then(res=>{
        setCareers(res.data.data)
    })
    .catch(err => { if(err.request){ console.log(err.request) } if(err.response){
      console.log(err.response);
       setCareers(dats) } });
  };
  console.log(career,'ooo')
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
              {depart.map((obj)=>
              <li key={obj.id} onClick={handleChange} id={obj.id}>{obj.heading}[{obj.vacancies}]</li>
              )}
            </ul>
          </div>
          
          <div className='col-md-4'>
            <h1 className='Actv-head'>ACTIVE OPENING</h1>
            <div className='scrollDiv' id='style-3'>
              {career.map((obj)=>
              <div className='job-opp'>
                <h1 className='Desig-name'>{obj.heading}-{obj.heading?'['+obj.vacancy+']':''}</h1>
                {obj.heading?<FontAwesomeIcon className='Desig-arrow' icon="fa-solid fa-arrow-right" id={obj.id} onClick={carrerDiscription}/>:''}<br/>
                <p className='Desig-bio'><span style={{fontWeight:'bold'}}>{obj.heading?'Resposibility:-':''}</span>{obj.responsibility}</p>
                <p className='Desig-bio'><span style={{fontWeight:'bold'}}>{obj.heading?'Skills:-':''}</span>{obj.skills}</p>
              </div>)}
              
              <div className='col-md-2'></div>
            </div>
            </div>
          </div>
          
        </div>
        <div className='d-lg-none'>
            <ScrollableTabsButtonVisible/>
        </div>
        <Footer/>
    </div>
  )
}

export default Careers