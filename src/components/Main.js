import React, {useState, useEffect, useRef} from "react";
import {HeaderIcon,MediaIcon,GifIcon,VoteIcon,EmoticonIcon, GlobalIcon, OptionIcon,
  ReserveIcon,GpsIcon,ReplyIcon,ReTweetIcon,LikeIcon,ShareIcon} from './Icons';
import '../App.css';
import axios from "axios";
import Sidebar from "./sidebar/Sidebar";
import RightNav from "./RightNav";
import ProfileImg from "../assets/images/profileImg.jpg";

//최상단 트윗 입력 컴포넌트
const TopContent = () => {
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
      "userId" : 2,
	    "content" : inputs
    })
    .catch(e => console.log(response))
  }
  return(
  <div className="TopContentWrapper">
    <img className = "ProfileIcon" alt="profile" src ={ProfileImg}/>
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
  const deletePost = async (id) => {
    const response = await axios.delete("/posts/"+id)
    .catch(e => console.log(response))
  }
 
  return (
    <div ref={wrapperRef} value={isOpenModal} className="Modal">
      <button className = "ModalButton" style={{color: 'red'}} onClick={() => setDeleteModal(true)}>삭제</button>
      <button className = "ModalButton">내 프로필 메인에 올리기</button>
      <button className = "ModalButton">리스트에서 추가/삭제하기</button>
      <button className = "ModalButton">답글을 달 수 있는 사람 변경하기</button>
      <button className = "ModalButton">트윗 담아가기</button>
      <button className = "ModalButton">트윗 애널리틱스 보기</button>
      {deleteModal ? 
      <div className="DeleteModal">
        <p className="DeleteModalTitle">트윗을 삭제할까요?</p>
        이 동작은 취소가 불가능하며 내 프로필, 나를 팔로우하는 계정의 타임라인, 그리고 트위터 검색 결과에서 삭제됩니다. 
        <button className="DeleteButton" onClick={() => {deletePost(id); setIsOpenModal(false);}}>삭제</button>
        <button className="DeleteCancleButton" onClick={() => (setIsOpenModal(false))}>취소</button>
      </div> : null}
      {/*onClick={console.log(id)}라고 적으면 모달 창이 뜰 때마다 함수가 실행*/}
    </div>
  );
  
}

//트윗 컴포넌트
const Content = ({post}) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }
  return(
    <div className="ContentWrapper">
      <img className = "ProfileIcon" alt="profile" src ={ProfileImg}/>
      <div className="ContentRightWrapper">
        <div className="ContentTopWrapper">
          <h4 style={{margin: 0}}>{post.user.nickname}</h4>
          <p className="IDText">@{post.user.identifier}</p>
          <p className="IDText">·</p>
          <p className="IDText">{post.date}</p>
        </div>
        {post.content}
        <div className="ContentBottomWrapper">
          {ReplyIcon}{ReTweetIcon}{LikeIcon}{ShareIcon}
        </div>
      </div>
      {showModal && <Modal isOpenModal={showModal} setIsOpenModal={setShowModal} id={post.postId}/>}
      <div onClick={e => e.stopPropagation()}>
        <button className="OptionButton" onClick={openModal}>{OptionIcon}</button>
      </div>
    </div>
  );
}

//메인 컴포넌트
function Main() {
  const [post, setPost] = useState([])
  const getpost = async () => {
    const response = await axios.get("/posts")
    .then(res => setPost(res['data'].reverse()))
    .catch(e => console.log(response))
  };
  
  useEffect(() => {
    getpost();
  }, []);
  return (
    <div style={{display: 'flex'}}>
      <Sidebar/>
      <div className="MainWrapper">
          <div className="MainHeader"> {/*홈 헤더*/}
              홈 {HeaderIcon}
          </div>
          <TopContent/>
          {post.map(p => <Content key = {p.postId} post = {p}/>)}
      </div>   
      <RightNav/>   
    </div>
  );
}

export default Main;