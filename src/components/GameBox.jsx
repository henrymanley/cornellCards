import React from 'react';

export default function GameBox() {

    return (
        <div style={{width: '50%', minWidth:'400px', backgroundColor:'black', 
        borderRadius:'30px', margins:'50px', position: 'fixed', top: '50%', left: '50%', height: '250px'}}>
            <p>Enter Your Name</p>
            <form>
                <input type="text" name="name" placeholder = "Your Name" />

                <p>Join Game</p>
                <input type="text" name="pin" placeholder = "Enter Pin" />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
}
