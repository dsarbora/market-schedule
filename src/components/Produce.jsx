import React from "react";
import PropTypes from "prop-types";

function Produce(props) {
  return (
    <div>
      <style jsx>{`
        div {
          border: 2px solid #80a32d;
          padding-left: 25px;
          margin: 10px;
          margin-top: 10px;
        }
        div:hover {
          transform: scale(1.02);
          box-shadow: 5px 5px rgba(0, 0, 0, 0.5);
        }
      `}</style>
      <h1>{props.month}</h1>
      <h2>{props.produce}</h2>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  produce: PropTypes.array
};
export default Produce;
