import React from "react";
import './index.css';
import styled from 'styled-components';
import Main from './screens/Main';
import RightNav from "./screens/RightNav";

const LeftNav = styled.div`
  width: 14vw;
`; 

function App() {
  return (
    <div style={{display: 'flex'}}>
      <LeftNav/>
      <Main/>
      <RightNav/>
    </div>
  );
}

export default App;
