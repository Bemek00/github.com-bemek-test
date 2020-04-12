import React from 'react';
import {Link} from 'react-router-dom';

export default function Nawigacja(){
    return(
        <ul>
            <li>
                <Link to="/test/">Home</Link>
            </li>
            <li>
                <Link to="/test/filtrowanie">Filtrowanie</Link>
            </li>
         </ul>
    );
}