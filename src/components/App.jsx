import React from "react";
import Navbar from "./Navbar";
import LocationList from "./LocationList";
import ProduceList from "./ProduceList";

function App() {
  return (
    <div>
      <Navbar />
      <style jsx>{`
        .right {
          float: right;
        }
        .left {
          float: left;
        }
      `}</style>
      <div className="right">
        <LocationList />
      </div>
      <div className="left">
        <ProduceList />
      </div>
    </div>
  );
}

export default App;
