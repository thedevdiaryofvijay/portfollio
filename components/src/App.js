import React from "react";
import { Routes, Route } from "react-router-dom";
import ShootingStarBackground from "./background/shootingstars";
import Canvassimple from "./canvas/canvassimple";
import SSCanvas from "./canvas/sscanvas";

import Hic from "./Loading/hic";
import Hict from "./Loading/hict";
import Horload from "./Loading/horload";
import PHLoader from "./Loading/phl";
import LoadingSimple from "./Loading/loadingsimple";


import SimpleSwitch from "./Switch/simple_switch";
import CircleLoader from "./Loading/loadingsimple";
import Navbar from "./Navbar/Simplenavbar";



function App() {
  return (

    
    <div style={{ display: "flex" }}>
      <Navbar/>
      {/*import Logo from "./Logo/logo";*/}
      
        <div
    style={{
      flex: 1,
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem',
    }}
  >
      <div style={{ flex: 1, padding: "1rem" }}>
        <Routes>
          {/* Background */}
          <Route
            path="/background/stars"
            element={<ShootingStarBackground />}
          />

          {/* Canvas */}
          <Route path="/canvas/simple" element={<Canvassimple />} />
          <Route path="/canvas/ss" element={<SSCanvas width={80} height={100}/>} />

          {/* Loading */}
          <Route
            path="/loading/hic"
            element={
              <Hic
                dotCount={4}
                dotSize={20}
                outerColor="#112233"
                innerColor="#ffffff"
                animationDuration={0.8}
              />
            }
          />
          <Route
            path="/loading/hict"
            element={
              <Hict
                dotCount={4}
                dotSize={25}
                spacing={20}
                ringThickness={3}
                borderColors={["#4CAF50", "#FFC107", "#F44336", "#112255"]}
                animationDuration={0.9}
              />
            }
          />
          <Route
            path="/loading/horload"
            element={
              <Horload dotCount={4} color="#4CAF50" dotSize={18} spacing={12} />
            }
          />
          <Route path="/loading/phl" element={<PHLoader dotCount={4}
      dotSize={15}
      ringThickness={1}
      borderColors={['#00B0FF', '#FF4081', '#FFEB3B']}
      pulseScale={1.6}
      animationDuration={0.9}
      baseOpacity={0.4}
      direction="Row"
      backgroundColor="transparent"/>} />
          <Route
            path="/loading/simple"
            element={<LoadingSimple size={60} color="#4CAF50" duration={0.8} />}
          />
          <Route
            path="/loading/circle"
            element={<CircleLoader size={60} color="#4CAF50" duration={0.8} />}
          />

          {/* Logo */}
          {/*<Route path="/logo" element={<Logo />} />*/}

          {/* Switch */}
          <Route
            path="/switch"
            element={
              <SimpleSwitch
                size={12}
                labelOn="YES"
                labelOff="NO"
                onToggle={(state) => console.log("Toggled:", state)}
              />
            }
          />
        </Routes>
      </div>
      </div>
    </div>
  );
}

export default App;
