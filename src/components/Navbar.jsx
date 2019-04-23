import React from "react";

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
      <button className="btn-size">Seasons</button>
      <button className="btn-size">Locations</button>
    </div>
  );
}

export default Navbar;
