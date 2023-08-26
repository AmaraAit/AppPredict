import axios from 'axios';
import React, { useEffect, useState } from 'react';

function EquipeStat(props) {
    const [info,setInfo]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8082/Equipe/Statistic/"+props.nameUn+'/10').then((data)=>{
            console.log(data);
            setInfo(data?.data);
        })
    },[]);
   
      
    
    return (
        <div className='border border-inline-dark'>
            {info.map((inf,i) =>{
                <div  key={i} className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <h1>{inf.name}</h1>
                <div className="progress-bar bg-success" style={"width:"+inf.numberMatch+"%"}>25%</div>
               </div>
            })}
            

        </div>
    );

    }
export default EquipeStat;