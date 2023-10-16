"use client"
import React from "react";
//import RootLayout from "./layout";
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from "./components/map";
import Information from "./components/information";
import Lenis from '@studio-freight/lenis'

/*

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)
*/

      /*<Router>
        <Routes>
          <Route path="/" Component={information} />
          <Route path="/map" Component={map} />
        </Routes>
    </Router> */
function App() {
  return(
    <>
      <Information />
    </>
  );
}
export default App;
