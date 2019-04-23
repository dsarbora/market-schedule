import React from 'react';

function Navbar() {
    return(
    <div>
        <style jsx>{`
        div {
            background-color: lightgreen;
        }
        `}</style>
        <button>Seasons</button>
        <button>Locations</button>
    </div>
    );
}

export default Navbar;