import React from 'react';
import {Link} from 'react-router-dom';

export default function Nawigacja(){
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/filtrowanie">Filtrowanie</Link>
            </li>
         </ul>
    );
}