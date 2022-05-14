import "./App.css";
import ProfilePage from "./components/ProfilePage";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Main/>}></Route>
          <Route path = "/profile" element={<ProfilePage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App;
