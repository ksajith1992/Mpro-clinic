import React,{useState,useEffect} from 'react'
import './style.css'
import logo from '../Assets/Images/logo.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import OtpInput from 'react-otp-login'
import Navbar from './Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from '../Constants/Axios'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import MuiAlert from '@mui/material/Alert'
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
function Login() {
  const navigate = useNavigate();
  const {handleSubmit} = useForm();
  const otp={
    "otp":""
  }
  const [state,setState]=useState(otp)
  const initialvalues={
        "op_number":"",
        "mobile_number":"",
  }
  const [values,setValues]=useState(initialvalues)
  useEffect(()=>{
    console.log(state.otp.length,'kk')
  })
  const onchangeevent=(e)=>{
    setValues({
      ...values,
      [e.target.id]:e.target.value
    })
  }
  const [open, setOpen] = useState(false);
  const [alertmsg, setAlertmsg] = useState('');
  const [msg, setMsg] = useState('');
  const handleClose = (event, reason) => {
       if (reason === 'clickaway') {
         return;
       }
   
       setOpen(false);
     };
  const onSubmitclick =()=>{
    const formData = new FormData()
    formData.append('op_number',values.op_number)
    formData.append('mobile_number','91'+values.mobile_number)
    axios({
        method: 'post',
        url: 'login/',
        data:formData,
        headers: { "Content-Type": "application/json" }
    })
    .then(res=>{
      console.log(res.data.data)
      localStorage.setItem('token',res.data.data.access_token)
      setAlertmsg(res.data.message)
      setMsg('success')
      setOpen(true)
      navigate('/OTP-Verification')
  })
  .catch(err => { if(err.request){ console.log(err.request) } if(err.response)
  { 
    console.log(err.response)
      setAlertmsg(err.response.data.message_list)
      setMsg('error')
      setOpen(true)
  } });

  }
  return (
    <>
    <Navbar/>
    <div className='container-fluid m-0 p-0' id='container-fluid'>
      {/* <img src={logo} className='logo' id='logo'/> */}
      <div className='container d-flex align-items-center justify-content-center' id='center-main'>
        <div className="p-2 align-items-center" id='center-inside'>
          <h1 className='head_h1'>Welcome back</h1>
          <hr className='line'/>
          <form onSubmit={handleSubmit(onSubmitclick)}>
            <div className="input-field">
              <input type="text" id="op_number" placeholder='OP Number' onChange={onchangeevent} required />
              <label htmlFor="op_number">OP Number</label>
            </div>
            <div className="input-field">
              <input type="text" id="mobile_number" placeholder='Mobile Number' onChange={onchangeevent} required  pattern="\d{10}" title="Please enter your Mobile Number"/>
              <label htmlFor="mobile_number">Mobile number</label>
            </div>
            <div className="d-grid">
              <button className="btn btn-danger m-0" id='data_upload' type="submit" >Continue</button>
            </div>   
          </form>
         
        </div>
        
      </div>
    </div>
    <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
               <Alert onClose={handleClose} severity={msg} sx={{ width: '100%' }}>
               {alertmsg}
               </Alert>
          </Snackbar>
     </Stack>
    </>
  )
}

export default Login