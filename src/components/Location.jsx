import React from "react";
import PropTypes from "prop-types";

function Location(props) {
  return (
    <div>
      <style jsx>{`
        div {
          border: 2px solid #80a32d;
          width: 300px;
          padding: 5px;
          margin-top: 10px;
        }
        div:hover {
          box-shadow: 5px 5px rgba(0, 0, 0, 0.2);
          transform: scale(1.02);
        }
      `}</style>
      <h4>
        {props.day}: {props.location}
      </h4>
      <h4>{props.hours}</h4>
      <h4>Booth {props.booth}</h4>
    </div>
  );
}

Location.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Location;
