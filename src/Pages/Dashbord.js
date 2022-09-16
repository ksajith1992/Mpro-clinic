import React,{ Component,useEffect,useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DashbordNave from './Components/DashbordNave'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import axios from '../Constants/Axios'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {setRecentapp} from './redux/Recentaction'
import {setReportapp} from './redux/Reportaction'

function Dashbord() {
    const {handleSubmit} = useForm()
    const [state, setState] = useState([]);
    const changeevent =(e)=>{
        setState({
            ...state,
            [e.target.id]: e.target.value
        });
    }
    const onSubmitclick =()=>{
        const formData = new FormData()
        formData.append('patient_name',state.patient_name)
        formData.append('patient_mobile_number',state.patient_mobile_number)
        axios({
            method: 'post',
            url: 'book_appointment/',
            data:formData,
            headers: { "Content-Type": "application/json" }
        })
        .then(function (res) {
            console.log(res.data)
        })
        .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const token=localStorage.getItem('token') 
    const navigate = useNavigate()
    const [doctor, setDoctor] = useState([])
    const [report, setReport] = useState([])
    const dispatch = useDispatch()
    const recent = useSelector((state) => state.recent.appoinments);
    const reps = useSelector((state) => state.report.labreport);
    console.log(reps,'jhhh')
    
    useEffect(()=>{
        window.scrollTo(0, 0);
        if(token){
            axios.get('appointment_list/',{ headers: {"Authorization" : `Bearer ${token}`} })
            .then(res=>{
                setDoctor(res.data.data)
                dispatch(setRecentapp(res.data.data))
                
            })
            .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
            axios.get('labreport_list/',{ headers: {"Authorization" : `Bearer ${token}`} })
            .then(res=>{
                setReport(res.data.data)
                dispatch(setReportapp(res.data.data))
            })
            .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response) } });
        }else{
            navigate('/Login')
        }

        if(recent){
            console.log("recent", recent);
        }
      
    },[]) 
    return (
        <>
            <div>
                <DashbordNave/>
            </div>
            <div className='serchboxMainDiv container'>
                <div className='serchboxDiv'>
                    <div className='recent-app p-4'>Recent appointments </div>
                        <Carousel responsive={responsive} showThumbs={false}>
                            {(doctor.length?doctor:recent).map((obj)=>
                            <div key={obj.doctor}>
                                <Container>
                                    <Row className='center'>
                                        <Col xs={12} sm={12} lg={12} className='center'>

                                            <div className='AppointmentsBox center'>
                                                <h3 className='appoinmentDate'>{obj.date.slice(4,8)}<br />{obj.date.slice(8,11)}</h3>
                                                <p className='appoinmentP'>Dr.{obj.doctor_name}</p>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>)}
                        </Carousel>
                    </div>
                <div  style={{margin:50}}>
                    <h4 className='reportUl-head'>Recent lab report</h4>
                    <ul>
                        {(report.length?report:reps).map((obj)=>
                            <li id='labreport' onClick={()=>window.open(obj.report_file)}> {obj.updated_at}</li>
                            )}
                    </ul>
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          <Footer/>
                            
        </>
    )
}

export default Dashbord