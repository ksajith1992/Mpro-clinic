import React,{ Component,useEffect,useState } from 'react'
import NavbarHome from './Components/NavbarHome'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Vector1 from '../Assets/Images/Vector1.png'
import Vector2 from '../Assets/Images/Vector2.png'
import Vector3 from '../Assets/Images/Vector3.png'
import { NavLink } from 'react-router-dom'
import { fadeInUp } from 'react-animations'
import Radium, { StyleRoot } from 'radium'
import Vector6 from '../Assets/Images/Vector6.png'
import Vector5 from '../Assets/Images/Vector5.png'
import Vector7 from '../Assets/Images/Vector7.png'
import Vector8 from '../Assets/Images/Vector8.png'
import Arrow3 from '../Assets/Images/Arrow3.png'
import img01 from '../Assets/Images/01.png'
import img02 from '../Assets/Images/02.png'
import img03 from '../Assets/Images/03.png'
import img04 from '../Assets/Images/04.png'
import Vector9 from '../Assets/Images/Vector9.png'
import Vector10 from '../Assets/Images/Vector10.png'
import Vector11 from '../Assets/Images/Vector11.png'
import Vector12 from '../Assets/Images/Vector12.png'
import img1 from '../Assets/Images/img1.png'
import img2 from '../Assets/Images/img2.png'
import img3 from '../Assets/Images/img3.gif'
import smimg from '../Assets/Images/msimg4.png'
import vision from '../Assets/Images/vision.png'
import Navbar from './Components/Navbar'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Footer from './Components/Footer'
import axios from '../Constants/Axios'
import { useForm } from "react-hook-form"
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import MuiAlert from '@mui/material/Alert'
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Home() {
    const {handleSubmit} = useForm()
    const styles = {
        fadeInUp: {
            animation: 'x 3s',
            animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
        }
    }
    const [depart, setDepart] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const [save, setSave] = useState('');
    const [state, setState] = useState([]);
    const [open, setOpen] = useState(false);
    const [alertmsg, setAlertmsg] = useState('');
    const [msg, setMsg] = useState('');
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
    useEffect(()=>{
        
        axios.get('department_list/')
        .then(res=>{
            setDepart(res.data.data)
        })
        .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
    },[])
    const filterdoctor=(e)=>{
        console.log(e.target.value,'kkk')
        axios.get('department_doctors/'+e.target.value+'/')
        .then(res=>{
            setDoctor(res.data.data.doctors)
        })
        .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
    }
    const savedetails=(e)=>{
        console.log(e.target.value,'savedetails')
        setSave(e.target.value)
    }
    const changeevent =(e)=>{
        setState({
            ...state,
            [e.target.id]: e.target.value
        });
    }
    const onSubmitclick =()=>{
        console.log(save,'save')
        if(save){
            const formData = new FormData()
            formData.append('patient_name',state.patient_name)
            formData.append('patient_mobile_number',state.patient_mobile_number)
            formData.append('doctor',save)
            axios({
                method: 'post',
                url: 'book_appointment/',
                data:formData,
                headers: { "Content-Type": "application/json" }
            })
            .then(function (res) {
                setAlertmsg('Appoinment Booked We will contact you soon')
                setMsg('success')
                setOpen(true)
            })
            .catch(err => { if(err.request){ console.log(err.request) } if(err.response)
                { 
                    console.log(err.response)
                    setAlertmsg(err.response.data.message_list)
                    setMsg('error')
                    setOpen(true)
                    
                } });
        }else{
            const formData = new FormData()
            formData.append('patient_name',state.patient_name)
            formData.append('patient_mobile_number',state.patient_mobile_number)
            axios({
                method: 'post',
                url: 'normal_appointment/',
                data:formData,
                headers: { "Content-Type": "application/json" }
            })
            .then(function (res) {
                setAlertmsg('Appoinment Booked We will contact you soon')
                setMsg('success')
                setOpen(true)
            })
            .catch(err => { if(err.request){ console.log(err.request) } if(err.response)
            { 
              console.log(err.response)
                setAlertmsg(err.response.data.message_list)
                setMsg('error')
                setOpen(true)
            } });;
        }
    }
    
    return (
        <>
        <div className='d-none d-lg-block'>
            <StyleRoot>
                <div className='Home-bg'>
                    <NavbarHome />
                    <div className='center-head-main'>
                        <div className='head-main-sub'>
                            <h1 className='head-main' style={styles.fadeInUp}>Literally it does not aa</h1><br />
                            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                                <button type="button" className="btn btn-danger">For emergency</button>
                                <a href='tel:+918848654311' className="btn btn-outline-danger" style={{ color: 'white' }} type="button"><FontAwesomeIcon icon="fa-solid fa-phone-volume" />&nbsp;&nbsp;+91 7907978721&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            </div>
                        </div>
                        <div className='right-align-div'>
                            <ul id="MiniRightNav">
                                <li>
                                    <NavLink to={'/'} className="navtext"><img src={Vector1} /><span>MY ACCOUNT</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'} className="navtext"><img src={Vector2} /><span>FACEBOOK</span></NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'} className="navtext"><img src={Vector3} /><span>INSTAGRAM</span></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </StyleRoot>
            <div className='red-area'>
                <div className='dropdownBox'>
                     <div className='dropdown-div'>
                    <div className="dropdown">
                        <select id='Department' name='Department' className="Department-drp" onChange={filterdoctor}>
                        <option value='' style={{backgroundColor:'red'}}>Please select</option>
                        {depart.map((obj)=>
                            <option key={obj.id} value={obj.id}>{obj.heading}</option>)}
                        </select> 
                    </div>
                    <div className="dropdown">
                        <select id='doctor' name='Doctor
                        ' className="Department-drp" onChange={savedetails}>
                            <option value='' style={{backgroundColor:'red'}}>Please select</option>
                            {doctor.map((obj)=>
                            <option key={obj.id} value={obj.id}>{obj.name}</option>)}
                        </select>
                    </div>
                    <button className="btn btn-danger btn-lg" style={{ color: 'white' }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
                </div>
                </div>
             
                <div className='dropdownBox'>  

                <div className='specialization'>
                    <h1 className='spec-head'>Our specialization</h1>
                    <h1 style={{fontSize:'45px'}}>Literally it does not mean any</h1>
                    <div className='spec-cards'>
                        <div className="card spec-card ">
                            <div className="card-body hover-zoom">
                                <img src={Vector5}/>
                                <h5 className="card-title">General medicine</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation...</h6>
                                <NavLink className='card-link' to={'/'}>Know more&nbsp;&nbsp;&nbsp;&nbsp;<img src={Arrow3}/></NavLink>
                            </div>
                        </div>
                        <div className="card spec-card">
                            <div className="card-body hover-zoom">
                                <img src={Vector6}/>
                                <h5 className="card-title">Casualty</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation...</h6>
                                <NavLink className='card-link' to={'/'}>Know more&nbsp;&nbsp;&nbsp;&nbsp;<img src={Arrow3}/></NavLink>
                            </div>
                        </div>
                        <div className="card spec-card">
                            <div className="card-body hover-zoom">
                                <img src={Vector7}/>
                                <h5 className="card-title">Neuro (Surgen)</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation...</h6>
                                <NavLink className='card-link' to={'/'}>Know more&nbsp;&nbsp;&nbsp;&nbsp;<img src={Arrow3}/></NavLink>
                            </div>
                        </div>
                        <div className="card spec-card">
                            <div className="card-body hover-zoom">
                                <img src={Vector8}/>
                                <h5 className="card-title">Urology( surgen)</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation...</h6>
                                <NavLink className='card-link' to={'/'}>Know more&nbsp;&nbsp;&nbsp;&nbsp;<img src={Arrow3}/></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className='Doctor-area'>
                <h1 className='doc-head'>Specialist</h1><br/>
                <h1 className='doc-subhead'>Literally it does<br/>
                        anything. It is a sequence </h1>
                <div className='doc-cards'>
                    <div className="card doc-card mt-2">
                        <div className="card-body ">
                            <div style={{width:'100%',marginBottom:'20px'}}>
                                <img src={Vector5} className='img-left'/>
                                <img src={img01} className='img-right'/>
                            </div>
                            <h3 className="doc-title">Dr. gopalan MBBS MD</h3>
                            <h6 className='doc-dept'>General medicine</h6>
                        </div>
                    </div>
                    <div className="card doc-card mt-2">
                        <div className="card-body">
                            <div style={{width:'100%',marginBottom:'20px'}}>
                                <img src={Vector6} className='img-left'/>
                                <img src={img01} className='img-right'/>
                            </div>
                            <h3 className="doc-title">Dr. gopalan MBBS MD</h3>
                            <h6 className='doc-dept'>General medicine</h6>
                        </div>
                    </div>
                    <div className="card doc-card mt-2">
                        <div className="card-body">
                            <div style={{width:'100%',marginBottom:'20px'}}>
                                <img src={Vector7} className='img-left'/>
                                <img src={img01} className='img-right'/>
                            </div>
                            <h3 className="doc-title">Dr. gopalan MBBS MD</h3>
                            <h6 className='doc-dept'>General medicine</h6>
                        </div>
                    </div>
                    <div className="card doc-card mt-2">
                        <div className="card-body">
                            <div style={{width:'100%',marginBottom:'20px'}}>
                                <img src={Vector8} className='img-left'/>
                                <img src={img01} className='img-right'/>
                            </div>
                            <h3 className="doc-title">Dr. gopalan MBBS MD</h3>
                            <h6 className='doc-dept'>General medicine</h6>
                        </div>
                    </div>
                    <div className="card doc-card mt-2" style={{textAlign:'center',backgroundColor:'black'}}>
                        <div className="card-body" style={{textAlign:'center',marginTop:'30px'}}>
                        <h1 style={{color:'white',fontFamily:'Federo',fontSize:'23px',   textAlign: 'left'}}>General<br/>OP Bokking</h1>
                        <h1 style={{color:'white',fontFamily:'Federo',fontSize:'23px',   textAlign: 'right'}}><img src={Arrow3} style={{marginTop:'-35%'}}/></h1>
                            
                        </div>
                    </div>
                    </div>
                </div>
                <div className='md-main'>
                    <div className='col-6 md-quates'>
                        <div className='md-div'>
                            <h1 className='md-h1'>DAVID CARMAL ALEX </h1>
                            <h3 className='md-h3'>“Literally it does not mean anything. It is a sequence of words without a sense “</h3>
                            <h1><img src={Vector9} style={{padding:'10px'}}/><img src={Vector10} style={{padding:'10px'}}/><img src={Vector11} style={{padding:'10px'}}/><img src={Vector12} style={{padding:'10px'}}/></h1>
                        </div>
                    </div>
                    <div className='col-6 md-video'>
                        <div className='md-div-vid'>
                            <img src={img1} className='head-img'/>
                            <div className='two-img'>
                            <img src={img2} className='head-img2'/><img src={img3} className='head-img3'/>
                            <button type="button" className="btn btn-outline-secondary btn-sm head-img-btn"><FontAwesomeIcon icon="fa-solid fa-play" />&nbsp;&nbsp;Watch</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='vm-vision'>
                    <div className='row w-100'>
                        <div className='col-6 mission'>
                            <h1 className='mission-head'>Our Mission</h1>
                            <h3 className='mission-desc'>Our mission is to organise the<br/> world’s information and make it<br/> universally accessible and useful.</h3>
                        </div>
                        <div className='col-6 mission'>
                            <h1 className='mission-head'>Our Vission</h1>
                            <h3 className='mission-desc'>Our mission is to organise the<br/> world’s information and make it<br/> universally accessible and useful.</h3>
                        </div>
                        <div className='col-12 img-col'>
                            <img src={vision}/> 
                        </div>                   
                    </div>
                </div> 
                <div className='book-con'>
                    <div className='row r-bor'>
                        <div className='col' style={{paddingTop:'30px'}}>
                            <h1 className='r-bor-head1'>Literally it does not mean anything. It is a sequence</h1>
                            <h3 className='r-bor-head2'>Literally it does not mean anything. It is a sequence of words </h3>
                        </div>
                        <div className='col d-flex justify-content-center align-items-center'>
                            <NavLink to={'/'} className='bction' data-bs-toggle="modal" data-bs-target="#exampleModal">Book a consultation &nbsp;<img src={Arrow3}/></NavLink>
                        </div>
                    </div>
                </div> 
                <Footer/>              
            </div>
            <div className="d-lg-none p-0 m-0 ms">
                <div className='mob-screen-hm'>
                    <NavbarHome/>
                    <div className='ms-center-head-main'>
                    <StyleRoot>
                        <div className='ms-head-main-sub'>
                            <h1 className='ms-head-main' style={styles.fadeInUp}>Literally it <br/>does not aa</h1><br />
                             <div style={{ textAlign: 'center'}}>
                                <button type="button" className="btn btn-danger">For emergency</button>
                            </div>
                            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <a href='tel:+918848654311' className="btn btn-outline-danger" style={{ color: 'white' }} type="button"><FontAwesomeIcon icon="fa-solid fa-phone-volume" />&nbsp;&nbsp;+91 7907978721&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                            </div>                            
                        </div>
                    </StyleRoot>
                    </div>
                    <div className='ms-red-div'>
                        <div className='dropdownBox'>
                            <div className='ms-apply'>
                                <div className="ms-dropdown">
                                    <select id='Department' name='Department' className="Department-drp" onChange={filterdoctor}>
                                        <option value='' style={{backgroundColor:'red'}}>Please select</option>
                                        {depart.map((obj)=>
                                        <option key={obj.id} value={obj.id}>{obj.heading}</option>)}
                                    </select> 
                                </div>
                                <div className="ms-dropdown">
                                    <select id='doctor' name='doctor' className="Department-drp" onChange={savedetails}>
                                        <option value='' style={{backgroundColor:'red'}}>Please select</option>
                                        {doctor.map((obj)=>
                                        <option key={obj.id} value={obj.id}>{obj.name}</option>)}
                                    </select>
                                </div>
                                <button className="btn btn-danger btn-lg" style={{ color: 'white',width:'90%',margin:'10px'}} data-bs-toggle="modal" data-bs-target="#exampleModal" type="button">Book Now</button>
                            </div>
                            <div className='ms-depart'>
                                <h1 className='sm-dpt-head'>Our specialization</h1>
                                <h1 className='sm-dpt-subhead'>Literally it does<br/> not mean any</h1>
                                <Carousel showIndicators={false} showArrows={true} showThumbs={false}>
                                    <div className="card sm-bg-card">
                                        <div className="card-body hover-zoom">
                                            <img src={Vector5} style={{width:'30px'}}/>
                                            <h5 className="sm-card-title">Casualty</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation...</h6>
                                            <NavLink className='sm-card-link' to={'/'}>Know more&nbsp;&nbsp;&nbsp;&nbsp;<img src={Arrow3} style={{width:'30px',marginTop:'10px',marginLeft:'10px'}}/></NavLink>
                                        </div>
                                    </div> 
                                    <div className="card sm-bg-card">
                                        <div className="card-body hover-zoom">
                                            <img src={Vector6} style={{width:'30px'}}/>
                                            <h5 className="sm-card-title">Casualty</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation...</h6>
                                            <NavLink className='sm-card-link' to={'/'}>Know more&nbsp;&nbsp;&nbsp;&nbsp;<img src={Arrow3} style={{width:'30px',marginTop:'10px',marginLeft:'10px'}}/></NavLink>
                                        </div>
                                    </div>    
                                    <div className="card sm-bg-card">
                                        <div className="card-body hover-zoom">
                                            <img src={Vector7} style={{width:'30px'}}/>
                                            <h5 className="sm-card-title">Casualty</h5>
                                            <h6 className="sm-card-subtitle mb-2 text-muted">Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation...</h6>
                                            <NavLink className='sm-card-link' to={'/'}>Know more&nbsp;&nbsp;&nbsp;&nbsp;<img src={Arrow3} style={{width:'30px',marginTop:'10px',marginLeft:'10px'}}/></NavLink>
                                        </div>
                                    </div>    
                                    <div className="card sm-bg-card">
                                        <div className="card-body hover-zoom">
                                            <img src={Vector8} style={{width:'30px'}}/>
                                            <h5 className="sm-card-title">Casualty</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">Literally it does not mean anything. It is a sequence of words without a sense of Latin derivation...</h6>
                                            <NavLink className='sm-card-link' to={'/'}>Know more&nbsp;&nbsp;&nbsp;&nbsp;<img src={Arrow3} style={{width:'30px',marginTop:'10px',marginLeft:'10px'}}/></NavLink>
                                        </div>
                                    </div>                                      
                                </Carousel>
                                <div style={{textAlign:'center',marginTop:20}}>
                                    <button type="button" className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">BOOK AN APPOINMENT</button>
                                </div>                                
                            </div>
                        </div>                        
                    </div>
                    <div className='sm-md-word'>
                        <img src={img1} className='sm-head-img'/>
                        <div className='sm-two-img'>
                            <img src={img2} className='sm-head-img2'/><img src={img3} className='sm-head-img3'/>
                            <button type="button" className="btn btn-outline-secondary btn-sm sm-head-img-btn"><FontAwesomeIcon icon="fa-solid fa-play" />&nbsp;&nbsp;Watch</button>
                        </div>
                        <div className='sm-md-wrds'>
                            <h1 className='sm-md'>DAVID CARMAL ALEX</h1>
                            <h3 className='sm-md-speech'>“Literally it does not mean anything. It is a sequence of words without a sense “</h3>
                            <h1><img src={Vector9} style={{padding:'10px'}}/><img src={Vector10} style={{padding:'10px'}}/><img src={Vector11} style={{padding:'10px'}}/><img src={Vector12} style={{padding:'10px'}}/></h1>
                        </div>      
                    </div>
                    <div className='vis-mis'>
                        <div className='sm-mv'>
                            <h1 className='sm-mv-head'>Our Mission</h1>
                            <h3 className='sm-mv-word'>Our mission is to organise the world’s information and make it universally accessible and useful.</h3>
                        </div> 
                        <div className='sm-mv'>
                            <h1 className='sm-mv-head'>Our Vission</h1>
                            <h3 className='sm-mv-word'>Our mission is to organise the world’s information and make it universally accessible and useful.</h3>
                        </div>
                        <div className='sm-mv'>
                            <img src={smimg} style={{width:'90%'}}/>
                        </div> 
                    </div>
                    <Footer/>
                    {/* </div> */}
                </div>            
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className='center pt-2'>Add your details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmitclick)}>
                                <div className="input-field">
                                    <input type="text" id="patient_name" onChange={changeevent} placeholder='Name' required />
                                    <label htmlFor="patient_name">Name</label>
                                </div>
                                <div className="input-field">
                                    <input type="text" id="patient_mobile_number" onChange={changeevent} placeholder='Mobile Number' required/>
                                    <label htmlFor="patient_mobile_number">Mobile number</label>
                                </div> 
                                <div className="d-grid">
                                    <h6 style={{padding:'20px'}}>We will call you to confirm the booking</h6>
                                    <button className="btn" type="submit" id='data_edit'>
                                        Apply now
                                    </button>
                                </div>
                                <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
               <Alert onClose={handleClose} severity={msg} sx={{ width: '100%' }}>
               {alertmsg}
               </Alert>
          </Snackbar>
     </Stack>          
                            </form>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default Home