import React from 'react';
import Navbar from './Navbar';
import LocationList from './LocationList'

function App(){
    return(
        <div>
            <Navbar/>
            <div>
                <LocationList/>
            </div>
        </div>
    );
}

export default App;