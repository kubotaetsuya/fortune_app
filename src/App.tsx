import './App.scss';
import Top from './components/Top';
import Birthday from "./components/Birthday";
import BloodType from "./components/BloodType";
import Constellation from "./components/Constellation";
import Name from "./components/Name";
import StemsAndBranches from "./components/StemsAndBranches";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/blood_type" element={<BloodType />} />
        <Route path="/constellation" element={<Constellation />} />
        <Route path="/name" element={<Name /> } />
        <Route path="/stems_and_branches" element={<StemsAndBranches />} />
      </Routes>
    </div>
  );
}

export default App;