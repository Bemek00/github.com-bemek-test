import React from 'react';
import {Link} from 'react-router-dom';
import "./nawigacja.css";

function Odsylacze(props){
    return(
        <Link to={props.odsylacz} className="text">{props.naglowek}</Link>
    );
}

function Nawigacja(){
    return(
        <table>
            <tr>
                <td> <Odsylacze odsylacz="/test/" naglowek="Home" /> </td>
                <td> <Odsylacze odsylacz="/test/filtrowanie" naglowek="Filtrowanie" /> </td>
                <td> <Odsylacze odsylacz="/test/zdarzenia" naglowek="Zdarzenia" /> </td>
                <td> <Odsylacze odsylacz="/test/klucze" naglowek="Klucze" /> </td>
                <td> <Odsylacze odsylacz="/test/formularze" naglowek="Formularze" /> </td>
            </tr>
        </table>
    );
}

function HeaderNawigacja(){
    return(
        <header className="headernaw">
            <div className="headernaw-div">
                <Nawigacja />
            </div>
            <hr id="linia" />
        </header>
    );
}

export default HeaderNawigacja;