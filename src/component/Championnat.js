import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Page from './Page';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Home from './Home';


function Championnat(props) {
    const [elements,setElements]=useState([]);
    const [equipes,setEquipes]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [eleparPage,seteleparPage]=useState(20);
   
    useEffect(()=>{
        axios.get("http://localhost:8082/League/"+props.league).then((data)=>{
            console.log(data);
            setEquipes(data?.data);
        })
    
    },[props.league]);
   const indexofLastElement=currentPage*eleparPage;
   const indexofFirstElement=indexofLastElement-eleparPage;
   const currentElement=equipes.slice(indexofFirstElement,indexofLastElement);
   const paginate=()=>setCurrentPage()
    return (

        <div className='container-sm '>
          <div className='row p-1 border border-info'>
              <h1 className="">{props.league}</h1> 
          </div>
          
          
           
            
                {currentElement.map((item, i) => {
                return (
                  

                    <div className=" text-center ">
                    <div className="row p-1 mb-1 border border-info"  key={i}>
                      
                    <ul className='nav na-pills'>
                    <li className='w-75 h-100'><button onClick={()=>{<Home nameUn={item}/>}} className='btn btn-primary w-100 h-100'>{item}</button> 
                     </li>
                     </ul>
                    </div>
                   
                    </div>
                    
            
        );
        
      }
      
      
       ) }
   
   <Page totalEquipe={equipes.length} elementParPage={eleparPage} paginate={currentPage}></Page> 
       
  
        </div>
    );
    
}

export default Championnat;