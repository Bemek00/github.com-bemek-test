import React from 'react';
import './podzialstron.css';

function PodzialStrony(props){
    return(
        <main className="mainpod">
            <div className="mainpod-div">
                {props.tresc}
            </div>
        </main>
    );
}

export default PodzialStrony;