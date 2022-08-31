import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
					<Typography>{children}</Typography>
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

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const resend=()=>{
		alert('resended')
	  }
	

	return (<div className='center'>
		<Box sx={{ width: '100%' }}>
			<Box sx={{ width: '100%', bgcolor: '#F4F4F4' }}>
				<Tabs value={value} onChange={handleChange} centered>
					<Tab label="Description " className='redTab' />
					<Tab label="Application" />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<div className='tabText'>

					<h2>Job brief</h2>
					<p>
						We are looking for a Senior HR Manager to join and lead our Human Resources department.
						<br /> <br />

						Senior HR Manager responsibilities include overseeing the recruitment process, designing company policies and setting objectives for the HR team. You will also help shape our employer brand strategy. To be successful in this role, you should be familiar with HR technology, including payroll systems and Applicant Tracking Systems.
						<br /> <br />
						Ultimately, you will ensure our company attracts, hires, develops and retains qualified employees.
					</p>
				</div>

				<div className='tabText'>

					<h2>Responsibilities</h2>
					<p>
						Set objectives for the HR team and track progress<br /> <br />

						Design and implement company policies that promote a healthy work environment<br /> <br />

						Develop compensation and benefits plans<br /> <br />

						Support and suggest improvements to the entire recruitment process<br /> <br />

						Host in-house recruitment events<br /> <br />

						Discuss employees’ career development paths with managers<br /> <br />

						Monitor HR metrics (e.g. turnover rates and cost-per-hire)<br /> <br />

						Review departmental budgets<br /> <br />

						Organize learning and development programs<br /> <br />

						Ensure HR staff addresses employees’ requests and grievances in a timely manner<br /> <br />

						Maintain HR procedures that comply with labor regulations
					</p>
				</div>

				<div className='tabText'>

					<h2>Requirements and skills</h2>
					<p>
						Proven work experience as a Senior HR Manager or similar role<br /> <br />

						Hands-on experience with Human Resources Management Software (including payroll systems and ATS)<br /> <br />

						Solid understanding of labor legislation<br /> <br />

						Excellent communication abilities<br /> <br />

						Leadership skills<br /> <br />

						Ability to foster healthy employee relations<br /> <br />

						BSc degree in Human Resources Management or Organizational Psychology<br /> <br />

						MSc degree in HR or relevant certification is a plus
					</p>
					{/* <div className='mt-5'>
						<button className="btn btn-danger" type="button">Apply now</button>
					</div> */}
				</div>

			</TabPanel>
			<TabPanel value={value} index={1}>


				<div className='tabText'>
					<div className='row'>
						<div className='col-lg-3'></div>
						<div className='col-lg-6'>
						<form>
							<div className="input-field">
								<input type="text" id="name" required />
								<label htmlFor="name">Name</label>
							</div>
							<div className="input-field">
								<input type="text" id="name" required/>
								<label htmlFor="name">Email</label>
							</div>
							<div className="input-field">
								<input type="text" id="name" required/>
								<label htmlFor="name">Phone</label>
							</div>  
							<div className="input-field">
								<textarea rows="6" cols="50" name="comment" form="usrform" placeholder='Cover Letter'/>
							</div>
							<div className="input-field">
								<input type="file" id="upload-cv" name='upload CV' title = "Choose a video please" required/>
								<p for="upload-cv">Click me to upload CV</p>
							</div>    
							<div className="d-grid">
								<button type="button" className="btn btn-danger m-0">
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


		<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

	);
}
