import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from './Home';
import dayjs from 'dayjs';
import EquipeStat from './EquipeStat';

function Api(props) {
    const [match,setMatch]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8082/nextMatch").then((res) => {
          
          setMatch(res?.data);
         
        });
      }, []);
      const dateformat=dayjs()
    return (
        <div className='table border '>
            <table className="table w-100">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Equipe 1 </th>
                    <th scope="col">date</th>
                    <th scope="col">Equipe 2</th>
                  </tr>
                </thead>
                <tbody>
                {match.map((item, i) => {
                return (
                  
                        <tr key={i} className='border rounded'>
                            <th scope="row"><button type="button" className="btn-outline-info">{i}</button></th>
                            <td><div className="border rounded">{item.nameUn}</div></td>
                            <td><div className="border rounded">{dayjs(item.date).format("DD/MM/YYYY")}</div></td>
                            <td><div className="border rounded">{item.nameDeux}</div></td>
                            <td><button type="button" onClick={()=>{EquipeStat(item.nameUn)}} className="btn-outline-info  border rounded">verifier</button></td>
                      </tr>
                );})
                  }
                 
                 
                </tbody>
              </table>
        </div>
    );
}

export default Api;