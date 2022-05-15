import React, {useState, useEffect, useRef} from "react";
import {MediaIcon,GifIcon,VoteIcon,EmoticonIcon, GlobalIcon,ReserveIcon,GpsIcon,DeleteIcon} from '../Icons'
import './TweetModal.css';
import axios from "axios";
import ProfileImg from "../../assets/images/profileImg.jpg"


const TweetModal = ({isOpenModal, setIsOpenModal}) => {
    const wrapperRef = useRef();

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })

    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        setIsOpenModal(false);
      }
      else {
        setIsOpenModal(true);
      }
    }

    const [inputs, setInputs] = useState('');
    const [isDiasabled, setIsDisabled] = useState(true);

    const handleInputChange = (e) => {
      setInputs(e.target.value);
      e.target.value !== '' ? setIsDisabled(false) : setIsDisabled(true)
    }

    const SubmitInputs = async () => {
      console.log(inputs)
      const response = await axios.post("/posts",
      {
        "userId" : 1,
        "content" : inputs
      })
      .catch(e => console.log(response))
      setInputs('')
      setIsOpenModal(false);
    }

    const deleteTweetModal = () => {setIsOpenModal(false);}
  
    return (
        <div className="tweetmodal">
            <div ref={wrapperRef} value={isOpenModal} className="tweetmodal__wrapper">
                <div className="tweetmodal__wrapper__top">
                    <button className="deletetweetModal" onClick={deleteTweetModal}>{DeleteIcon}</button>
                </div>
                <div className="tweetmodal__wrapper__bottom">
                    <img className = "tweetmodal__ProfileIcon" alt="profile" src ={ProfileImg}/>
                    <div className="tweetmodal__RightWrapper">
                        <input 
                        className="tweetmodal__MainInput" 
                        placeholder="무슨 일이 일어나고 있나요?" 
                        onChange={handleInputChange}
                        value = {inputs}/>
                        {isDiasabled ? null : 
                        <div className="tweetmodal__RightMiddleWrapper">
                            {GlobalIcon}{'모든사람들이 답글을 달 수 있습니다'}  
                        </div>}
                        <div className="tweetmodal__RightBottomWrapper">
                            <div className="tweetmodal__RightBottomContentWrapper">
                                {MediaIcon}{GifIcon}{VoteIcon}{EmoticonIcon}{ReserveIcon}{GpsIcon}
                            </div>
                            <button className="tweetmodal__MainButton" disabled={isDiasabled} onClick={SubmitInputs}>트윗하기</button>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
        );
};

export default TweetModal;