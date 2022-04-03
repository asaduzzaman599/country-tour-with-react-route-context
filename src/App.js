import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Countrys from './Components/Countrys/Countrys';
import CountryDetail from './Components/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/All" element={<Countrys />}>
        <Route path=':name' element={<CountryDetail></CountryDetail>}></Route>
        </Route> 
    </Routes>
    </div>
  );
}

export default App;
