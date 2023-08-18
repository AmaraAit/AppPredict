import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page(props) {
    const pageNumber=[];
    for(let i=1;i<=Math.ceil(props.totalEquipe/props.elementParPage);i++){
            pageNumber.push(i);
    }
    return (
        <nav>
            <ul className='pagiantion'>
                {pageNumber.map((number)=>
                    <li className='page-item'>
                    <a href='/' className='page-link'>{number}</a>
                    </li>
                )
            }
            </ul>
        </nav>
    );
}

export default Page;