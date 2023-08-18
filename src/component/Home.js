import React, { useState } from 'react';
import Api from './Api';
import Championnat from './Championnat';

function Home(props) {
    
   
    return (
        <div class="container text-center">
           
            <div  className='row m-3 p-3 border border-info'>
                <div class="col-5">
                <Championnat league={props.league}/>
                </div>
                <div class="col-5">
                <Api />
                </div>
                <div class="col-2">
                3 of 3
                </div>
            </div>
        </div>
    );
}

export default Home;