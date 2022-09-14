import React from 'react'
import aboutclinic from '../Assets/Images/aboutclinic.png'
import General from '../Assets/Images/General.svg'
import Casualty from '../Assets/Images/Casualty.svg'
import Neuro from '../Assets/Images/Neuro.svg'
import Urology from '../Assets/Images/Urology.svg'
import videoBg from '../Assets/Images/videoBg.png'
import ReadMoreReact from 'read-more-react'
import Videoback from './Videoback'


function AboutClinic() {
    const longText =
    "Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere  sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere";
    return (
        <div>
            <div className='row m-0'>
                <div className=' col-md-6 col-xs-12 col-sm-12'>
                    <img src={aboutclinic} className='aboutclinic' />
                </div>
                <div className=' col-md-6 col-xs-12 col-sm-12'>
                    <p className='red pt-5 mt-5'>ABOUT</p>
                    <h2 className='abouth2'>GET TO KNOW ABOUT CLINIC</h2>
                    {/* <p className='pr-5 mr-5'>Minim veniam, quis nostrud exerci tation ullam corper suscipit lobortis nisl ut aliquip ex ea com modo consequat duis autem vel eumiriu dolor in hendrerit in vulputate velit esse molestie con.
                    </p>
                    <button className="btn btn-danger" type="button">Discover more</button> */}
                   <ReadMoreReact text={longText}
                        min={300}
                        ideal={300}
                        max={300}
                    readMoreText={<span style={{color:'blue'}}>Read more</span>}/>
                </div>
            </div>


            <div className='container d-none d-lg-block'>
            <div className='row'>
                <div className=' col-lg-3 center'>
                    <button className="btn btn-outline-danger font" type="button">
                        <img src={General}/> General</button>
                </div>
                <div className=' col-lg-3'>
                    <button className="btn btn-outline-danger font" type="button">
                        <img src={Casualty} /> Casualty </button>
                </div>
                <div className='col-lg-3'>
                    <button className="btn btn-outline-danger font" type="button">
                        <img src={Neuro} /> Neuro (Surgen) </button>
                </div>
                <div className='col-lg-3'>
                    <button className="btn btn-outline-danger font" type="button">
                        <img src={Urology} /> Urology (surgen) </button>
                </div>

            </div>
            </div>




            <div className='row pb-0 d-none d-lg-block' style={{height:'60vh',marginTop:'-100px'}}>
                <div className='col-md-12 center' style={{height:'60vh'}}>
                    {/* <img src={videoBg} className='m-0 p-0 aboutclinic' /> */}
                    <Videoback/>
                </div>


            </div>




        </div>
    )
}

export default AboutClinic