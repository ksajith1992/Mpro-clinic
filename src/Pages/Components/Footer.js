import React,{useState} from 'react'
import footerLogo from '../../Assets/Images/logoFooter.png'
import fb from '../../Assets/Images/fb.svg'
import insta from '../../Assets/Images/insta.svg'
import ind from '../../Assets/Images/ind.svg'
import tw from '../../Assets/Images/tw.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../Components/Components.css'
import { NavLink } from 'react-router-dom'
import axios from '../../Constants/Axios'
import { useForm } from "react-hook-form"
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import MuiAlert from '@mui/material/Alert'
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function Footer() {
    const {handleSubmit} = useForm()
    const [open, setOpen] = useState(false);
    const [alertmsg, setAlertmsg] = useState('');
    const [msg, setMsg] = useState('');
    const [data, setData] = useState({email:''});
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      const formData = new FormData()
    const onchange=(e)=>{
        setData({...data,
            [e.target.id]: e.target.value})
    }
    const onSubmitclick=()=>{
      axios({
          method: 'post',
          url: 'submit_newsletter/',
          data:data,
          headers: { "Content-Type": "application/json" }
      })
      .then(function (res) {
            document.getElementById('email').value=''
            setAlertmsg('Subscribed')
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
    const movecompany=()=>{
        window.open('https://www.maverixpro.com/')
    }
    const moveinsta=()=>{
        window.open('https://www.instagram.com/maverix.pro/?hl=en')
    }
    const movefacebook=()=>{
        window.open('https://www.facebook.com/Maverixpro/')
    }
    const movelinkedin=()=>{
        window.open('https://www.linkedin.com/company/maverixpro/mycompany/')
    }
    const movetwitter=()=>{
        window.open('https://twitter.com/maverixprol?s=11&t=8FtMmePN1OVTbE5Ty1jAxQ')
    }
  return (
    <>
        <div className='footerBg pt-3'>
            <Container>
                <Row className=''>
                    <Col xs={12} sm={4} lg={4}>
                        <div className='logoFooterimg'>
                            <img className='img-fluid' src={footerLogo} />
                        </div>
                        <p className='footerIconP'>Padikkal, Chelari, Malappuram Kerala 673014</p>
                        <h1>
                            <NavLink to={''} onClick={movefacebook} className="nav-link social-icon" ><img className='img-fluid' src={fb}  style={{padding:10}}/></NavLink>
                            <NavLink to={''} onClick={moveinsta} className="nav-link social-icon"><img className='img-fluid' src={insta}  style={{padding:10}}/></NavLink>
                            <NavLink to={''} onClick={movelinkedin} className="nav-link social-icon"><img className='img-fluid' src={ind}  style={{padding:10}}/></NavLink>
                            <NavLink to={''} onClick={movetwitter} className="nav-link social-icon"><img className='img-fluid' src={tw}  style={{padding:10}}/></NavLink>

                        </h1>
                    </Col>
                    <Col xs={12} sm={4} lg={4}>
                        <div className='pt-2'>
                            <h5 className='red'>Quik links</h5>
                        </div>
                        <div className='FootterUlli'>
                            <ul>
                                <li>  <NavLink to={'/'} className="nav-link">Home</NavLink></li>
                                <li> <NavLink to={'/Login'} className="nav-link">Download lab report</NavLink></li>
                                <li> <NavLink to={'/AboutUs'} className="nav-link">AboutUs</NavLink></li>
                                <li> <NavLink to={'/Careers'} className="nav-link">Careers</NavLink></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={4} lg={4}>
                        <div className='logoFooterimg'>
                            <h3>Subscribe Our<br /> Newsletter</h3>
                        </div>
                        <div>
                            {/* <SearchBox /> */}
                            <div className="search-container" style={{marginBottom:'20px'}}>
                                <form onSubmit={handleSubmit(onSubmitclick)}>
                                    <input className='news-letter-input' type="text" placeholder="Email" id='email' onChange={onchange}/>
                                    <button type="submit" className='news-letter-button'><i className="fa fa-paper-plane"></i></button>
                                </form>
                            </div>
                            {/* <SearchBox /> */}
                            <h4>Questions, concerns, and compliments</h4>
                            <p>* If you have questions, concerns, or compliments about the safety or quality of patient care, please let us know. <br/>Call to +91 9605777369 <br/>* to speak to the patient representative at M-Clinic or +91 9605888369 to reach the representative.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <Row className='pt-4'>
                    <Col xs={12} sm={12} lg={12} style={{textAlign:'center'}}>
                        <p className='footerIconP'>© 2022. All rights reserved design by MaverixPro®</p>
                    </Col>
                    <Col xs={12} sm={12} lg={12} className='right'>
                         <NavLink to={''} onClick={movecompany} className="nav-link" style={{float:'left'}}>Company</NavLink>&nbsp;&nbsp;
                        <NavLink to={'/PrivacyPolicy'} className="nav-link" style={{float:'left'}}>Setting & Privacy</NavLink>
                    </Col>
                </Row>
            </Container>
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

export default Footer    