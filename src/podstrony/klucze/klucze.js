import React from 'react';

import Blog from './blog';

function NumberList(props){
    const numbers = [1,2,3,4,5];
    const listItem = numbers.map((number) =>
        <li key={number.toString()}> {number} </li>
    );

    return(
        <ul> {listItem} </ul>
    );
}

function Klucze(props){
    return(
        <div>
            <NumberList />
            <hr />
            <Blog />
        </div>
    );
}

export default Klucze;