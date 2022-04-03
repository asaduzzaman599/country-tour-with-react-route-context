import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Countrys from './Components/Countrys/Countrys';
import CountryDetail from './Components/CountryDetail/CountryDetail';
import { createContext, useState } from 'react';
import Search from './Search/Search';

export const CountryContext = createContext()
function App() {
  const [countrys, setCountrys] = useState([]);
  return (
    <CountryContext.Provider value={[countrys, setCountrys]} >
      <div className='App'>

        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Countrys />}>
          </Route>

          <Route path="/:region/:name" element={<Countrys />}></Route>
          <Route path="/:name" element={<CountryDetail></CountryDetail>}></Route>

          <Route path="/countrys/:name" element={<CountryDetail></CountryDetail>} ></Route>
          <Route path="/search" element={<Search></Search>} >
            <Route path=":name" element={<CountryDetail></CountryDetail>} ></Route>
          </Route>

        </Routes>
      </div>
    </CountryContext.Provider>
  );
}

export default App;
