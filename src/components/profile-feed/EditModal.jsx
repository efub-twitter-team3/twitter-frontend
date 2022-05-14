import React, {useState, useEffect, useRef} from 'react';
import "./EditModal.css"
//import {CameraIcon} from '../Icons';
import axios from "axios";


const EditModal = ({isOpenModal, setIsOpenModal}) => {
    const [nameInputs, setNameInputs] = useState('');
    const [bioInputs, setBioInputs] = useState('');


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
    
    const editInfo = async () => {
        const response = await axios.put("/users/1",
        {
            "nickname" : nameInputs,
            "identifier" : "testIdentifier",
            "bio": bioInputs	
        })
        .catch(e => console.log(response))
        setNameInputs('');
        setBioInputs('');
      }
  

    return (
        <div ref={wrapperRef} value={isOpenModal} className="editModal">
            <form>
                <button onClick={editInfo} outline type="submit">
                    저장
                </button>

                <div className='editinfo'>
                    <input
                    onChange={(e) => setNameInputs(e.target.value)} //이벤트, state업데이트
                    value={nameInputs} //state
                    placeholder="이름"
                    type="text"
                    className="nameinfo"
                    />

                    <input
                    onChange={(e) => setBioInputs(e.target.value)} //이벤트, state업데이트
                    value={bioInputs} //state
                    placeholder="자기소개"
                    type="text"
                    className="bioinfo"
                    />

                    <input
                    placeholder="위치"
                    text="text"
                    />

                    <input
                    placeholder="웹사이트"
                    text="text"
                    />
                </div>

            </form>
        </div>
    );
};

export default EditModal;