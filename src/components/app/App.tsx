import './App.css'
import * as React from "react";
import {BrowserRouter } from "react-router-dom";
import {Views} from "../../views/views.tsx";


function App(): React.JSX.Element {
  return (
      <BrowserRouter basename="/">
          <Views/>
      </BrowserRouter>
  );
}

export default App
