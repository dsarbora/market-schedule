import React from "react";
import Navbar from "./Navbar";
import LocationList from "./LocationList";
import ProduceList from "./ProduceList";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LocationList} />
      </Switch>
      <Switch>
        <Route path="/produce" component={ProduceList} />
      </Switch>

      {/* <style jsx>{`
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
      </div> */}
    </div>
  );
}

export default App;
