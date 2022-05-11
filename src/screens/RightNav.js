//오른쪽 네비게이션 바
import React, {useState} from "react";
import {SearchIcon, OptionIcon} from './Icons';
import '../App.css';

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
        <div className="ProfileIcon"></div>
        <div className="RightNavContentColumnWrapper">
            <h4 style={{margin: 0}}>닉네임</h4>
            <p className="IDText">@ident</p>
        </div>
        <button className="RightNavButton">팔로우</button>
      </div>
    );
}

//오른쪽 네비게이션 메인 컴포넌트
function RightNav() {
    const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="RightNavWrapper">
        <div className="RightNavHeader"> {/*오른쪽 네비게이션 헤더(검색 입력창)*/}
            <div className="RightSearchInputBox">
                {SearchIcon}
                <input className="RightSearchInput"
                placeholder="트위터 검색" 
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}/>
            </div>
            {isFocused && <div className="SearchModal">사용자, 화제, 키워드를 검색해보세요</div>}
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
