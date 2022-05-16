import React, {useState, useEffect, useRef} from "react";
import '../../App';
import axios from "axios";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

const Modal = ({isOpenModal, setIsOpenModal, id}) => {
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
      const response = await axios.delete(`${PROXY}/posts/`+id)
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
};

export default Modal;