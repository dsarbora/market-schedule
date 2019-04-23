import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <style jsx>{`
        div {
          background-color: lightgreen;
        }
        .btn-size {
          margin: 5px 0px 5px 20px;
          padding: 15px 35px;
          background-color: #fffff2;
          border: 2px solid #80a32d;
          border-radius: 5px;
          font-size: 25px;
        }
      `}</style>
      <Link to="/produce">
        <button className="btn-size">Seasons</button>
      </Link>
      <Link to="/">
        <button className="btn-size">Locations</button>
      </Link>
    </div>
  );
}

export default Navbar;
