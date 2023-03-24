import { BrowserRouter as Router, Routes, Route, useLocation  } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Authentication from "./components/Auth/Auth";


function App() {
  return (
      <>
          <Routes>
            <Route exact path="/authentication" element={<Authentication />}/>
          </Routes>
      </>
  );

}

export default App;
