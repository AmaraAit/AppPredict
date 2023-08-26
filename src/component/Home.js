import React, { useState } from 'react';
import Api from './Api';
import Championnat from './Championnat';
import EquipeStat from './EquipeStat';

function Home(props) {
    
   
    return (
        <div class="container text-center m-3 p-1">
           
            <div  className='row m-6  border border-info'>
                <div class="col-3  border border-info">
                <Championnat league={props.league}/>
                </div>
                <div class="col-7  ">
                <Api />
                </div>
                <div class="col-3 border border-info">
               
                </div>
            </div>
        </div>
    );
}

export default Home;