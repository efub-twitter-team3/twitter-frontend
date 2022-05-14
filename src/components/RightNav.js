//오른쪽 네비게이션 바
import React, {useState} from "react";
import {SearchIcon, OptionIcon} from './Icons';
import '../App.css';
import axios from "axios";
import ProfileImg from "../assets/images/profileImg.jpg";

const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

//나를 위한 트렌트 컴포넌트
const TrendContent = () => {
    return(
        <div className="RightNavContentRowWrapper">
            <div className="RightNavContentColumnWrapper">
                <p style={{  fontSize: "13px", margin: 0, color: "#72818b"}}>
                    대한민국에서 트렌드 중
                </p>
                <h4 style={{margin: 0}}>트렌드</h4>
                <p style={{  fontSize: "13px", margin: 0, color: "#72818b"}}>
                    트윗
                </p>
            </div>
            <button className="OptionButton">{OptionIcon}</button>
        </div>
    );
  }

//팔로우 추천 컴포넌트
const FollowContent = () => {
    return (
        <div className="RightNavContentRowWrapper">
        <img className = "ProfileIcon" alt="profile" src ={ProfileImg}/>
        <div className="RightNavContentColumnWrapper">
            <h4 style={{margin: 0}}>닉네임</h4>
            <p className="IDText">@ident</p>
        </div>
        <button className="RightNavButton">팔로우</button>
      </div>
    );
}

//유저 검색 결과 컴포넌트
const UserContent = ({user}) => {
    return (
        <div className="RightNavContentRowWrapper">
        <img className = "ProfileIcon" alt="profile" src ={ProfileImg}/>
        <div className="RightNavContentColumnWrapperUser">
            <h3 style={{margin: 0, color: 'black', fontWeight: 'bold'}}>{user.nickname}</h3>
            <p className="IDText">@{user.identifier}</p>
            <p className="IDText">{user.bio}</p>
        </div>
      </div>
    );
}

const PostContent = ({post}) => {
    return(
      <div className="RightNavContentRowWrapper">
        <img className = "ProfileIcon" alt="profile" src ={ProfileImg}/>
        <div className="RightNavContentColumnWrapperUser">
            <div className="ContentTopWrapper">
                <h3 style={{margin: 0, color: 'black', fontWeight: 'bold'}}>{post.user.nickname}</h3>
                <p className="IDText">@{post.user.identifier}</p>
                <p className="IDText">·</p>
                <p className="IDText">{post.date}</p>
            </div>
            {post.content}
        </div>
      </div>
    );
  }

//오른쪽 네비게이션 메인 컴포넌트
function RightNav() {
    const [isFocused, setIsFocused] = useState(false);
    const [userInfo, setUserInfo] = useState("");
    const [postInfo, setPostInfo] = useState(""); 
    const getResult = async (id) => {
        const user = await axios.get(`${PROXY}/users/`+id)
        .then(user => setUserInfo(user['data']))
        .catch(e =>setUserInfo(""));
        const post = await axios.get(`${PROXY}/posts/`+id)
        .then(post => setPostInfo(post['data']))
        .catch(e => setPostInfo(""));
        console.log(user)
        console.log(post)
      };
    const handleChange = (e) => {
        if (e.target.value !== "") 
            getResult(e.target.value)
    };
  return (
    <div className="RightNavWrapper">
        <div className="RightNavHeader"> {/*오른쪽 네비게이션 헤더(검색 입력창)*/}
            <div className="RightSearchInputBox">
                {SearchIcon}
                <input className="RightSearchInput"
                placeholder="트위터 검색" 
                onFocus={() => setIsFocused(true)}
                onBlur={() => {setIsFocused(false);setUserInfo("");setPostInfo("");}}
                onChange={handleChange}/>
            </div>
            {isFocused && 
            <div className="SearchModal">
                사용자, 화제, 키워드를 검색해보세요
                {userInfo === "" ? null : <UserContent user = {userInfo}/>}
                {postInfo === "" ? null : <PostContent post = {postInfo}/>}
            </div>}
        </div>
        <div className="RightNavContentWrapper">
            <p className="RightNavTitleText">
                나를 위한 트렌드
            </p>
            <TrendContent/>
            <TrendContent/>
            <TrendContent/>
            <div className="RightNavContentBottomWrapper">더 보기</div>
        </div>
        <div className="RightNavContentWrapper"  style={{marginTop: '20px'}}>
            <p className="RightNavTitleText">
                팔로우 추천
            </p>
            <FollowContent/>
            <FollowContent/>
            <FollowContent/>
            <div className="RightNavContentBottomWrapper">더 보기</div>
        </div>
        <div className="RightNavBottomWrapper">
            <a href="/" className="RightNavBottomText">이용약관</a>
            <a href="/" className="RightNavBottomText">개인정보 처리 방침</a>
            <a href="/" className="RightNavBottomText">쿠키 정책</a>
            <a href="/" className="RightNavBottomText">접근성</a>
            <a href="/" className="RightNavBottomText">광고 정보</a>
            <a href="/" className="RightNavBottomText">더 보기...</a>
            <a href="/" className="RightNavBottomText">© 2022 Twitter, Inc.</a>
        </div>
    </div>
  );
}

export default RightNav;