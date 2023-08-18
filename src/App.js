import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import Championnat from './component/Championnat';
import { useEffect, useState } from 'react';
import Api from './component/Api';

function App() {
 
  return (
    <BrowserRouter>
        <nav className='m-3 p-3 border border-info'>
          <ul className='nav na-pills'>
            <li>
              <Link className='btn btn-outline-info ms-3 w-2' to={"/League/bundesliga"}>Bundesliga</Link>
            </li>
            <li>
              <Link className='btn btn-outline-info ms-1' to={"/League/liga"}>Liga</Link>
            </li>
            <li>
              <Link className='btn btn-outline-info ms-1' to={"/League/Premier-league"}>Premier-league</Link>
            </li>
            <li>
              <Link className='btn btn-outline-info ms-1' to={"/League/serie-a"}>Seria-a</Link>
            </li>
            <li>
              <Link className='btn btn-outline-info ms-1' to={"/League/Ligue-1"}>Ligue-1</Link>
            </li>
            <li>
              <Link className='btn btn-outline-info ms-1' to={"/League/Portugal"}>Protugal</Link>
            </li>
            <li>
              <Link className='btn btn-outline-info ms-1' to={"/League/Belgique"}>Belgique</Link>
            </li>
            <li>
              <Link className='btn btn-outline-info ms-1' to={"/League/Suisse"}>Suisse</Link>
            </li>
            <li>
              <Link  className='btn btn-outline-info ms-1' to={"/League/Turquie"}>Turquie</Link>
            </li>
            <li>
              <Link className='btn btn-outline-info ms-1' to={"/League/Pays-Bas"}>Pays-Bas</Link>
            </li>
            <li>
              <Link className='btn btn-outline-info ms-1' to={"/next"}>Match Prochains </Link>
            </li>
          </ul>
          <nav  className='m-3 p-3 border border-info'>
         
          </nav>
        </nav>
      <Routes>
        <Route path='/League/bundesliga' element={<Championnat league="bundesliga"/>}></Route>
        <Route path='/League/liga' element={<Championnat league="liga"/>}></Route>
        <Route path='/League/Premier-league' element={<Championnat league="Premier-league"/>}></Route>
        <Route path='/League/serie-a' element={<Championnat league="serie-a"/>}></Route>
        <Route path='/League/Ligue-1' element={<Championnat league="ligue-1"/>}></Route>
        <Route path='/League/Portugal' element={<Championnat league="portugal"/>}></Route>
        <Route path='/League/Belgique' element={<Championnat league="belgique"/>}></Route>
        <Route path='/League/Suisse' element={<Championnat league="suisse"/>}></Route>
        <Route path='/League/Turquie' element={<Championnat league="turquie"/>}></Route>
        <Route path='/League/Pays-Bas' element={<Championnat league="pays-bas"/>}></Route>
        <Route path='/next' element={<Home league="pays-bas"/>}></Route>
      </Routes>
    </BrowserRouter>      
  );
}

export default App;
