import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './Components.css'
import axios from '../../Constants/Axios'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function CareerTabs() {
  const [value, setValue] = React.useState(1);
  const [depart, setDepart] = useState([])
  const [data, setData] = useState([])
  const [careers, setCareers] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{        
    axios.get('career_list/')
    .then(res=>{
      const rows = res.data.data
      var num = 1
      const rowss = []
      rows.forEach((el)=>{      
        rowss.push(
          {no:num, career_count: el['career_count'], description: el['description'], heading: el['heading'], id: el['id'] },         
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
'vacancy':''}]
const getcareers=(er)=>{
  console.log(er,'ll')
  if(careers.length){   
  }else{
    axios.get('careers/'+er+'/')
    .then(res=>{
        setCareers(res.data.data)
    })
    .catch(err => { if(err.request){ console.log(err.request) } if(err.response){  setCareers(dats) } });
    }
  }
  console.log(data,'ooo')
const handleChange = (e, newValue) => {
  setValue(newValue);
  axios.get('careers/'+e.target.id+'/')
  .then(res=>{
      setCareers(res.data.data)
  })
  .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ setCareers(dats) } });
};
const movenext=(e)=>{
  navigate('/CareerDetails',{state:{id:e.target.id}})
}
console.log(careers,'oooo')
  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {depart.map((obj)=>
        <Tab key={obj.id} id={obj.id} value={obj.no} label={obj.heading+'-'+obj.career_count}/>
        )}
      </Tabs>
      <div style={{width:'auto',height:'auto',marginTop:20,padding:10}}>
        {careers.map((obj)=>
        <div className="card text-center" key={obj.id}>
          <div className="card-header">
            {obj.heading}
          </div>
          <div className="card-body">
            <h5 className="card-title">{obj.skills}</h5>
            <p className="card-text">{obj.responsibility?obj.responsibility:obj.message_list}</p>
            <p onClick={movenext} id={obj.id} className="btn btn-primary" style={{visibility:(obj.heading?'visible':'hidden')}}>Apply Now</p>
          </div>
          <div className="card-footer text-muted">
            {obj.vacancy?obj.vacancy:'0'} vacancy
          </div>
        </div>
        )} 
      </div>
    </Box>
  );
}
