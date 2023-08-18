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
    handlclick(){
       
    }
      
    }
    return (
        <div className='border border-inline-dark'>
            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
             <div class="progress-bar bg-success" style="width: 25%">25%</div>
            </div>

        </div>
    );


export default EquipeStat;