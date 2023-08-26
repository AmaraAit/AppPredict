import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Home from './Home';
import dayjs from 'dayjs';
import EquipeStat from './EquipeStat';

function Api(props) {
    const [match,setMatch]=useState([]);
    const [loading,setloading]=useState(false);
    useEffect(() => {
        axios.get("http://localhost:8082/nextMatch").then((res) => {
          
          setMatch(res?.data);
          setloading(true);
        });
      }, []);
      const dateformat=dayjs()
    return (
        <div className='table '>
          {loading ?  
            <table className="table  border border-info">
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
                        
                        <tr key={i} className='border rounded border-info' >
                            <th scope="row">{i}</th>
                            <td><div className="border rounded">{item.nameUn}</div></td>
                            <td><div className="border rounded">{dayjs(item.date).format("DD/MM/YYYY")}</div></td>
                            <td><div className="border rounded">{item.nameDeux}</div></td>
                            <td><button type="button" onClick={()=>EquipeStat} className="btn btn-success w-75 btn-sm border rounded">{item.comment}</button></td>
                      </tr>
                );})
                  }
                 
                 
                </tbody>
              </table>
              :<div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
              }
        </div>
    );
}

export default Api;