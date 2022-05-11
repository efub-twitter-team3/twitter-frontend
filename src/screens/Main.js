//가운데 메인(홈) 화면
import React, {useState, useEffect, useRef} from "react";
import {HeaderIcon,MediaIcon,GifIcon,VoteIcon,EmoticonIcon, GlobalIcon, OptionIcon,
  ReserveIcon,GpsIcon,ReplyIcon,ReTweetIcon,LikeIcon,ShareIcon} from './Icons';
import '../App.css';
//import axios from "axios";

//최상단 트윗 입력 컴포넌트
const TopContent = () => {
  const [inputs, setInputs] = useState('');
  const [isDiasabled, setIsDisabled] = useState(true);
  const handleInputChange = (e) => {
    setInputs(e.target.value);
    e.target.value !== '' ? setIsDisabled(false) : setIsDisabled(true)
  }
  const SubmitInputs = () => {
    console.log(inputs)
  }
  return(
  <div className="TopContentWrapper">
    <div className="ProfileIcon"></div>
    <div className="TopContentRightWrapper">
      <input 
      className="MainInput" 
      placeholder="무슨 일이 일어나고 있나요?" 
      onChange={handleInputChange}/>
      {isDiasabled ? null : 
      <div className="TopRightMiddleWrapper">
        {GlobalIcon}{'모든사람들이 답글을 달 수 있습니다'}  
      </div>}
      <div className="TopRightBottomWrapper">
        <div className="TopRightBottomContentWrapper">
          {MediaIcon}{GifIcon}{VoteIcon}{EmoticonIcon}{ReserveIcon}{GpsIcon}
        </div>
        <button className="MainButton" disabled={isDiasabled} onClick={SubmitInputs}>트윗하기</button>
      </div>
    </div>
  </div>
  );
}

//트윗 더보기 버튼 (삭제) 모달 컴포넌트
const Modal =({isOpenModal, setIsOpenModal, id})=> {
  const [deleteModal, setDeleteModal] = useState(false);
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
 
  return (
    <div ref={wrapperRef} value={isOpenModal} className="Modal">
      <button className = "ModalButton" style={{color: 'red'}} onClick={() => setDeleteModal(true)}>삭제</button>
      <button className = "ModalButton">내 프로필 메인에 올리기</button>
      <button className = "ModalButton">리스트에서 {id} 추가/삭제하기</button>
      <button className = "ModalButton">답글을 달 수 있는 사람 변경하기</button>
      <button className = "ModalButton">트윗 담아가기</button>
      <button className = "ModalButton">트윗 애널리틱스 보기</button>
      {deleteModal ? 
      <div className="DeleteModal">
        <p className="DeleteModalTitle">트윗을 삭제할까요?</p>
        이 동작은 취소가 불가능하며 내 프로필, 나를 팔로우하는 계정의 타임라인, 그리고 트위터 검색 결과에서 삭제됩니다. 
        <button className="DeleteButton" onClick={() => {console.log(id); setIsOpenModal(false);}}>삭제</button>
        <button className="DeleteCancleButton" onClick={() => (setIsOpenModal(false))}>취소</button>
      </div> : null}
      {/*onClick={console.log(id)}라고 적으면 모달 창이 뜰 때마다 함수가 실행*/}
    </div>
  );
  
}

//트윗 컴포넌트
const Content = ({id}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }
  return(
    <div className="ContentWrapper">
      <div className="ProfileIcon"></div>
      <div className="ContentRightWrapper">
        <div className="ContentTopWrapper">
          <h4 style={{margin: 0}}>닉네임</h4>
          <p className="IDText">@ident</p>
          <p className="IDText">·</p>
          <p className="IDText">시간</p>
        </div>
        dkdk
        <div className="ContentBottomWrapper">
          {ReplyIcon}{ReTweetIcon}{LikeIcon}{ShareIcon}
        </div>
      </div>
      {showModal && <Modal isOpenModal={showModal} setIsOpenModal={setShowModal} id={id}/>}
      <div onClick={e => e.stopPropagation()}>
        <button className="OptionButton" onClick={openModal}>{OptionIcon}</button>
      </div>
    </div>
  );
}

//메인 컴포넌트
function Main() {
  //axios 시험 용
  {/*const getpost = async () => {
    const response = await axios.get("/posts")
    .catch(e => console.log(response))
    console.log(response['data'])
  };
  
  useEffect(() => {
    getpost();
  }, []);*/}
  return (
    <div className="MainWrapper">
        <div className="MainHeader"> {/*홈 헤더*/}
            홈 {HeaderIcon}
        </div>
        <TopContent/>
        <Content id = {"1"}/>
        <Content id = {"2"}/>
        <Content id = {"3"}/>
        <Content id = {"4"}/>
        <Content id = {"5"}/>
    </div>
  );
}

export default Main;
