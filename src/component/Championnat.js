import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Page from './Page';


function Championnat(props) {
    const [elements,setElements]=useState([]);
    const [equipes,setEquipes]=useState([]);
    const [currentPage,setCurrentPage]=useState(1);
    const [eleparPage,seteleparPage]=useState(10);
   
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
          <div className='card-header font-weight-light overflow-y-scroll'>
              <h1 className="">{props.league}</h1> 
          </div>
          
          
           
            
                {currentElement.map((item, i) => {
                return (
                  

                    <div className="w-75 px-2 text-center">
                    <div className="row p-2 mb-1 "  key={i}>
                      <div className="col-1">
                      <div class=" shadow-lg bg-body-tertiary rounded">{i+1}</div>
                      </div>
                      <div className="col-3">
                        <div className=" shadow-lg  bg-body-tertiary rounded ">{item}</div>
                      </div>
                     
                    </div>
                   
                    </div>
            
        );
      })}
   
   <Page totalEquipe={equipes.length} elementParPage={eleparPage} paginate={currentPage}></Page> 
       
   
        </div>
    );
}

export default Championnat;