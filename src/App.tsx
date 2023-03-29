//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";
import { InputText } from 'primereact/inputtext';
import { useState } from "react";
//import {useState} from 'react'  
     

import "./App.css"
import Rotas from "./routes";


function App() {

  return (
    <div> 
      <Rotas/>
    </div>
  );
}

export default App;
