import React from 'react';
import PropTypes from 'prop-types';

function Location(props){
    <div>
        <h4>{props.day}: {props.location}</h4>
        <h4>{props.hours}</h4>
        <h4>Booth {props.booth}</h4>
    </div>
}

Location.propTypes= {
    day: PropTypes.string,
    location: PropTypes.string,
    hours: PropTypes.string,
    booth: PropTypes.string
}

export default Location;

