import React,{ Component,useEffect,useState } from 'react'
import VideoPlayer from "react-background-video-player"
import vid from '../Assets/video/back.mp4'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

function Videoback() {
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
  
    const openModal = () => {
      setModal(!modal);
    };
  
    const spinner = () => {
      setVideoLoading(!videoLoading);
    };
  return (
    <div style={{textAlign:'center'}}>
         <VideoPlayer
        className="video"
        src={vid}
        autoPlay={true}
        muted={true}
      />
      <div className="mainInput">
        {/* <input
          className="input"
          type="text"
          name="name"
          id='maininp'
          placeholder="Where to?"
        /> */}
        <button onClick={openModal} id='maininp' className="btn btn-outline-secondary btn-sm head-img-btn"><FontAwesomeIcon icon="fa-solid fa-play" />
                                        Watch!
                                    {modal ? (
                                    <section className="modal__bg">
                                        <div className="modal__align">
                                        <div className="modal__content" modal={modal}>
                                            <IoCloseOutline
                                            className="modal__close"
                                            arial-label="Close modal"
                                            onClick={setModal}
                                            />
                                            <div className="modal__video-align">
                                            {videoLoading ? (
                                                <div className="modal__spinner">
                                                <BiLoaderAlt
                                                    className="modal__spinner-style"
                                                    fadeIn="none"
                                                />
                                                </div>
                                            ) : null}
                                            <iframe
                                                className="modal__video-style"
                                                onLoad={spinner}
                                                loading="lazy"
                                                width="800"
                                                height="500"
                                                src="https://www.youtube.com/embed/4UZrsTqkcW4"
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen
                                            ></iframe>
                                            </div>
                                        </div>
                                        </div>
                                    </section>
                                    ) : null}
                                </button>
      </div>
    </div>
  )
}

export default Videoback