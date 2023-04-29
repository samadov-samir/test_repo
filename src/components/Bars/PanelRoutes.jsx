import React, { Component } from "react";
import { Route,Routes} from "react-router-dom";
import Home from '../First/First'
import SecondPage from "../Second/Second";
import ThirdPage from '../Third/Third'

class PanelRoutes extends Component {
  render() {
    return (
      <div className="contents">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/oppur" element={<SecondPage/>}/>
            <Route path="/about" element={<ThirdPage/>}/>
        </Routes>
      </div>
    );
  }
}

export default PanelRoutes;