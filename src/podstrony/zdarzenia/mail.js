import React from 'react';

function EmailBox(props){
    const nieprzeczytaneEmail = props.nieprzeczytaneEmail;

    return(
        <div>
            Cześć!
            {nieprzeczytaneEmail.length > 0 && 
                <p> Masz {nieprzeczytaneEmail.length} nieprzeczytane wiadomości </p>
            }
        </div>
    );
}

export default EmailBox;