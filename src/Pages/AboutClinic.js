import React from 'react'
import aboutclinic from '../Assets/Images/aboutclinic.png'
import General from '../Assets/Images/General.svg'
import Casualty from '../Assets/Images/Casualty.svg'
import Neuro from '../Assets/Images/Neuro.svg'
import Urology from '../Assets/Images/Urology.svg'
import videoBg from '../Assets/Images/videoBg.png'


function AboutClinic() {
    return (
        <div>
            <div className='row m-0'>
                <div className=' col-md-6 col-xs-12 col-sm-12'>
                    <img src={aboutclinic} className='aboutclinic' />
                </div>
                <div className=' col-md-6 col-xs-12 col-sm-12'>
                    <p className='red pt-5 mt-5'>ABOUT</p>
                    <h2 className='abouth2'>GET TO KNOW ABOUT CLINIC</h2>
                    <p className='pr-5 mr-5'>Minim veniam, quis nostrud exerci tation ullam corper suscipit lobortis nisl ut aliquip ex ea com modo consequat duis autem vel eumiriu dolor in hendrerit in vulputate velit esse molestie con.
                    </p>
                    <button className="btn btn-danger" type="button">Discover more</button>
                </div>
            </div>



            <div className='row pad_mar'>
            <div className=' col-md-3 col-xs-6 col-sm-6 center'>
                    <button className="btn btn-outline-danger font" type="button">
                        <img src={General}/> General</button>
                </div>
                <div className=' col-md-3 col-xs-6 col-sm-6 center'>
                    <button className="btn btn-outline-danger font" type="button">
                        <img src={Casualty} /> Casualty </button>
                </div>
                <div className=' col-md-3 col-xs-6 col-sm-6 center'>
                    <button className="btn btn-outline-danger font" type="button">
                        <img src={Neuro} /> Neuro (Surgen) </button>
                </div>
                <div className=' col-md-3 col-xs-6 col-sm-6 center'>
                    <button className="btn btn-outline-danger font" type="button">
                        <img src={Urology} /> Urology (surgen) </button>
                </div>

            </div>




            <div className='row m-0 pb-5'>
                <div className='col-md-12 center'>
                    <img src={videoBg} className='m-0 p-0 aboutclinic' />
                </div>


            </div>




        </div>
    )
}

export default AboutClinic