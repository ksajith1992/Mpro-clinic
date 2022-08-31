import React,{useState,useEffect} from 'react'
import Navbar from './Components/Navbar'
import OtpInput from 'react-otp-login'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'
import axios from '../Constants/Axios'
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Otoverification() {
    const [open, setOpen] = useState(false);
    const [alertmsg, setAlertmsg] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();
    const token=localStorage.getItem('token') 
    const otp={
        "otp":""
      }
    const [state,setState]=useState(otp)
    const handleChange=(otp)=>{
        setState({...state,otp})
        const formData = new FormData()
        if(otp.length>=6){
          console.log(otp);
          formData.append('otp',otp)
          axios({
              method: 'post',
              url: 'otp_validate/',
              data:formData,
              headers: {"Authorization" : `Bearer ${token}`}
            })
            .then(function (res) {
              setAlertmsg(res.data.message)
              setMsg('success')
              setOpen(true)
              navigate('/Dashbord')
            })
            .catch(err => { if(err.request){ console.log(err.request) } if(err.response)
            { 
              console.log(err.response)
                setAlertmsg(err.response.data.message_list)
                setMsg('error')
                setOpen(true)
            } });
          }
        // navigate('/Dashbord')
      }
    const resend=()=>{
        axios({
            method: 'post',
            url: 'resend_otp/',
            headers: {"Authorization" : `Bearer ${token}`}
          })
          .then(function (res) {
            setAlertmsg(res.data.message)
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
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }    
        setOpen(false);
    };
    
  return (
    <>
    <Navbar/>
        <div className='container-fluid m-0 p-0' id='container-fluid'>
            <div className='container d-flex align-items-center justify-content-center' id='center-main'>
                <div className="p-2 align-items-center" id='center-inside'>
                    <h1 className='head_h1'>Verify Your Phone Number</h1>
                    <div id="otpverify">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <FontAwesomeIcon icon="fa-solid fa-angle-left" className='icons' data-bs-dismiss="modal" aria-label="Close" type="button"/>
                                <h4 className="modal-title" id="exampleModalLabel">Verify Your Number</h4>
                            </div>
                            <div className="modal-body">
                                <h6 className='otptext'>Enter the code we've sent via SMS to Your Mobile Number</h6>
                                <div className='otpinput'>
                                    <OtpInput
                                    onChange={handleChange}
                                    value={state.otp}
                                    numInputs={6}
                                    separator={<span>&nbsp;&nbsp;</span>}
                                    inputStyle={{width:'80%',height:'50px',borderColor:'#E6E6E6',borderStyle:'solid',borderRadius:'5px'}}
                                    />
                                </div>
                                <h6 className='otptext'>Haven't received a code?&nbsp;&nbsp;<span className='lintresend' onClick={resend}>Resend</span>&nbsp;&nbsp;&nbsp;<span className='timertext'>0.30</span></h6>
                            </div>
                        </div>
                    </div>
                </div>
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

export default Otoverification