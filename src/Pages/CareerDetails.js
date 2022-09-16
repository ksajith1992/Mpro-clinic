import React,{useEffect,useState} from 'react'
import Footer from './Components/Footer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from './Components/Navbar'
import './style.css'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useForm } from "react-hook-form"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../Constants/Axios'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import MuiAlert from '@mui/material/Alert'
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
function TabPanel(props) {
	
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography component={'span'} variant={'body2'}>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function CareerDetails() {
  const [value, setValue] = React.useState(0);
  const [careers, setCareers] = useState([])
  const {handleSubmit} = useForm();
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
  let location = useLocation();
  const id=location.state.id;
  console.log('id',id)
  useEffect(()=>{  
    if(location.state.id){

    }    
    axios.get('career_list/'+id+'/')
    .then(res=>{
      console.log(res.data.data,'kk');
        setCareers([res.data.data])
    })
    .catch(err => { if(err.request){ console.log(err.request) } if(err.response){ console.log(err.response)} });
  },[])
  const initialvalues={
    "first_name":"",
    "last_name":"",
    "email":"",
    "mobile_number":"",
    "cover_letter":"",
}
const [values,setValues]=useState(initialvalues)
const [state, setstate] = useState([])
  const onchangeevent=(e)=>{
    setValues({
      ...values,
      [e.target.id]:e.target.value
    })
  }
  function onChangeupload (e){
    setstate(

         e.target.files[0]
    );
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
    formData.append('career',id)
    formData.append('first_name','91'+values.first_name)
    formData.append('last_name',values.last_name)
    formData.append('email',values.email)
    formData.append('mobile_number',values.mobile_number)
    formData.append('cover_letter',values.cover_letter)
    formData.append('resume',state)
    axios({
        method: 'post',
        url: 'career_apply/',
        data:formData,
        headers: { "Content-Type": "application/json" }
    })
    .then(res=>{
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
  console.log(careers[0],'kkll')
  return (
    <>
    <div>
      <Navbar />
      <div className='careerHeadBg'>
        <h2 className='center p-1'>{careers.heading}</h2>
      </div>
      {/* <CareerTab/> */}
      <div className='center'>
		<Box sx={{ width: '100%' }}>
			<Box sx={{ width: '100%', bgcolor: '#F4F4F4' }}>
				<Tabs value={value} onChange={handleChange} centered>
					<Tab label="Description " className='redTab' />
					<Tab label="Application" />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
      {careers.map((obj)=>
        <div key={obj.id}>
				<div className='tabText'>

					<h2>Job brief</h2>
					<p>
						{obj.description}
					</p>
				</div>

				<div className='tabText'>

					<h2>Responsibilities</h2>
					<p>
						{obj.responsibility}
					</p>
				</div>

				<div className='tabText'>

					<h2>Requirements and skills</h2>
					<p>
						{obj.skills}
					</p>
					{/* <div className='mt-5'>
						<button className="btn btn-danger" type="button">Apply now</button>
					</div> */}
				</div>
        <div className='tabText'>

					<h2>Vacancy</h2>
					<p>
						{obj.vacancy}
					</p>
				</div>
        </div>
      )}
			</TabPanel>
			<TabPanel value={value} index={1}>


				<div className='tabText'>
					<div className='row'>
						<div className='col-lg-3'></div>
						<div className='col-lg-6'>
						<form onSubmit={handleSubmit(onSubmitclick)}>
							<div className="input-field">
								<input type="text" id="first_name" placeholder='First Name' onChange={onchangeevent} required />
								<label htmlFor="first_name">First Name</label>
							</div>
							<div className="input-field">
								<input type="text" id="last_name" placeholder='Last Name' onChange={onchangeevent} required/>
								<label htmlFor="last_name">Last Name</label>
							</div>
              <div className="input-field">
								<input type="text" id="email" placeholder='Email' onChange={onchangeevent} required/>
								<label htmlFor="email">Email</label>
							</div>
							<div className="input-field">
								<input type="text" id="mobile_number" placeholder='Mobile Number' onChange={onchangeevent} required/>
								<label htmlFor="mobile_number">Mobile Number</label>
							</div>  
							<div className="input-field">
								<textarea rows="6" cols="50" name="comment" id='cover_letter' form="usrform" onChange={onchangeevent} placeholder='Cover Letter'/>
							</div>
							<div className="input-field">
								<input type="file" id="resume" name='upload CV' title = "Click me to upload CV" onChange={onChangeupload}  required/>
								<p htmlFor="resume">Click me to upload CV</p>
							</div>    
							<div className="d-grid">
								<button type="submit" className="btn btn-danger m-0">
								Apply now
								</button>
							</div>          
          				</form>
						</div>
						<div className='col-lg-3'></div>
					</div>
				</div>
			</TabPanel>


		</Box>


		<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <FontAwesomeIcon icon="fa-solid fa-angle-left" className='icons' data-bs-dismiss="modal" aria-label="Close" type="button"/>
                      </div>
                      <div className="modal-body">
						<h2>awesome!</h2>
                        <h6 className='otptext center'>Literally it does not mean anything.  it does not mean anything. It is a sequence of words without a sense of Latin </h6>
                    
                      </div>
                    </div>
                  </div>
                </div>

	</div>
       {/* <CareerTab/> */}
      <Footer/>
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

export default CareerDetails