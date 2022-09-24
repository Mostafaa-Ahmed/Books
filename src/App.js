import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Store from "./view/store";
import Search from "./view/search";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Store/>}/>
        <Route path="/search" element={<Search/>}/>  
      </Routes>      
    </div>
  );
}

export default App;
