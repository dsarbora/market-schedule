import React from "react";
import PropTypes from "prop-types";

function Month(props) {
  return <h1>{props.name}</h1>;
}

Month.propTypes = {
  name: PropTypes.string
};

export default Month;
